import { useState, useCallback, useRef, useMemo, useEffect } from 'react';
import { componentRegistry } from './ComponentRegistry';
import { schemas } from './schemaData';
import type { ComponentSchema, PropSchema } from './schemaData';

// ── 타입 ─────────────────────────────────────────────────────────────────

type NodeLayer = 'root' | 'section' | 'items' | 'item' | 'comp';
type ItemsDirection = 'vert' | 'horz' | 'grid';

interface TemplateNode {
  id: string;
  layer: NodeLayer;
  itemsDirection?: ItemsDirection;
  component?: string;
  props?: Record<string, unknown>;
  children?: TemplateNode[];
  sectionName?: string;
  /** 자식 간 간격 (px) — section, items, item에서 사용 */
  gap?: number;
  /** 내부 패딩 [top, right, bottom, left] 또는 단일 값 */
  padding?: number | [number, number, number, number];
}

let nodeId = 0;
const nextId = () => `node-${++nodeId}`;

// ── 드래그 상태 ──────────────────────────────────────────────────────────

interface DragState {
  type: 'palette' | 'canvas';
  action?: string;       // palette에서 드래그할 때 (예: __comp_ButtonBasic)
  nodeId?: string;        // canvas에서 드래그할 때
  sourceParentId?: string;
}

// ── 템플릿 프리셋 ────────────────────────────────────────────────────────

const createEmptyTemplate = (): TemplateNode => {
  nodeId = 0;
  return {
    id: 'root', layer: 'root',
    children: [
      { id: 'header', layer: 'section', sectionName: 'header', gap: 8, padding: [10, 16, 10, 16], children: [] },
      { id: 'body', layer: 'section', sectionName: 'body', gap: 8, padding: [0, 16, 0, 16], children: [] },
      { id: 'footer', layer: 'section', sectionName: 'footer', gap: 8, padding: [16, 16, 16, 16], children: [] },
    ],
  };
};

// ── Props 에디터 ─────────────────────────────────────────────────────────

const PropEditor = ({
  schema,
  values,
  onChange,
}: {
  schema: ComponentSchema;
  values: Record<string, unknown>;
  onChange: (key: string, value: unknown) => void;
}) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
    {Object.entries(schema.props).map(([key, prop]: [string, PropSchema]) => (
      <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <label style={{ width: 90, fontSize: 11, color: '#888', textAlign: 'right', flexShrink: 0 }}>
          {key}
        </label>
        {prop.type === 'enum' && prop.values ? (
          <select
            value={String(values[key] ?? prop.default ?? '')}
            onChange={(e) => {
              const v = e.target.value;
              const num = Number(v);
              onChange(key, isNaN(num) || v === '' ? v : num);
            }}
            style={{ flex: 1, fontSize: 12, padding: '4px 6px', borderRadius: 6, border: '1px solid #e0e0e0', background: '#fff' }}
          >
            {prop.values.map((v) => (
              <option key={String(v)} value={String(v)}>{String(v)}</option>
            ))}
          </select>
        ) : prop.type === 'boolean' ? (
          <input
            type="checkbox"
            checked={Boolean(values[key] ?? prop.default ?? false)}
            onChange={(e) => onChange(key, e.target.checked)}
          />
        ) : prop.type === 'number' ? (
          <input
            type="number"
            value={String(values[key] ?? prop.default ?? '')}
            onChange={(e) => onChange(key, Number(e.target.value))}
            style={{ flex: 1, fontSize: 12, padding: '4px 6px', borderRadius: 6, border: '1px solid #e0e0e0', width: 60 }}
          />
        ) : (
          <input
            type="text"
            value={String(values[key] ?? prop.default ?? '')}
            onChange={(e) => onChange(key, e.target.value)}
            style={{ flex: 1, fontSize: 12, padding: '4px 6px', borderRadius: 6, border: '1px solid #e0e0e0' }}
          />
        )}
      </div>
    ))}
  </div>
);

// ── 드롭 인디케이터 ──────────────────────────────────────────────────────

const DropIndicator = ({ position }: { position: 'before' | 'after' | 'inside' }) => (
  <div style={{
    height: position === 'inside' ? '100%' : 3,
    background: '#3b82f6',
    borderRadius: 2,
    margin: position === 'inside' ? 0 : '2px 0',
    position: position === 'inside' ? 'absolute' : 'relative',
    inset: position === 'inside' ? 0 : undefined,
    opacity: position === 'inside' ? 0.1 : 1,
    pointerEvents: 'none',
    zIndex: 10,
  }} />
);

// ── 팔레트 ───────────────────────────────────────────────────────────────

const sectionToCategoryMap: Record<string, string> = {
  header: 'Header',
  body: 'Body',
  footer: 'Footer',
};

