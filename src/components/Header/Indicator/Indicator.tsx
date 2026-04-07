import type { IndicatorProps } from './Indicator.types';

export const Indicator = ({
  barWidth = 144,
  barHeight = 5,
  className = '',
}: IndicatorProps) => {
  return (
    <div
      className={className}
      style={{
        position: 'relative',
        width: '100%',
        height: 34,
      }}
    >
      <div
        style={{
          position: 'absolute',
          bottom: 8,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: barWidth,
            height: barHeight,
            borderRadius: 100,
            backgroundColor: 'var(--color-neutral-foreground-default, #000)',
          }}
        />
      </div>
    </div>
  );
};

Indicator.displayName = 'Indicator';
