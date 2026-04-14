import { forwardRef } from 'react';
import { Tab } from '../Tab';
import type { TabListProps } from './TabList.types';

export const TabList = forwardRef<HTMLDivElement, TabListProps>(
  (
    {
      type = 'underline',
      layout = 'scrollable',
      tone = 'natural',
      items = [
        { label: '레이블', value: 'tab1' },
        { label: '레이블', value: 'tab2' },
        { label: '레이블', value: 'tab3' },
      ],
      value,
      onChange,
      className = '',
    },
    ref,
  ) => {
    const selectedValue = value ?? items[0]?.value;
    const isCapsule = type === 'capsule';
    const isFixed = layout === 'fixed';

    const containerClasses = [
      'flex items-center',
      isCapsule ? 'gap-3xs' : 'relative',
      isFixed ? 'w-full' : isCapsule ? '' : 'gap-3xs',
      isCapsule ? '' : 'h-[44px]',
      className,
    ].filter(Boolean).join(' ');

    return (
      <div ref={ref} className={containerClasses}>
        {/* Underline 하단 기본 라인 */}
        {!isCapsule && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-neutral-stroke-divider" />
        )}

        {items.map((item) => {
          const isDisabled = item.disabled ?? false;
          const isSelected = item.value === selectedValue;
          const state = isDisabled ? 'disabled' as const : isSelected ? 'selected' as const : 'default' as const;

          return (
            <Tab
              key={item.value}
              label={item.label}
              type={type}
              layout={layout}
              tone={tone}
              state={state}
              onClick={() => !isDisabled && onChange?.(item.value)}
            />
          );
        })}
      </div>
    );
  },
);

TabList.displayName = 'TabList';
