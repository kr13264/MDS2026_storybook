import { forwardRef } from 'react';
import type { DialogProps } from './Dialog.types';

// ── Footer (버튼 그룹) ───────────────────────────────────────────────────────
const DialogFooter = ({
  cancelLabel,
  confirmLabel,
  onCancel,
  onConfirm,
}: Pick<DialogProps, 'cancelLabel' | 'confirmLabel' | 'onCancel' | 'onConfirm'>) => (
  <div className="flex w-full gap-xs">
    {cancelLabel && (
      <button
        type="button"
        className={[
          'flex-1 h-12 px-l rounded-full',
          'text-base font-semibold tracking-bon-tight',
          'border border-neutral-stroke-subtle-1',
          'bg-neutral-background-default text-neutral-foreground-default',
          'hover:bg-neutral-background-alpha-1 active:bg-neutral-background-alpha-2',
          'transition-colors cursor-pointer',
        ].join(' ')}
        onClick={onCancel}
      >
        {cancelLabel}
      </button>
    )}
    {confirmLabel && (
      <button
        type="button"
        className={[
          'flex-1 h-12 px-l rounded-full',
          'text-base font-semibold tracking-bon-tight',
          'bg-primary-foreground-default text-neutral-foreground-static-white',
          'hover:opacity-90 active:opacity-80',
          'transition-colors cursor-pointer',
        ].join(' ')}
        onClick={onConfirm}
      >
        {confirmLabel}
      </button>
    )}
  </div>
);

// ── Text Block ────────────────────────────────────────────────────────────────
const TextBlock = ({
  headline,
  subText,
  supportingText,
  center = false,
}: {
  headline?: string;
  subText?: string;
  supportingText?: string;
  center?: boolean;
}) => (
  <div className={`flex flex-col gap-1 w-full ${center ? 'items-center text-center' : 'items-start'}`}>
    {headline && (
      <p className="text-[18px] font-bold leading-24 tracking-bon-tight text-neutral-foreground-default truncate w-full">
        {headline}
      </p>
    )}
    {subText && (
      <p className="text-base font-normal leading-25 tracking-bon-tight text-neutral-foreground-subtle-1 truncate w-full">
        {subText}
      </p>
    )}
    {supportingText && (
      <p className="text-sm font-normal leading-19 tracking-bon-tight text-neutral-foreground-subtle-3 truncate w-full">
        {supportingText}
      </p>
    )}
  </div>
);

// ── Dialog Component ──────────────────────────────────────────────────────────
export const Dialog = forwardRef<HTMLDivElement, DialogProps>(
  (
    {
      type = 'default',
      headline,
      subText,
      supportingText,
      icon,
      avatarSrc,
      slotTop,
      slotBottom,
      cancelLabel = '레이블 Label',
      confirmLabel = '레이블 Label',
      onCancel,
      onConfirm,
      open = true,
      className = '',
    },
    ref,
  ) => {
    if (!open) return null;

    return (
      <div
        ref={ref}
        className={[
          'flex flex-col items-center gap-l',
          'w-[312px] rounded-3xl overflow-hidden',
          'bg-neutral-background-default',
          'pt-2xl pb-l px-l',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {/* ── Top area ── */}
        {type === 'default' && (
          <TextBlock headline={headline} subText={subText} supportingText={supportingText} />
        )}

        {type === 'icon' && (
          <div className="flex flex-col items-center gap-m w-full">
            {icon && (
              <div className="size-10 flex items-center justify-center text-neutral-foreground-default">
                {icon}
              </div>
            )}
            <TextBlock headline={headline} subText={subText} supportingText={supportingText} center />
          </div>
        )}

        {type === 'avatar' && (
          <div className="flex flex-col items-center gap-m w-full">
            {avatarSrc && (
              <div className="size-10 rounded-full overflow-hidden relative">
                <img src={avatarSrc} alt="" className="absolute inset-0 size-full object-cover" />
                <div className="absolute inset-0 bg-neutral-background-dimmed-ghost" />
              </div>
            )}
            <TextBlock headline={headline} subText={subText} supportingText={supportingText} center />
          </div>
        )}

        {type === 'custom' && (
          <>
            {slotTop && (
              <div className="w-full h-[140px]">
                {slotTop}
              </div>
            )}
            <TextBlock headline={headline} subText={subText} supportingText={supportingText} center />
            {slotBottom && (
              <div className="w-full h-[140px]">
                {slotBottom}
              </div>
            )}
          </>
        )}

        {/* ── Footer ── */}
        <DialogFooter
          cancelLabel={cancelLabel}
          confirmLabel={confirmLabel}
          onCancel={onCancel}
          onConfirm={onConfirm}
        />
      </div>
    );
  },
);

Dialog.displayName = 'Dialog';
