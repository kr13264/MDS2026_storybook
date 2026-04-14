import type { ReactNode } from 'react';

/** Dialog 타입 — 상단 영역 구성 방식 */
export type DialogType = 'default' | 'icon' | 'avatar' | 'custom';

export interface DialogProps {
  /** 타입: 상단 영역 구성 방식 */
  type?: DialogType;
  /** 제목 텍스트 */
  headline?: string;
  /** 보조 텍스트 */
  subText?: string;
  /** 추가 설명 텍스트 */
  supportingText?: string;
  /** 아이콘 (type="icon" 시 사용) */
  icon?: ReactNode;
  /** 아바타 이미지 URL (type="avatar" 시 사용) */
  avatarSrc?: string;
  /** 커스텀 상단 슬롯 (type="custom" 시 사용) */
  slotTop?: ReactNode;
  /** 커스텀 하단 슬롯 (type="custom" 시 사용) */
  slotBottom?: ReactNode;
  /** 취소 버튼 레이블 */
  cancelLabel?: string;
  /** 확인 버튼 레이블 */
  confirmLabel?: string;
  /** 취소 버튼 클릭 핸들러 */
  onCancel?: () => void;
  /** 확인 버튼 클릭 핸들러 */
  onConfirm?: () => void;
  /** 열림 상태 */
  open?: boolean;
  /** 추가 className */
  className?: string;
}
