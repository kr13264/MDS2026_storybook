import { forwardRef } from 'react';
import type { PopoverTooltipProps } from './Tooltip.types';

const Tail = ({ className }: { className?: string }) => (
  <svg className={className} width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.584 1.332C5.267.222 6.733.222 7.416 1.332L12 8H0L4.584 1.332Z" fill="currentColor" />
  </svg>
);

export const PopoverTooltip = forwardRef<HTMLDivElement, PopoverTooltipProps>(
  (
    {
      text = '내 관심을 반영해 취향을 받아 보세요!',
      direction = 'top',
      align = 'start',
      className = '',
    },
    ref,
  ) => {
    const isHorizontal = direction === 'left' || direction === 'right';

    const containerClasses = [
      'inline-flex',
      isHorizontal ? 'flex-row items-center' : 'flex-col',
      align === 'center' && !isHorizontal ? 'items-center' : '',
      align === 'end' && !isHorizontal ? 'items-end' : '',
      align === 'start' && !isHorizontal ? 'items-start' : '',
      className,
    ].filter(Boolean).join(' ');

    const tailRotation = {
      top: '',
      bottom: 'rotate-180',
      left: '-rotate-90',
      right: 'rotate-90',
    }[direction];

    const tailMargin = {
      top: '',
      bottom: '',
      left: '',
      right: '',
    }[direction];

    const tailAlign = isHorizontal
      ? ''
      : align === 'start'
        ? 'ml-l'
        : align === 'end'
          ? 'mr-l'
          : '';

    const tail = (
      <div className={`flex shrink-0 ${tailAlign}`}>
        <Tail className={`text-primary-background-default ${tailRotation} ${tailMargin}`} />
      </div>
    );

    return (
      <div ref={ref} className={containerClasses}>
        {(direction === 'top' || direction === 'left') && tail}
        <div className="bg-primary-background-default rounded-3xl px-m py-[7px] pb-[8px]">
          <p className="text-13 leading-18 font-bold tracking-bon-tight text-neutral-foreground-static-white whitespace-nowrap">
            {text}
          </p>
        </div>
        {(direction === 'bottom' || direction === 'right') && tail}
      </div>
    );
  },
);

PopoverTooltip.displayName = 'PopoverTooltip';
