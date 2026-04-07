import React from 'react';
import type { ButtonSegmentProps } from './ButtonSegment.types';

export const ButtonSegment = ({
  options,
  value,
  onChange,
  shape = 'square',
  type = 'half',
  disabled = false,
  className = '',
}: ButtonSegmentProps) => {
  const borderRadius = shape === 'round' ? 9999 : 8;
  const containerStyle: React.CSSProperties = {
    opacity: disabled ? 0.4 : 1,
    pointerEvents: disabled ? 'none' : 'auto',
    fontFamily: 'Pretendard, -apple-system, sans-serif',
  };

  // ── half: 텍스트 + 구분선 형태 ─────────────────────────────────────────────
  if (type === 'half') {
    return (
      <div
        style={{
          ...containerStyle,
          display: 'inline-flex',
          alignItems: 'center',
          height: 44,
          padding: '0 20px',
          background: 'var(--color-neutral-background-default)',
          border: '1px solid rgba(0,0,0,0.1)',
          borderRadius,
        }}
        className={className}
        role="group"
      >
        {options.map((opt, i) => {
          const isSelected = opt.value === value;
          const isItemDisabled = disabled || !!opt.disabled;
          return (
            <React.Fragment key={opt.value}>
              {i > 0 && (
                <div
                  style={{
                    width: 1,
                    height: 15,
                    background: 'rgba(0,0,0,0.08)',
                    margin: '0 16px',
                    flexShrink: 0,
                  }}
                  aria-hidden
                />
              )}
              <button
                type="button"
                role="radio"
                aria-checked={isSelected}
                disabled={isItemDisabled}
                onClick={() => onChange(opt.value)}
                style={{
                  padding: 0,
                  background: 'none',
                  border: 'none',
                  cursor: isItemDisabled ? 'not-allowed' : 'pointer',
                  fontSize: 14,
                  fontWeight: isSelected ? 700 : 400,
                  color: isSelected
                    ? 'var(--color-neutral-foreground-default)'
                    : 'var(--color-neutral-foreground-subtle-1)',
                  opacity: opt.disabled ? 0.4 : 1,
                  lineHeight: 1,
                  whiteSpace: 'nowrap',
                  userSelect: 'none',
                  fontFamily: 'inherit',
                }}
              >
                {opt.label}
              </button>
            </React.Fragment>
          );
        })}
      </div>
    );
  }

  // ── full: 균등 분할 버튼 그룹 ──────────────────────────────────────────────
  const isRound = shape === 'round';
  const outerRadius = isRound ? 9999 : 8;

  return (
    <div
      style={{
        ...containerStyle,
        display: 'inline-flex',
        width: '100%',
        height: 40,
        borderRadius: outerRadius,
        overflow: 'hidden',
        border: '1px solid rgba(0,0,0,0.1)',
        background: '#ffffff',
      }}
      className={className}
      role="group"
    >
      {options.map((opt, i) => {
        const isSelected = opt.value === value;
        const isItemDisabled = disabled || !!opt.disabled;
        return (
          <button
            key={opt.value}
            type="button"
            role="radio"
            aria-checked={isSelected}
            disabled={isItemDisabled}
            onClick={() => onChange(opt.value)}
            style={{
              flex: 1,
              height: '100%',
              background: '#ffffff',
              border: 'none',
              borderLeft: i > 0 ? '1px solid rgba(0,0,0,0.1)' : 'none',
              cursor: isItemDisabled ? 'not-allowed' : 'pointer',
              fontSize: 14,
              fontWeight: isSelected ? 600 : 400,
              color: isSelected
                ? 'var(--color-neutral-foreground-default)'
                : 'var(--color-neutral-foreground-subtle-1)',
              opacity: opt.disabled ? 0.4 : 1,
              lineHeight: 1,
              whiteSpace: 'nowrap',
              userSelect: 'none',
              fontFamily: 'inherit',
            }}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
};

ButtonSegment.displayName = 'ButtonSegment';
