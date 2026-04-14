import { forwardRef } from 'react';
import type { SwitchToggleProps, SwitchToggleSize } from './SwitchToggle.types';

const trackSize: Record<SwitchToggleSize, string> = {
  lg: 'w-[52px] h-[30px]',
  md: 'w-10 h-6',
  sm: 'w-8 h-[18px]',
};

const handleSize: Record<SwitchToggleSize, string> = {
  lg: 'size-[26px]',
  md: 'size-5',
  sm: 'size-[14px]',
};

export const SwitchToggle = forwardRef<HTMLButtonElement, SwitchToggleProps>(
  (
    {
      size = 'lg',
      selected = false,
      label = false,
      disabled = false,
      onChange,
      className = '',
    },
    ref,
  ) => {
    const showLabel = label && size === 'lg';

    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={selected}
        disabled={disabled}
        className={[
          'inline-flex items-center p-4xs rounded-full',
          'transition-colors duration-200 cursor-pointer',
          trackSize[size],
          selected ? 'bg-primary-background-default' : 'bg-neutral-background-separated-2',
          selected ? 'justify-end' : 'justify-start',
          showLabel ? 'gap-2xs' : '',
          disabled ? 'opacity-40 cursor-not-allowed' : '',
          className,
        ].filter(Boolean).join(' ')}
        onClick={() => !disabled && onChange?.(!selected)}
      >
        {showLabel && !selected && (
          <span className={`${handleSize[size]} rounded-full bg-neutral-background-static-white shrink-0`} />
        )}
        {showLabel && selected && (
          <span className="text-12 font-semibold leading-16 tracking-bon-tight text-neutral-foreground-static-white shrink-0">
            ON
          </span>
        )}
        {showLabel && selected && (
          <span className={`${handleSize[size]} rounded-full bg-neutral-background-static-white shrink-0`} />
        )}
        {showLabel && !selected && (
          <span className="text-12 font-semibold leading-16 tracking-bon-tight text-neutral-foreground-static-white shrink-0">
            OFF
          </span>
        )}
        {!showLabel && (
          <span className={`${handleSize[size]} rounded-full bg-neutral-background-static-white shrink-0 transition-all duration-200`} />
        )}
      </button>
    );
  },
);

SwitchToggle.displayName = 'SwitchToggle';
