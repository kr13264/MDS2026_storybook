import { forwardRef } from 'react';
import type { SelectionProps } from './Selection.types';

// ── Icons (inline SVG) ────────────────────────────────────────────────────
const CheckIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
    <path d="M2 5.2L4.2 7.4L8 2.6" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const AddIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
    <path d="M5 2v6M2 5h6" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const RadioDot = () => (
  <span className="size-2 rounded-full bg-primary-background-default" />
);

// ── Component ─────────────────────────────────────────────────────────────
export const Selection = forwardRef<HTMLButtonElement, SelectionProps>(
  (
    {
      type = 'check',
      shape: shapeProp = 'circle',
      selected = false,
      enabled = true,
      disabled = false,
      onChange,
      className = '',
    },
    ref,
  ) => {
    const isDisabled = disabled || !enabled;
    // radio는 항상 circle
    const shape = type === 'radio' ? 'circle' : shapeProp;
    const isCircle = shape === 'circle';
    const isSelected = selected;

    // ── 외곽 스타일 ──
    const baseClasses = [
      'inline-flex items-center justify-center',
      'size-5 shrink-0',
      'transition-colors duration-150 cursor-pointer',
      'overflow-hidden',
      isCircle ? 'rounded-full' : 'rounded-[6px]',
    ];

    let stateClasses: string;

    if (isDisabled) {
      // disabled
      stateClasses = [
        'bg-neutral-background-disabled',
        'border border-[var(--color-neutral-stroke-subtle-3,rgba(0,0,0,0.04))]',
        'cursor-not-allowed',
      ].join(' ');
    } else if (isSelected) {
      if (type === 'radio') {
        // radio selected: 테두리만
        stateClasses = 'border-[1.2px] border-primary-stroke-default bg-transparent';
      } else {
        // check/add selected: primary 배경
        stateClasses = 'bg-primary-background-default';
      }
    } else {
      // unselected enabled
      stateClasses = [
        'bg-neutral-background-default',
        'border border-neutral-stroke-subtle-1',
      ].join(' ');
    }

    return (
      <button
        ref={ref}
        type="button"
        role={type === 'radio' ? 'radio' : 'checkbox'}
        aria-checked={isSelected}
        disabled={isDisabled}
        className={[...baseClasses, stateClasses, className].filter(Boolean).join(' ')}
        onClick={() => !isDisabled && onChange?.(!isSelected)}
      >
        {enabled && isSelected && type === 'check' && <CheckIcon />}
        {enabled && isSelected && type === 'add' && <AddIcon />}
        {enabled && isSelected && type === 'radio' && <RadioDot />}
      </button>
    );
  },
);

Selection.displayName = 'Selection';