const Palette = ({
  onAdd,
  onDragStart,
  onDragEnd,
  activeSection,
  activeItemsDirection,
  onItemsDirectionChange,
  onCreateItems,
}: {
  onAdd: (action: string) => void;
  onDragStart: (action: string) => void;
  onDragEnd: () => void;
  activeSection: string | null;
  activeItemsDirection: ItemsDirection | null;
  onItemsDirectionChange: (dir: ItemsDirection) => void;
  onCreateItems: () => void;
}) => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  // 섹션 선택 시 해당 카테고리 자동 열기
  const prevSectionRef = useRef(activeSection);
  if (activeSection !== prevSectionRef.current) {
    prevSectionRef.current = activeSection;
    if (activeSection && sectionToCategoryMap[activeSection]) {
      // 다음 렌더에서 반영되도록 직접 set
      setTimeout(() => setOpenCategory(sectionToCategoryMap[activeSection]), 0);
    }
  }

  // 빌더용 커스텀 카테고리
  const builderCategories = useMemo(() => {
    const headerNames = ['Profile', 'ProfileHorizontal', 'HeaderTitle', 'HeaderBlock', 'Handle', 'Indicator'];
    const bodyNames = ['Thumbnail', 'ImageRect', 'TabList', 'Tab', 'Chip', 'Selection', 'SwitchToggle', 'SwitchTab', 'Dialog', 'Divider'];
    const footerNames = ['ReactionHorizontal', 'ReactionVertical', 'Pagination', 'ButtonBasic', 'ButtonIcon', 'ButtonSegment', 'ButtonGroup'];
    const excludeNames = ['Icon', 'BadgeOverlay', 'BadgeAd', 'BadgeCount', 'BadgeTooltip', 'BadgeVerified'];
    const assigned = new Set([...headerNames, ...bodyNames, ...footerNames, ...excludeNames]);

    const find = (names: string[]) => names.map((n) => schemas.find((s) => s.component === n)).filter(Boolean) as typeof schemas;
    const etcItems = schemas.filter((s) => !assigned.has(s.component));

    const groups: Record<string, typeof schemas> = {};
    const h = find(headerNames); if (h.length) groups['Header'] = h;
    const b = find(bodyNames); if (b.length) groups['Body'] = b;
    const f = find(footerNames); if (f.length) groups['Footer'] = f;
    if (etcItems.length) groups['Etc.'] = etcItems;
    return groups;
  }, []);

  const filteredCategories = useMemo(() => {
    if (!search.trim()) return builderCategories;
    const q = search.toLowerCase();
    const result: Record<string, typeof schemas> = {};
    for (const [cat, items] of Object.entries(builderCategories)) {
      const filtered = items.filter(
        (s) => s.component.toLowerCase().includes(q) || cat.toLowerCase().includes(q),
      );
      if (filtered.length > 0) result[cat] = filtered;
    }
    return result;
  }, [search, builderCategories]);

  return (
    <div style={{
      width: 230, borderRight: '1px solid #e5e5e5', overflowY: 'auto',
      background: '#fafafa', display: 'flex', flexDirection: 'column',
    }}>
      {/* 검색 */}
      <div style={{ padding: '12px 12px 8px', borderBottom: '1px solid #e5e5e5' }}>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => { setSearch(e.target.value); setOpenCategory(null); }}
          style={{
            width: '100%', padding: '7px 10px', fontSize: 12, borderRadius: 8,
            border: '1px solid #ddd', outline: 'none', boxSizing: 'border-box',
            background: '#fff',
          }}
        />
      </div>

      {/* Items Layout Direction */}
      <div style={{ padding: '10px 12px', borderBottom: '1px solid #eee' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: '#999', textTransform: 'uppercase', letterSpacing: 0.5 }}>
            Items
          </span>
          <button
            onClick={onCreateItems}
            style={{
              padding: '3px 10px', fontSize: 11, fontWeight: 600,
              border: '1px solid #6366f1', borderRadius: 6,
              background: '#6366f10a', color: '#6366f1',
              cursor: 'pointer', transition: 'all 0.15s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#6366f1'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#6366f10a'; e.currentTarget.style.color = '#6366f1'; }}
          >
            + 생성
          </button>
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          {(['vert', 'horz', 'grid'] as ItemsDirection[]).map((dir) => {
            const isActive = activeItemsDirection === dir;
            const labels: Record<ItemsDirection, string> = { vert: '↕ Vert', horz: '↔ Horz', grid: '▦ Grid' };
            return (
              <button
                key={dir}
                onClick={() => onItemsDirectionChange(dir)}
                style={{
                  flex: 1, padding: '7px 4px', fontSize: 11, textAlign: 'center',
                  border: isActive ? '2px solid #6366f1' : '1px solid #e0e0e0',
                  borderRadius: 8, cursor: 'pointer',
                  background: isActive ? '#6366f10a' : '#fff',
                  color: isActive ? '#6366f1' : '#333',
                  fontWeight: isActive ? 700 : 500,
                  transition: 'all 0.15s',
                }}
              >
                {labels[dir]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Components */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <div style={{ padding: '10px 12px 0', fontSize: 10, fontWeight: 700, color: '#999', textTransform: 'uppercase', letterSpacing: 0.5 }}>
          Components
        </div>
        {Object.entries(filteredCategories).map(([category, items]) => {
          const isOpen = openCategory === category || search.trim().length > 0;
          return (
            <div key={category}>
              <button
                onClick={() => setOpenCategory(isOpen && !search ? null : category)}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '8px 12px', fontSize: 12, fontWeight: 600, color: '#555',
                  background: 'transparent', border: 'none', borderBottom: '1px solid #eee',
                  cursor: 'pointer', textAlign: 'left',
                }}
              >
                <span>{category}</span>
                <span style={{
                  fontSize: 10, color: '#aaa',
                  transform: isOpen ? 'rotate(90deg)' : 'none', transition: 'transform 0.15s',
                }}>▶</span>
              </button>
              {isOpen && (
                <div style={{ padding: '4px 8px 8px', display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {items.map((s) => (
                    <button
                      key={s.component}
                      draggable
                      onDragStart={(e) => {
                        const action = `__comp_${s.component}`;
                        e.dataTransfer.setData('text/plain', action);
                        e.dataTransfer.effectAllowed = 'copy';
                        onDragStart(action);
                      }}
                      onDragEnd={onDragEnd}
                      onClick={() => onAdd(`__comp_${s.component}`)}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 6,
                        padding: '6px 8px', fontSize: 11, textAlign: 'left',
                        border: '1px solid #e5e5e5', borderRadius: 8,
                        background: '#fff', cursor: 'grab',
                        transition: 'all 0.15s',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = '#fffbeb'; e.currentTarget.style.borderColor = '#fde68a'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = '#e5e5e5'; }}
                    >
                      <span style={{
                        color: '#f59e0b', fontSize: 9, fontWeight: 800,
                        background: '#f59e0b15', padding: '1px 4px', borderRadius: 3,
                      }}>C</span>
                      {s.component}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ── Spacing 에디터 ───────────────────────────────────────────────────────

const resolvePadding = (p?: number | [number, number, number, number]): [number, number, number, number] => {
  if (p === undefined) return [0, 0, 0, 0];
  if (typeof p === 'number') return [p, p, p, p];
  return p;
};

const SpacingSlider = ({
  label,
  value,
  onChange,
  color,
  min = 0,
  max = 40,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  color: string;
  min?: number;
  max?: number;
}) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
    <label style={{ width: 50, fontSize: 11, color: '#888', textAlign: 'right', flexShrink: 0 }}>
      {label}
    </label>
    <input
      type="range"
      min={min} max={max} step={1}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      style={{ flex: 1, accentColor: color, height: 4, cursor: 'pointer' }}
    />
    <div style={{ position: 'relative', width: 42, flexShrink: 0 }}>
      <input
        type="number"
        min={min} max={max}
        value={value}
        onChange={(e) => onChange(Math.max(min, Math.min(max, Number(e.target.value) || 0)))}
        style={{
          width: '100%', fontSize: 11, padding: '3px 4px', borderRadius: 4,
          border: '1px solid #ddd', textAlign: 'center', background: '#fff',
        }}
      />
    </div>
  </div>
);

const PaddingEditor = ({
  value,
  onChange,
  color,
}: {
  value: [number, number, number, number];
  onChange: (v: [number, number, number, number]) => void;
  color: string;
}) => {
  const labels = ['top', 'right', 'bottom', 'left'] as const;
  const allSame = value[0] === value[1] && value[1] === value[2] && value[2] === value[3];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {/* 전체 동시 조절 */}
      <SpacingSlider
        label="all"
        value={allSame ? value[0] : 0}
        onChange={(v) => onChange([v, v, v, v])}
        color={color}
      />
      {/* 개별 조절 */}
      {labels.map((label, i) => (
        <SpacingSlider
          key={label}
          label={label}
          value={value[i]}
          onChange={(v) => {
            const next: [number, number, number, number] = [...value];
            next[i] = v;
            onChange(next);
          }}
          color={color}
        />
      ))}
    </div>
  );
};

// ── 노드 렌더러 ──────────────────────────────────────────────────────────

const sectionMeta: Record<string, { label: string; color: string }> = {
  header: { label: 'Header', color: '#6366f1' },
  body:   { label: 'Body',   color: '#10b981' },
  footer: { label: 'Footer', color: '#f59e0b' },
};

const itemsLabel: Record<ItemsDirection, string> = {
  vert: 'itemsVert',
  horz: 'itemsHorz',
  grid: 'itemsGrid',
};

const NodeRenderer = ({
  node,
  selectedId,
  onSelect,
  onDelete,
  dragState,
  dropTarget,
  onCanvasDragStart,
  onCanvasDragEnd,
  onNodeDragOver,
  onNodeDrop,
}: {
  node: TemplateNode;
  selectedId: string | null;
  onSelect: (id: string) => void;
  onDelete: (id: string) => void;
  dragState: DragState | null;
  dropTarget: { parentId: string; index: number } | null;
  onCanvasDragStart: (nodeId: string, parentId: string) => void;
  onCanvasDragEnd: () => void;
  onNodeDragOver: (e: React.DragEvent, parentId: string, index: number) => void;
  onNodeDrop: (e: React.DragEvent, parentId: string, index: number) => void;
}) => {
  const isSelected = selectedId === node.id;
  const isDragging = dragState?.nodeId === node.id;

  // ── Root ──
  if (node.layer === 'root') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        {node.children?.map((child) => (
          <NodeRenderer
            key={child.id} node={child} selectedId={selectedId}
            onSelect={onSelect} onDelete={onDelete}
            dragState={dragState} dropTarget={dropTarget}
            onCanvasDragStart={onCanvasDragStart} onCanvasDragEnd={onCanvasDragEnd}
            onNodeDragOver={onNodeDragOver} onNodeDrop={onNodeDrop}
          />
        ))}
      </div>
    );
  }

  // ── Section (header / body / footer) ──
  if (node.layer === 'section') {
    const sec = sectionMeta[node.sectionName ?? ''] ?? { label: 'Section', color: '#999' };
    const isBody = node.sectionName === 'body';
    const isDropInside = dropTarget?.parentId === node.id;
    const pad = resolvePadding(node.padding);
    const sectionGap = node.gap ?? 8;

    const hasChildren = (node.children?.length ?? 0) > 0;
    // header/footer: items 그룹 안의 컴포넌트 수 표시
    const hasItemsGroup = !isBody && hasChildren && node.children![0].layer === 'items';
    const currentCount = hasItemsGroup
      ? node.children![0].children?.length ?? 0
      : node.children?.length ?? 0;

    return (
      <div
        onClick={(e) => { e.stopPropagation(); onSelect(node.id); }}
        onDragOver={(e) => {
          e.preventDefault();
          e.stopPropagation();
          if (!node.children?.length) {
            onNodeDragOver(e, node.id, 0);
          }
        }}
        onDrop={(e) => {
          e.preventDefault();
          e.stopPropagation();
          if (!node.children?.length) {
            onNodeDrop(e, node.id, 0);
          }
        }}
        style={{
          display: 'flex', flexDirection: 'column',
          padding: hasChildren ? `${pad[0]}px ${pad[1]}px ${pad[2]}px ${pad[3]}px` : 0,
          flex: isBody ? 1 : undefined,
          position: 'relative', cursor: 'pointer',
          background: isSelected ? `${sec.color}12` : 'transparent',
          transition: 'all 0.15s',
        }}
      >
        {/* 섹션 라벨 (점선 바깥 좌측 상단) */}
        <div
          onClick={(e) => { e.stopPropagation(); onSelect(node.id); }}
          style={{
            display: 'flex', alignItems: 'center', gap: 4,
            padding: '2px 6px', cursor: 'pointer', userSelect: 'none',
          }}
        >
          <span style={{
            fontSize: 9, fontWeight: 700,
            color: isSelected ? sec.color : `${sec.color}80`,
            textTransform: 'uppercase', letterSpacing: 0.5,
            transition: 'color 0.15s',
          }}>
            {sec.label}
          </span>
          <span style={{
            fontSize: 9, fontWeight: 600,
            color: isSelected ? sec.color : `${sec.color}50`,
          }}>
            {currentCount}
          </span>
        </div>

        {/* 비어있을 때 */}
        {!hasChildren && (
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            minHeight: isBody ? 300 : 56,
            border: isSelected
              ? `2px dashed ${sec.color}`
              : isDropInside
                ? `2px dashed ${sec.color}`
                : `2px dashed ${sec.color}35`,
            background: isSelected
              ? `${sec.color}08`
              : isDropInside
                ? `${sec.color}06`
                : 'transparent',
            transition: 'all 0.15s',
          }}>
            <span style={{ fontSize: 11, color: isDropInside ? sec.color : `${sec.color}50` }}>
              {isDropInside ? '여기에 놓기' : `+ ${sec.label}에 추가`}
            </span>
          </div>
        )}

        {/* 자식이 있을 때 */}
        {hasChildren && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: sectionGap, width: '100%' }}>
            {node.children?.map((child, idx) => (
              <div key={child.id} style={{ width: '100%', position: 'relative' }}>
                {dropTarget?.parentId === node.id && dropTarget.index === idx && (
                  <DropIndicator position="before" />
                )}
                <div
                  onDragOver={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const rect = e.currentTarget.getBoundingClientRect();
                    const midY = rect.top + rect.height / 2;
                    const insertIdx = e.clientY < midY ? idx : idx + 1;
                    onNodeDragOver(e, node.id, insertIdx);
                  }}
                  onDrop={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const rect = e.currentTarget.getBoundingClientRect();
                    const midY = rect.top + rect.height / 2;
                    const insertIdx = e.clientY < midY ? idx : idx + 1;
                    onNodeDrop(e, node.id, insertIdx);
                  }}
                >
                  <NodeRenderer
                    node={child} selectedId={selectedId}
                    onSelect={onSelect} onDelete={onDelete}
                    dragState={dragState} dropTarget={dropTarget}
                    onCanvasDragStart={onCanvasDragStart} onCanvasDragEnd={onCanvasDragEnd}
                    onNodeDragOver={onNodeDragOver} onNodeDrop={onNodeDrop}
                  />
                </div>
                {dropTarget?.parentId === node.id && dropTarget.index === idx + 1 && idx === (node.children?.length ?? 0) - 1 && (
                  <DropIndicator position="after" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // ── L1: Items ──
  if (node.layer === 'items') {
    const dir = node.itemsDirection ?? 'vert';
    const isGrid = dir === 'grid';
    const label = itemsLabel[dir];
    const isDropInside = dropTarget?.parentId === node.id;
    const itemsGap = node.gap ?? 8;
    const itemsPad = resolvePadding(node.padding);

    return (
      <div
        draggable
        onDragStart={(e) => {
          e.stopPropagation();
          e.dataTransfer.effectAllowed = 'move';
          onCanvasDragStart(node.id, '');
        }}
        onDragEnd={onCanvasDragEnd}
        onClick={(e) => { e.stopPropagation(); onSelect(node.id); }}
        onDragOver={(e) => {
          e.preventDefault();
          e.stopPropagation();
          if (!node.children?.length) {
            onNodeDragOver(e, node.id, 0);
          }
        }}
        onDrop={(e) => {
          e.preventDefault();
          e.stopPropagation();
          if (!node.children?.length) {
            onNodeDrop(e, node.id, 0);
          }
        }}
        style={{
          display: isGrid ? 'grid' : 'flex',
          flexDirection: dir === 'horz' ? 'row' : 'column',
          ...(isGrid ? { gridTemplateColumns: 'repeat(2, 1fr)' } : {}),
          gap: itemsGap,
          padding: `${itemsPad[0]}px ${itemsPad[1]}px ${itemsPad[2]}px ${itemsPad[3]}px`,
          border: isSelected ? '2px solid #6366f1' : isDragging ? '2px dashed #6366f180' : '1.5px dashed #6366f130',
          borderRadius: 10,
          background: isSelected ? '#6366f106' : isDragging ? '#6366f104' : 'transparent',
          position: 'relative', cursor: 'grab',
          width: '100%', boxSizing: 'border-box',
          overflow: dir === 'horz' ? 'auto' : undefined,
          opacity: isDragging ? 0.4 : 1,
          transition: 'all 0.15s',
          marginTop: 4,
        }}
      >
        <span style={{
          position: 'absolute', top: -9, left: 10, fontSize: 9, fontWeight: 700,
          color: '#6366f1', background: '#fff', padding: '0 5px',
        }}>
          {label}
        </span>
        <button
          onClick={(e) => { e.stopPropagation(); onDelete(node.id); }}
          style={{
            position: 'absolute', top: 4, right: 4, fontSize: 9,
            background: '#6366f1', color: '#fff', border: 'none', borderRadius: 4,
            padding: '2px 6px', cursor: 'pointer', lineHeight: '14px', zIndex: 2,
          }}
        >✕</button>

        {node.children?.map((child, idx) => (
          <div
            key={child.id}
            style={{ position: 'relative', width: '100%', minWidth: 0 }}
            onDragOver={(e) => {
              e.preventDefault();
              e.stopPropagation();
              const rect = e.currentTarget.getBoundingClientRect();
              const isHorizontal = dir === 'horz' || isGrid;
              const mid = isHorizontal ? rect.left + rect.width / 2 : rect.top + rect.height / 2;
              const pos = isHorizontal ? e.clientX : e.clientY;
              onNodeDragOver(e, node.id, pos < mid ? idx : idx + 1);
            }}
            onDrop={(e) => {
              e.preventDefault();
              e.stopPropagation();
              const rect = e.currentTarget.getBoundingClientRect();
              const isHorizontal = dir === 'horz' || isGrid;
              const mid = isHorizontal ? rect.left + rect.width / 2 : rect.top + rect.height / 2;
              const pos = isHorizontal ? e.clientX : e.clientY;
              onNodeDrop(e, node.id, pos < mid ? idx : idx + 1);
            }}
          >
            <NodeRenderer
              node={child} selectedId={selectedId}
              onSelect={onSelect} onDelete={onDelete}
              dragState={dragState} dropTarget={dropTarget}
              onCanvasDragStart={onCanvasDragStart} onCanvasDragEnd={onCanvasDragEnd}
              onNodeDragOver={onNodeDragOver} onNodeDrop={onNodeDrop}
            />
          </div>
        ))}
        {(!node.children || node.children.length === 0) && (
          <div style={{
            color: isDropInside ? '#3b82f6' : '#6366f140',
            fontSize: 10, textAlign: 'center',
            padding: 12,
            border: isDropInside ? '2px dashed #3b82f6' : 'none',
            borderRadius: 6,
            gridColumn: isGrid ? 'span 2' : undefined,
          }}>
            {isDropInside ? '여기에 놓기' : '+ 컴포넌트 드래그'}
          </div>
        )}
      </div>
    );
  }

  // ── L3: Component ──
  const Component = node.component ? componentRegistry[node.component] : null;
  return (
    <div
      draggable
      onDragStart={(e) => {
        e.stopPropagation();
        e.dataTransfer.effectAllowed = 'move';
        onCanvasDragStart(node.id, '');
      }}
      onDragEnd={onCanvasDragEnd}
      onClick={(e) => { e.stopPropagation(); onSelect(node.id); }}
      style={{
        border: isSelected ? '2px solid #f59e0b' : '1px solid transparent',
        borderRadius: 8,
        padding: 4,
        position: 'relative', cursor: 'grab',
        width: '100%', boxSizing: 'border-box',
        background: isSelected ? '#f59e0b06' : 'transparent',
        opacity: isDragging ? 0.4 : 1,
        transition: 'all 0.15s',
      }}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onDelete(node.id); }}
        style={{
          position: 'absolute', top: -6, right: -6, fontSize: 9,
          background: '#f59e0b', color: '#fff', border: 'none', borderRadius: 10,
          width: 18, height: 18, cursor: 'pointer', zIndex: 2, lineHeight: '16px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >✕</button>
      {Component ? (
        <div className="builder-comp-wrap" style={{ width: '100%' }}>
          <Component {...(node.props ?? {})} {...(node.component === 'Thumbnail' || node.component === 'ImageRect' ? { width: '100%' as unknown as number } : {})}>
            {node.props?.children as string ?? node.component}
          </Component>
        </div>
      ) : (
        <div style={{ padding: 8, background: '#fee', borderRadius: 6, fontSize: 12 }}>
          Unknown: {node.component}
        </div>
      )}
    </div>
  );
};

// ── 미리보기 렌더러 ─────────────────────────────────────────────────────────

const PreviewRenderer = ({ node }: { node: TemplateNode }) => {
  const resolvePad = (p?: number | [number, number, number, number]) => {
    if (p === undefined) return [0, 0, 0, 0];
    return typeof p === 'number' ? [p, p, p, p] : p;
  };

  if (node.layer === 'root') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        {node.children?.map((c) => <PreviewRenderer key={c.id} node={c} />)}
      </div>
    );
  }

  if (node.layer === 'section') {
    const pad = resolvePad(node.padding);
    const isBody = node.sectionName === 'body';
    return (
      <div style={{
        display: 'flex', flexDirection: 'column',
        padding: `${pad[0]}px ${pad[1]}px ${pad[2]}px ${pad[3]}px`,
        gap: node.gap ?? 8,
        flex: isBody ? 1 : undefined,
      }}>
        {node.children?.map((c) => <PreviewRenderer key={c.id} node={c} />)}
      </div>
    );
  }

  if (node.layer === 'items') {
    const dir = node.itemsDirection ?? 'vert';
    const isGrid = dir === 'grid';
    const pad = resolvePad(node.padding);
    return (
      <div style={{
        display: isGrid ? 'grid' : 'flex',
        flexDirection: dir === 'horz' ? 'row' : 'column',
        ...(isGrid ? { gridTemplateColumns: 'repeat(2, 1fr)' } : {}),
        gap: node.gap ?? 8,
        padding: `${pad[0]}px ${pad[1]}px ${pad[2]}px ${pad[3]}px`,
        width: '100%', boxSizing: 'border-box',
      }}>
        {node.children?.map((c) => <PreviewRenderer key={c.id} node={c} />)}
      </div>
    );
  }

  // comp
  const Component = node.component ? componentRegistry[node.component] : null;
  if (!Component) return null;
  const isFullWidth = node.component === 'Thumbnail' || node.component === 'ImageRect';
  return (
    <div style={{ width: '100%' }}>
      <Component {...(node.props ?? {})} {...(isFullWidth ? { width: '100%' as unknown as number } : {})}>
        {node.props?.children as string ?? node.component}
      </Component>
    </div>
  );
};

// ── 메인 빌더 ──────────────────────────────────────────────────────────────

const MAX_HISTORY = 50;

export const BuilderPlayground = () => {
  const [tree, _setTree] = useState<TemplateNode>(() => createEmptyTemplate());
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'edit' | 'preview' | 'json'>('edit');
  const [dragState, setDragState] = useState<DragState | null>(null);
  const [dropTarget, setDropTarget] = useState<{ parentId: string; index: number } | null>(null);
  const dropTargetRef = useRef<{ parentId: string; index: number } | null>(null);

  // ── Undo / Redo ──

  const historyRef = useRef<TemplateNode[]>([]);
  const futureRef = useRef<TemplateNode[]>([]);

  const setTree: typeof _setTree = useCallback((action) => {
    _setTree((prev) => {
      const next = typeof action === 'function' ? action(prev) : action;
      if (next !== prev) {
        historyRef.current = [...historyRef.current.slice(-(MAX_HISTORY - 1)), prev];
        futureRef.current = [];
      }
      return next;
    });
  }, []);

  const undo = useCallback(() => {
    if (historyRef.current.length === 0) return;
    _setTree((prev) => {
      const last = historyRef.current[historyRef.current.length - 1];
      historyRef.current = historyRef.current.slice(0, -1);
      futureRef.current = [...futureRef.current, prev];
      return last;
    });
  }, []);

  const redo = useCallback(() => {
    if (futureRef.current.length === 0) return;
    _setTree((prev) => {
      const next = futureRef.current[futureRef.current.length - 1];
      futureRef.current = futureRef.current.slice(0, -1);
      historyRef.current = [...historyRef.current, prev];
      return next;
    });
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'z') {
        e.preventDefault();
        if (e.shiftKey) {
          redo();
        } else {
          undo();
        }
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [undo, redo]);

  // ── 트리 유틸 ──

  const findNode = useCallback((root: TemplateNode, id: string): TemplateNode | null => {
    if (root.id === id) return root;
    for (const child of root.children ?? []) {
      const found = findNode(child, id);
      if (found) return found;
    }
    return null;
  }, []);

  const findParent = useCallback((root: TemplateNode, childId: string): TemplateNode | null => {
    for (const child of root.children ?? []) {
      if (child.id === childId) return root;
      const found = findParent(child, childId);
      if (found) return found;
    }
    return null;
  }, []);

  const updateTree = useCallback((root: TemplateNode, id: string, updater: (n: TemplateNode) => TemplateNode): TemplateNode => {
    if (root.id === id) return updater(root);
    return { ...root, children: root.children?.map((c) => updateTree(c, id, updater)) };
  }, []);

  const removeFromTree = useCallback((root: TemplateNode, id: string): TemplateNode => {
    return { ...root, children: root.children?.filter((c) => c.id !== id).map((c) => removeFromTree(c, id)) };
  }, []);

  const insertIntoTree = useCallback((root: TemplateNode, parentId: string, index: number, node: TemplateNode): TemplateNode => {
    if (root.id === parentId) {
      const children = [...(root.children ?? [])];
      children.splice(index, 0, node);
      return { ...root, children };
    }
    return { ...root, children: root.children?.map((c) => insertIntoTree(c, parentId, index, node)) };
  }, []);

  // ── 새 노드 생성 ──

  const createNodeFromAction = useCallback((action: string, targetId?: string): TemplateNode | null => {
    if (action === '__items_vert') return { id: nextId(), layer: 'items', itemsDirection: 'vert', gap: 8, padding: 0, children: [] };
    if (action === '__items_horz') return { id: nextId(), layer: 'items', itemsDirection: 'horz', gap: 8, padding: 0, children: [] };
    if (action === '__items_grid') return { id: nextId(), layer: 'items', itemsDirection: 'grid', gap: 8, padding: 0, children: [] };
    if (action.startsWith('__comp_')) {
      const componentName = action.replace('__comp_', '');
      const schema = schemas.find((s) => s.component === componentName);
      const defaultProps: Record<string, unknown> = {};
      if (schema) {
        for (const [key, prop] of Object.entries(schema.props)) {
          if (prop.default !== undefined) defaultProps[key] = prop.default;
        }
      }
      if (componentName.startsWith('Button')) {
        defaultProps.children = 'Button';
        if (targetId) {
          const targetNode = findNode(tree, targetId);
          if (targetNode?.layer === 'section' && targetNode.sectionName === 'footer') {
            defaultProps.fullWidth = true;
          }
        }
      }
      return { id: nextId(), layer: 'comp', component: componentName, props: defaultProps };
    }
    return null;
  }, [findNode, tree]);

  // ── 추가 위치 판별 ──

  const findAddTarget = useCallback((targetId: string): string => {
    const node = findNode(tree, targetId);
    if (!node) return 'body';
    if (node.layer === 'comp') {
      const parent = findParent(tree, targetId);
      return parent?.id ?? 'body';
    }
    return targetId;
  }, [tree, findNode, findParent]);

  // ── 섹션 제한 체크 ──

  const canAddTo = useCallback((parentId: string): boolean => {
    const parent = findNode(tree, parentId);
    if (!parent) return false;
    if (parent.layer === 'section') {
      // header/footer: items 그룹이 이미 있으면 그 안에 추가 가능 → 항상 true
      // body: items 그룹 10개 제한
      if (parent.sectionName === 'body') {
        return (parent.children?.length ?? 0) < 10;
      }
      // header/footer는 auto-wrap이 처리하므로 항상 허용
      return true;
    }
    // items 안에 추가할 때: header/footer의 items는 무제한, body items도 무제한
    return true;
  }, [findNode, tree]);

  // ── 섹션에 자동 items 그룹 래핑 ──
  // ── 섹션에 comp 추가 ──
  // 1) comp 클릭 → 마지막 items 안 comp와 같은 종류면 그 items에 추가
  // 2) 다른 종류이거나 items가 없으면 → 새 items 그룹 생성
  const addToSectionWithAutoWrap = useCallback((
    prev: TemplateNode,
    sectionId: string,
    newNode: TemplateNode,
    _index?: number,
  ): TemplateNode => {
    const section = findNode(prev, sectionId);
    if (!section || section.layer !== 'section') {
      return updateTree(prev, sectionId, (n) => ({ ...n, children: [...(n.children ?? []), newNode] }));
    }

    const children = section.children ?? [];

    if (newNode.layer === 'comp') {
      // 마지막 자식이 items이고 같은 comp 종류면 → 그 안에 추가
      if (children.length > 0) {
        const last = children[children.length - 1];
        if (last.layer === 'items' && last.children?.length) {
          const sameType = last.children[0].component === newNode.component;
          if (sameType) {
            return insertIntoTree(prev, last.id, last.children.length, newNode);
          }
        }
      }

      // 새 items 그룹 생성
      const itemsNode: TemplateNode = {
        id: nextId(),
        layer: 'items',
        itemsDirection: 'vert',
        gap: 8,
        padding: 0,
        children: [newNode],
      };
      return updateTree(prev, sectionId, (n) => ({ ...n, children: [...(n.children ?? []), itemsNode] }));
    }

    // comp가 아닌 노드
    return updateTree(prev, sectionId, (n) => ({ ...n, children: [...(n.children ?? []), newNode] }));
  }, [findNode, insertIntoTree, updateTree]);

  // ── 팔레트에서 클릭으로 추가 ──

  const handleAdd = useCallback((action: string) => {
    const targetId = findAddTarget(selectedId ?? 'body');
    if (!canAddTo(targetId)) return;
    const newNode = createNodeFromAction(action, targetId);
    if (!newNode) return;

    const target = findNode(tree, targetId);
    if (target?.layer === 'section') {
      setTree((prev) => addToSectionWithAutoWrap(prev, targetId, newNode));
    } else {
      setTree((prev) =>
        updateTree(prev, targetId, (n) => ({
          ...n,
          children: [...(n.children ?? []), newNode],
        })),
      );
    }
  }, [selectedId, findAddTarget, canAddTo, createNodeFromAction, updateTree, findNode, tree, addToSectionWithAutoWrap]);

  // ── 삭제 ──

  const protectedIds = new Set(['root', 'header', 'body', 'footer']);
  const handleDelete = useCallback((id: string) => {
    if (protectedIds.has(id)) return;
    setTree((prev) => removeFromTree(prev, id));
    if (selectedId === id) setSelectedId(null);
  }, [removeFromTree, selectedId]);

  // ── Props 변경 ──

  const handlePropChange = useCallback((key: string, value: unknown) => {
    if (!selectedId) return;
    setTree((prev) =>
      updateTree(prev, selectedId, (n) => ({
        ...n,
        props: { ...(n.props ?? {}), [key]: value },
      })),
    );
  }, [selectedId, updateTree]);


  const handleGapChange = useCallback((value: number) => {
    if (!selectedId) return;
    setTree((prev) =>
      updateTree(prev, selectedId, (n) => ({ ...n, gap: value })),
    );
  }, [selectedId, updateTree]);

  const handlePaddingChange = useCallback((value: [number, number, number, number]) => {
    if (!selectedId) return;
    setTree((prev) =>
      updateTree(prev, selectedId, (n) => ({ ...n, padding: value })),
    );
  }, [selectedId, updateTree]);

  // ── 드래그앤드롭 핸들러 ──

  const handlePaletteDragStart = useCallback((action: string) => {
    setDragState({ type: 'palette', action });
  }, []);

  const handleCanvasDragStart = useCallback((nId: string, parentId: string) => {
    const parent = findParent(tree, nId);
    setDragState({ type: 'canvas', nodeId: nId, sourceParentId: parent?.id ?? parentId });
  }, [findParent, tree]);

  const handleDragEnd = useCallback(() => {
    setDragState(null);
    setDropTarget(null);
    dropTargetRef.current = null;
  }, []);

  const handleNodeDragOver = useCallback((_e: React.DragEvent, parentId: string, index: number) => {
    const current = dropTargetRef.current;
    if (current?.parentId === parentId && current?.index === index) return;
    const next = { parentId, index };
    dropTargetRef.current = next;
    setDropTarget(next);
  }, []);

  const handleNodeDrop = useCallback((_e: React.DragEvent, parentId: string, index: number) => {
    if (!dragState) return;

    if (dragState.type === 'palette' && dragState.action) {
      if (!canAddTo(parentId)) { handleDragEnd(); return; }
      const newNode = createNodeFromAction(dragState.action, parentId);
      if (newNode) {
        const target = findNode(tree, parentId);
        if (target?.layer === 'section') {
          setTree((prev) => addToSectionWithAutoWrap(prev, parentId, newNode, index));
        } else {
          setTree((prev) => insertIntoTree(prev, parentId, index, newNode));
        }
      }
    } else if (dragState.type === 'canvas' && dragState.nodeId) {
      const movingNode = findNode(tree, dragState.nodeId);
      if (!movingNode) return;
      if (parentId === dragState.nodeId) return;
      const movingParent = findParent(tree, dragState.nodeId);
      if (movingParent?.id !== parentId && !canAddTo(parentId)) { handleDragEnd(); return; }

      setTree((prev) => {
        let updated = removeFromTree(prev, dragState.nodeId!);
        const target = findNode(updated, parentId);
        if (target?.layer === 'section') {
          return addToSectionWithAutoWrap(updated, parentId, movingNode, index);
        }
        const adjustedIndex = Math.min(index, target?.children?.length ?? 0);
        updated = insertIntoTree(updated, parentId, adjustedIndex, movingNode);
        return updated;
      });
    }

    handleDragEnd();
  }, [dragState, createNodeFromAction, findNode, removeFromTree, insertIntoTree, handleDragEnd, tree, addToSectionWithAutoWrap]);


  // ── 선택된 노드 정보 ──

  const selectedNode = selectedId ? findNode(tree, selectedId) : null;
  const selectedSchema = selectedNode?.component ? schemas.find((s) => s.component === selectedNode.component) : null;

  // 선택된 노드가 속한 섹션 찾기
  const activeSection = useMemo(() => {
    if (!selectedId) return null;
    if (selectedNode?.layer === 'section') return selectedNode.sectionName ?? null;
    // 부모 체인을 올라가면서 section 찾기
    let current = selectedId;
    for (let i = 0; i < 10; i++) {
      const parent = findParent(tree, current);
      if (!parent) break;
      if (parent.layer === 'section') return parent.sectionName ?? null;
      current = parent.id;
    }
    return null;
  }, [selectedId, selectedNode, findParent, tree]);

  // 선택된 노드에서 가장 가까운 items 노드의 direction 찾기
  const findNearestItems = useCallback((nodeId: string | null): TemplateNode | null => {
    if (!nodeId) return null;
    const node = findNode(tree, nodeId);
    if (!node) return null;
    // 자기가 items면 바로 반환
    if (node.layer === 'items') return node;
    // section이면 자식 중 첫 items 찾기
    if (node.layer === 'section') {
      return node.children?.find((c) => c.layer === 'items') ?? null;
    }
    // comp/item이면 부모 체인 올라가기
    let current = nodeId;
    for (let i = 0; i < 10; i++) {
      const parent = findParent(tree, current);
      if (!parent) break;
      if (parent.layer === 'items') return parent;
      current = parent.id;
    }
    return null;
  }, [findNode, findParent, tree]);

  const nearestItems = findNearestItems(selectedId);
  const activeItemsDirection: ItemsDirection | null = nearestItems?.itemsDirection ?? null;

  const handleItemsDirectionChange = useCallback((dir: ItemsDirection) => {
    if (nearestItems) {
      // 기존 items 방향 변경
      setTree((prev) => updateTree(prev, nearestItems.id, (n) => ({ ...n, itemsDirection: dir })));
    } else {
      // items가 없으면 선택된 섹션에 새로 생성
      const targetId = selectedId ?? 'body';
      const target = findNode(tree, targetId);
      const sectionId = target?.layer === 'section' ? targetId
        : (() => { let c = targetId; for (let i = 0; i < 10; i++) { const p = findParent(tree, c); if (!p) break; if (p.layer === 'section') return p.id; c = p.id; } return 'body'; })();
      setTree((prev) => updateTree(prev, sectionId, (n) => ({
        ...n,
        children: [...(n.children ?? []), { id: nextId(), layer: 'items' as NodeLayer, itemsDirection: dir, gap: 8, padding: 0, children: [] }],
      })));
    }
  }, [nearestItems, selectedId, findNode, findParent, tree, updateTree, setTree]);

  // ── 새 items 그룹 생성 ──
  const handleCreateItems = useCallback(() => {
    const targetId = selectedId ?? 'body';
    const target = findNode(tree, targetId);
    const sectionId = target?.layer === 'section' ? targetId
      : (() => { let c = targetId; for (let i = 0; i < 10; i++) { const p = findParent(tree, c); if (!p) break; if (p.layer === 'section') return p.id; c = p.id; } return 'body'; })();
    const newItemsId = nextId();
    setTree((prev) => updateTree(prev, sectionId, (n) => ({
      ...n,
      children: [...(n.children ?? []), { id: newItemsId, layer: 'items' as NodeLayer, itemsDirection: 'vert' as ItemsDirection, gap: 8, padding: 0, children: [] }],
    })));
    setSelectedId(newItemsId);
  }, [selectedId, findNode, findParent, tree, updateTree, setTree]);

  // ── Export JSON ──

  const toExportJson = (node: TemplateNode): Record<string, unknown> => {
    const spacing: Record<string, unknown> = {};
    if (node.gap !== undefined) spacing.gap = node.gap;
    if (node.padding !== undefined) spacing.padding = node.padding;

    if (node.layer === 'root') return { type: 'page', children: node.children?.map(toExportJson) ?? [] };
    if (node.layer === 'section') return { type: node.sectionName, ...spacing, children: node.children?.map(toExportJson) ?? [] };
    if (node.layer === 'items') return { type: itemsLabel[node.itemsDirection ?? 'vert'], ...spacing, children: node.children?.map(toExportJson) ?? [] };
    return { type: `comp.${node.component}`, props: node.props ?? {} };
  };

  const exportData = {
    name: 'Untitled Template',
    platform: ['web', 'app'],
    root: toExportJson(tree),
  };

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'Pretendard, -apple-system, sans-serif' }}>
      {/* 좌측: 팔레트 */}
      <Palette onAdd={handleAdd} onDragStart={handlePaletteDragStart} onDragEnd={handleDragEnd} activeSection={activeSection} activeItemsDirection={activeItemsDirection} onItemsDirectionChange={handleItemsDirectionChange} onCreateItems={handleCreateItems} />

      {/* 중앙: 캔버스 */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* 상단 툴바 */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '8px 16px', borderBottom: '1px solid #e5e5e5', background: '#fff',
          gap: 12,
        }}>
          {/* Undo / Redo + 액션 버튼 */}
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', width: '100%' }}>
            <button
              onClick={undo}
              disabled={historyRef.current.length === 0}
              title="Undo (⌘Z)"
              style={{
                padding: '5px 8px', fontSize: 14, borderRadius: 6, lineHeight: 1,
                border: '1px solid #ddd', background: '#fff', cursor: 'pointer',
                opacity: historyRef.current.length === 0 ? 0.3 : 1,
                transition: 'opacity 0.15s',
              }}
            >↩</button>
            <button
              onClick={redo}
              disabled={futureRef.current.length === 0}
              title="Redo (⌘⇧Z)"
              style={{
                padding: '5px 8px', fontSize: 14, borderRadius: 6, lineHeight: 1,
                border: '1px solid #ddd', background: '#fff', cursor: 'pointer',
                opacity: futureRef.current.length === 0 ? 0.3 : 1,
                transition: 'opacity 0.15s',
              }}
            >↪</button>
            <div style={{ width: 1, height: 20, background: '#e0e0e0' }} />
            {(['edit', 'preview', 'json'] as const).map((m) => {
              const labels = { edit: 'Edit', preview: 'Preview', json: 'JSON' };
              const isActive = viewMode === m;
              return (
                <button
                  key={m}
                  onClick={() => setViewMode(m)}
                  style={{
                    padding: '6px 14px', fontSize: 12, borderRadius: 8, fontWeight: isActive ? 700 : 500,
                    border: isActive ? '2px solid #3b82f6' : '1px solid #ddd',
                    background: isActive ? '#eff6ff' : '#fff',
                    color: isActive ? '#1d4ed8' : '#555',
                    cursor: 'pointer', transition: 'all 0.15s',
                  }}
                >
                  {labels[m]}
                </button>
              );
            })}
            <div style={{ flex: 1 }} />
            <button
              onClick={() => navigator.clipboard.writeText(JSON.stringify(exportData, null, 2))}
              style={{
                padding: '6px 14px', fontSize: 12, borderRadius: 8, fontWeight: 600,
                border: '1px solid #3b82f6', background: '#3b82f6', color: '#fff',
                cursor: 'pointer', transition: 'all 0.15s',
              }}
            >
              Copy JSON
            </button>
          </div>
        </div>

        {/* 캔버스 영역 */}
        <div style={{
          flex: 1, overflow: 'auto', padding: 24, background: '#e8e8e8',
          display: 'flex', justifyContent: 'center', alignItems: 'flex-start',
        }}>
          {viewMode === 'json' ? (
            <pre style={{
              background: '#1e1e1e', color: '#d4d4d4', padding: 24, borderRadius: 12,
              fontSize: 12, lineHeight: 1.6, overflow: 'auto', whiteSpace: 'pre-wrap',
              width: '100%', maxWidth: 600,
            }}>
              {JSON.stringify(exportData, null, 2)}
            </pre>
          ) : (
            <div style={{
              width: 393,
              background: '#fff', borderRadius: 0,
              boxShadow: '0 8px 40px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06)',
              display: 'flex', flexDirection: 'column',
              overflow: 'hidden',
            }}>
              <div
                style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'auto' }}
                onDragOver={(e) => e.preventDefault()}
              >
                {viewMode === 'preview' ? (
                  <PreviewRenderer node={tree} />
                ) : (
                  <NodeRenderer
                    node={tree}
                    selectedId={selectedId}
                    onSelect={setSelectedId}
                    onDelete={handleDelete}
                    dragState={dragState}
                    dropTarget={dropTarget}
                    onCanvasDragStart={handleCanvasDragStart}
                    onCanvasDragEnd={handleDragEnd}
                    onNodeDragOver={handleNodeDragOver}
                    onNodeDrop={handleNodeDrop}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 우측: Properties */}
      <div style={{
        width: 270, borderLeft: '1px solid #e5e5e5', overflowY: 'auto',
        background: '#fafafa', display: 'flex', flexDirection: 'column',
      }}>
        <div style={{
          padding: '12px 14px', borderBottom: '1px solid #eee',
          fontSize: 13, fontWeight: 700, color: '#333',
        }}>
          Properties
        </div>

        <div style={{ padding: 12, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {selectedNode?.layer === 'comp' && selectedSchema ? (
            <>
              <div style={{
                fontSize: 12, fontWeight: 600, color: '#f59e0b',
                padding: '5px 10px', background: '#f59e0b10', borderRadius: 6,
                display: 'flex', alignItems: 'center', gap: 6,
              }}>
                <span style={{ fontSize: 9, fontWeight: 800, background: '#f59e0b20', padding: '1px 4px', borderRadius: 3 }}>C</span>
                {selectedNode.component}
              </div>
              <PropEditor
                schema={selectedSchema}
                values={selectedNode.props ?? {}}
                onChange={handlePropChange}
              />
            </>
          ) : selectedNode?.layer === 'items' ? (
            <>
              <div style={{
                fontSize: 12, fontWeight: 600, color: '#6366f1',
                padding: '5px 10px', background: '#6366f110', borderRadius: 6,
              }}>
                {itemsLabel[selectedNode.itemsDirection ?? 'vert']}
              </div>
              {/* Direction switcher */}
              <div style={{ display: 'flex', gap: 4, marginTop: 2 }}>
                {(['vert', 'horz', 'grid'] as ItemsDirection[]).map((d) => (
                  <button
                    key={d}
                    onClick={() => {
                      if (!selectedId) return;
                      setTree((prev) => updateTree(prev, selectedId, (n) => ({ ...n, itemsDirection: d })));
                    }}
                    style={{
                      flex: 1, padding: '4px 0', fontSize: 10, fontWeight: 600,
                      border: selectedNode.itemsDirection === d ? '2px solid #6366f1' : '1px solid #ddd',
                      borderRadius: 6, cursor: 'pointer',
                      background: selectedNode.itemsDirection === d ? '#6366f108' : '#fff',
                      color: selectedNode.itemsDirection === d ? '#6366f1' : '#888',
                    }}
                  >
                    {d === 'vert' ? '↕ Vert' : d === 'horz' ? '↔ Horz' : '▦ Grid'}
                  </button>
                ))}
              </div>
              <div style={{ fontSize: 11, color: '#aaa', marginBottom: 4 }}>
                {selectedNode.children?.length ?? 0} children
              </div>
              {/* Spacing */}
              <div style={{ fontSize: 10, fontWeight: 700, color: '#6366f1', textTransform: 'uppercase', letterSpacing: 0.5, marginTop: 4 }}>Spacing</div>
              <SpacingSlider label="gap" value={selectedNode.gap ?? 8} onChange={handleGapChange} color="#6366f1" />
              <div style={{ fontSize: 10, fontWeight: 700, color: '#6366f1', textTransform: 'uppercase', letterSpacing: 0.5, marginTop: 4 }}>Padding</div>
              <PaddingEditor value={resolvePadding(selectedNode.padding)} onChange={handlePaddingChange} color="#6366f1" />
            </>
          ) : selectedNode?.layer === 'section' ? (
            <>
              <div style={{
                fontSize: 12, fontWeight: 600,
                color: sectionMeta[selectedNode.sectionName ?? '']?.color ?? '#999',
                padding: '5px 10px',
                background: `${sectionMeta[selectedNode.sectionName ?? '']?.color ?? '#999'}10`,
                borderRadius: 6,
              }}>
                {selectedNode.sectionName} — {selectedNode.children?.length ?? 0} children
              </div>
              {/* Spacing */}
              <div style={{ fontSize: 10, fontWeight: 700, color: sectionMeta[selectedNode.sectionName ?? '']?.color ?? '#999', textTransform: 'uppercase', letterSpacing: 0.5, marginTop: 4 }}>Spacing</div>
              <SpacingSlider label="gap" value={selectedNode.gap ?? 8} onChange={handleGapChange} color={sectionMeta[selectedNode.sectionName ?? '']?.color ?? '#999'} />
              <div style={{ fontSize: 10, fontWeight: 700, color: sectionMeta[selectedNode.sectionName ?? '']?.color ?? '#999', textTransform: 'uppercase', letterSpacing: 0.5, marginTop: 4 }}>Padding</div>
              <PaddingEditor value={resolvePadding(selectedNode.padding)} onChange={handlePaddingChange} color={sectionMeta[selectedNode.sectionName ?? '']?.color ?? '#999'} />
            </>
          ) : (
            <div style={{
              fontSize: 12, color: '#aaa', textAlign: 'center', paddingTop: 60,
              lineHeight: 1.8,
            }}>
              노드를 선택하거나<br />
              팔레트에서 드래그하세요
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
