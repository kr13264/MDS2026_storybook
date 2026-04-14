import { forwardRef } from 'react';
import type { TabProps, TabTone } from './Tab.types';

// ── 아이템 스타일 맵 ──────────────────────────────────────────────────────
type StateStyle = { selected: string; default: string; disabled: string };

const underlineStyle = (tone: TabTone): StateStyle =>
  tone === 'invert'
    ? {
        selected: 'font-bold text-[rgba(255,255,255,0.9)]',
        default:  'font-medium text-[rgba(255,255,255,0.5)]',
        disabled: 'font-medium text-[rgba(255,255,255,0.1)]',
      }
    : {
        selected: 'font-bold text-neutral-foreground-default',
        default:  'font-medium text-neutral-foreground-subtle-3',
        disabled: 'font-medium text-neutral-foreground-disabled',
      };

const capsuleStyle = (tone: TabTone): StateStyle =>
  tone === 'invert'
    ? {
        selected: 'font-bold bg-neutral-background-static-white text-[#1f1f1f]',
        default:  'font-medium text-[rgba(255,255,255,0.9)]',
        disabled: 'font-medium text-[rgba(255,255,255,0.2)]',
      }
    : {
        selected: 'font-bold bg-neutral-background-inverted-1 text-neutral-foreground-inverted-default',
        default:  'font-medium text-neutral-foreground-subtle-1',
        disabled: 'font-medium text-neutral-foreground-disabled',
      };

// ── Component ─────────────────────────────────────────────────────────────
export const Tab = forwardRef<HTMLButtonElement, TabProps>(
  (
    {
      label = '레이블',
      type = 'underline',
      layout = 'scrollable',
      tone = 'natural',
      state = 'default',
      onClick,
      className = '',
    },
    ref,
  ) => {
    const isCapsule = type === 'capsule';
    const isFixed = layout === 'fixed';
    const isSelected = state === 'selected';
    const isDisabled = state === 'disabled';

    const styles = isCapsule ? capsuleStyle(tone) : underlineStyle(tone);

    if (isCapsule) {
      return (
        <button
          ref={ref}
          type="button"
          disabled={isDisabled}
          className={[
            'flex items-center justify-center',
            'h-9 px-m rounded-full',
            'text-16 leading-21 tracking-bon-tight',
            'transition-colors duration-150 whitespace-nowrap',
            isDisabled ? 'cursor-not-allowed' : 'cursor-pointer',
            styles[state],
            className,
          ].join(' ')}
          onClick={isDisabled ? undefined : onClick}
        >
          {label}
        </button>
      );
    }

    return (
      <button
        ref={ref}
        type="button"
        disabled={isDisabled}
        className={[
          'flex flex-col items-center justify-center relative',
          'h-[44px] overflow-hidden',
          isFixed ? 'text-17 leading-22' : 'text-16 leading-21',
          'tracking-bon-tight',
          'transition-colors duration-150 whitespace-nowrap',
          isFixed ? 'flex-1' : 'px-xs',
          isDisabled ? 'cursor-not-allowed' : 'cursor-pointer',
          styles[state],
          className,
        ].join(' ')}
        onClick={isDisabled ? undefined : onClick}
      >
        {label}
        {isSelected && (
          <div
            className={[
              'absolute bottom-0 left-0 right-0 h-0.5',
              tone === 'invert' ? 'bg-[rgba(255,255,255,0.9)]' : 'bg-neutral-foreground-default',
            ].join(' ')}
          />
        )}
      </button>
    );
  },
);

Tab.displayName = 'Tab';
