import { forwardRef } from 'react';
import { Icon } from '@/components/Icon';
import type { PopoverMoreProps } from './More.types';

const defaultItems: PopoverMoreProps['items'] = [
  { icon: 'check', label: '구독해지' },
];

export const PopoverMore = forwardRef<HTMLDivElement, PopoverMoreProps>(
  (
    {
      items = defaultItems,
      className = '',
    },
    ref,
  ) => {
    const isSingle = items.length <= 1;

    return (
      <div
        ref={ref}
        className={[
          'inline-flex flex-col items-start',
          'bg-neutral-background-default rounded-3xl px-l w-[166px] shadow',
          isSingle ? 'py-l' : 'py-xl gap-xl',
          className,
        ].filter(Boolean).join(' ')}
      >
        {items.map((item, idx) => (
          <button
            key={idx}
            type="button"
            className="flex items-center gap-m w-full"
            onClick={item.onClick}
          >
            <Icon name={item.icon} size="md" color="var(--color-neutral-foreground-subtle-1)" />
            <span className="flex-1 text-16 leading-21 font-medium tracking-bon-tight text-neutral-foreground-subtle-1 truncate text-left">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    );
  },
);

PopoverMore.displayName = 'PopoverMore';
