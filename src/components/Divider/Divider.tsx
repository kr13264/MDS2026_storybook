import type { DividerProps } from './Divider.types';

export const Divider = ({
  orientation = 'horizontal',
  length = '100%',
  className = '',
}: DividerProps) => {
  const isHorizontal = orientation === 'horizontal';

  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={className}
      style={{
        flexShrink: 0,
        ...(isHorizontal
          ? {
              width: length,
              height: 1,
              borderTop: '1px solid var(--color-neutral-stroke-divider, rgba(0, 0, 0, 0.06))',
            }
          : {
              width: 1,
              height: length,
              borderLeft: '1px solid var(--color-neutral-stroke-divider, rgba(0, 0, 0, 0.06))',
            }),
      }}
    />
  );
};

Divider.displayName = 'Divider';
