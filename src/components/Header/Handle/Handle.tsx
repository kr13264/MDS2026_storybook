import type { HandleProps } from './Handle.types';

export const Handle = ({
  barWidth = 36,
  barHeight = 5,
  className = '',
}: HandleProps) => {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: 40,
        paddingTop: 6,
        paddingBottom: 16,
        borderTopLeftRadius: 'var(--radius-3xl, 28px)',
        borderTopRightRadius: 'var(--radius-3xl, 28px)',
        backgroundColor: 'var(--color-neutral-background-default, #fff)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: barWidth,
          height: barHeight,
          borderRadius: 'var(--radius-full, 999px)',
          backgroundColor: 'var(--color-neutral-foreground-decorative-2, #C9C9C9)',
          flexShrink: 0,
        }}
      />
    </div>
  );
};

Handle.displayName = 'Handle';
