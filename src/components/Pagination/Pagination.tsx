import type { PaginationProps } from './Pagination.types';

/**
 * 도트의 크기를 결정합니다.
 * - 5개 이하: 모든 도트 6px
 * - 6개 이상: 활성 도트 근처는 6px, 먼 도트는 축소 (4px → 3px)
 */
function getDotSize(
  index: number,
  currentPage: number,
  totalPages: number,
  maxVisible: number,
): number {
  if (totalPages <= maxVisible) return 6;

  const lastIdx = maxVisible - 1;

  // 활성 도트가 앞쪽에 있을 때 (뒤쪽 축소)
  if (currentPage <= 3) {
    if (index === lastIdx) return 3;
    if (index === lastIdx - 1) return 4;
    return 6;
  }

  // 활성 도트가 뒤쪽에 있을 때 (앞쪽 축소)
  if (currentPage >= totalPages - 2) {
    if (index === 0) return 3;
    if (index === 1) return 4;
    return 6;
  }

  // 활성 도트가 중간에 있을 때 (양쪽 축소)
  if (index === 0) return 3;
  if (index === lastIdx) return 3;
  if (index === 1) return 4;
  if (index === lastIdx - 1) return 4;
  return 6;
}

/**
 * 보이는 도트 범위에서 활성 도트의 인덱스를 계산합니다.
 */
function getActiveIndex(
  currentPage: number,
  totalPages: number,
  maxVisible: number,
): number {
  if (totalPages <= maxVisible) return currentPage - 1;

  if (currentPage <= 3) return currentPage - 1;
  if (currentPage >= totalPages - 2) return maxVisible - (totalPages - currentPage) - 1;
  return Math.floor(maxVisible / 2);
}

export const Pagination = ({
  totalPages,
  currentPage,
  variant = 'solid',
  onChange,
  className = '',
}: PaginationProps) => {
  const maxVisible = 5;
  const visibleCount = Math.min(totalPages, maxVisible);
  const activeIndex = getActiveIndex(currentPage, totalPages, maxVisible);
  const isGhost = variant === 'ghost';

  const activeColor = isGhost
    ? 'var(--color-neutral-background-static-white, #fff)'
    : 'var(--color-primary-foreground-decorative, #03c75a)';
  const inactiveColor = isGhost
    ? 'var(--color-neutral-foreground-static-alpha-white-2, rgba(255,255,255,0.5))'
    : 'var(--color-neutral-foreground-dot, rgba(0,0,0,0.08))';

  return (
    <div
      className={className}
      role="tablist"
      aria-label="페이지 인디케이터"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
      }}
    >
      {Array.from({ length: visibleCount }, (_, i) => {
        const isActive = i === activeIndex;
        const size = getDotSize(i, currentPage, totalPages, maxVisible);

        return (
          <div
            key={i}
            role="tab"
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            onClick={() => {
              if (!onChange || isActive) return;
              // 보이는 인덱스에서 실제 페이지 번호 계산
              let page: number;
              if (totalPages <= maxVisible) {
                page = i + 1;
              } else if (currentPage <= 3) {
                page = i + 1;
              } else if (currentPage >= totalPages - 2) {
                page = totalPages - maxVisible + i + 1;
              } else {
                page = currentPage - Math.floor(maxVisible / 2) + i;
              }
              onChange(page);
            }}
            style={{
              width: size,
              height: size,
              borderRadius: 4,
              backgroundColor: isActive ? activeColor : inactiveColor,
              flexShrink: 0,
              cursor: onChange ? 'pointer' : undefined,
              transition: 'all 0.2s ease',
            }}
          />
        );
      })}
    </div>
  );
};

Pagination.displayName = 'Pagination';
