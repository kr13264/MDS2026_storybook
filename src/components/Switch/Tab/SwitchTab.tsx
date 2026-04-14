import { forwardRef } from 'react';
import type { SwitchTabProps } from './SwitchTab.types';

export const SwitchTab = forwardRef<HTMLDivElement, SwitchTabProps>(
  (
    {
      style = 'square',
      options = [
        { value: 'left', label: '레이블' },
        { value: 'right', label: '레이블' },
      ],
      value,
      disabled = false,
      onChange,
      className = '',
    },
    ref,
  ) => {
    const selectedValue = value ?? options[0].value;
    const isRound = style === 'round';

    return (
      <div
        ref={ref}
        className={[
          'inline-flex items-center h-8 p-4xs',
          'bg-neutral-background-raised-1',
          isRound ? 'rounded-full overflow-hidden' : 'rounded-md',
          disabled ? 'opacity-40 pointer-events-none' : '',
          className,
        ].filter(Boolean).join(' ')}
      >
        {options.map((opt) => {
          const isSelected = opt.value === selectedValue;

          const itemClasses = [
            'flex items-center justify-center h-full px-xs',
            'text-12 font-semibold leading-16 tracking-bon-tight',
            'cursor-pointer select-none transition-colors duration-150 whitespace-nowrap',
            isRound
              ? 'rounded-full'
              : 'rounded-[6px]',
            isSelected
              ? isRound
                ? 'bg-neutral-foreground-subtle-1 text-neutral-foreground-static-white'
                : 'bg-neutral-background-default text-neutral-foreground-default'
              : isRound
                ? 'text-neutral-foreground-subtle-3'
                : 'text-neutral-foreground-subtle-3',
          ].join(' ');

          return (
            <button
              key={opt.value}
              type="button"
              className={itemClasses}
              onClick={() => !disabled && onChange?.(opt.value)}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    );
  },
);

SwitchTab.displayName = 'SwitchTab';
