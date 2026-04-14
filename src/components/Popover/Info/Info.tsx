import { forwardRef } from 'react';
import { Icon } from '@/components/Icon';
import type { PopoverInfoProps } from './Info.types';

export const PopoverInfo = forwardRef<HTMLDivElement, PopoverInfoProps>(
  (
    {
      type = 'default',
      line = 'single',
      button = false,
      title = 'Title',
      text = 'AI가 내 활동 기반으로 장소를 추천합니다.',
      buttonLabel = '레이블 Label',
      linkText = '메뉴명',
      onClose,
      onButtonClick,
      onLinkClick,
      className = '',
    },
    ref,
  ) => {
    const isTitled = type === 'titled';
    const isMulti = line === 'multi';

    const containerWidth = isMulti ? 'w-[240px]' : 'w-[300px]';
    const containerGap = isMulti && button
      ? 'gap-m'
      : isMulti
        ? ''
        : button
          ? 'gap-3xs'
          : '';
    const containerPadding = isMulti && button
      ? 'pt-xl pb-l'
      : 'py-xl';

    return (
      <div
        ref={ref}
        className={[
          'inline-flex flex-col items-start',
          'bg-neutral-background-default rounded-3xl px-l shadow',
          containerWidth,
          containerGap,
          containerPadding,
          className,
        ].filter(Boolean).join(' ')}
      >
          {/* Content area */}
          <div className={[
            'flex w-full gap-xs',
            isTitled && isMulti ? 'flex-col items-start' : '',
            !isTitled && isMulti ? 'items-start' : '',
            !isMulti ? 'items-center' : '',
          ].filter(Boolean).join(' ')}>
            {isTitled && isMulti ? (
              <>
                {/* Title row */}
                <div className="flex items-center justify-between w-full">
                  <p className="text-15 leading-20 font-bold tracking-bon-tight text-neutral-foreground-subtle-1 truncate">
                    {title}
                  </p>
                  <button
                    type="button"
                    className="shrink-0 size-[20px] flex items-center justify-center"
                    onClick={onClose}
                  >
                    <Icon name="close" size="xs" color="var(--color-neutral-foreground-subtle-1)" />
                  </button>
                </div>
                {/* Body text */}
                <p className="text-15 leading-20 font-medium tracking-bon-tight text-neutral-foreground-subtle-1 w-[208px]">
                  {text}
                </p>
              </>
            ) : (
              <>
                {/* Default type */}
                <div className={isMulti ? 'shrink-0' : 'flex-1 min-w-0'}>
                  <p className={[
                    'text-15 leading-20 font-medium tracking-bon-tight text-neutral-foreground-subtle-1',
                    isMulti ? 'w-[180px]' : 'truncate',
                  ].filter(Boolean).join(' ')}>
                    {text}
                  </p>
                </div>
                <button
                  type="button"
                  className="shrink-0 size-[20px] flex items-center justify-center"
                  onClick={onClose}
                >
                  <Icon name="close" size="xs" color="var(--color-neutral-foreground-subtle-1)" />
                </button>
              </>
            )}
          </div>

          {/* Button (multi line) */}
          {isMulti && button && (
            <button
              type="button"
              className="w-full h-[36px] bg-primary-foreground-default rounded-full flex items-center justify-center"
              onClick={onButtonClick}
            >
              <span className="text-14 leading-19 tracking-bon-tight text-neutral-foreground-static-white">
                {buttonLabel}
              </span>
            </button>
          )}

          {/* Link (single + button) */}
          {!isMulti && button && !isTitled && (
            <button
              type="button"
              className="flex items-center gap-3xs self-end"
              onClick={onLinkClick}
            >
              <span className="text-15 leading-20 tracking-bon-tight text-neutral-foreground-subtle-3">
                {linkText}
              </span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.25 3.5L8.75 7L5.25 10.5" stroke="var(--color-neutral-foreground-subtle-3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
      </div>
    );
  },
);

PopoverInfo.displayName = 'PopoverInfo';
