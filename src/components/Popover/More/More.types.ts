import type { IconName } from '@/components/Icon';

export interface MoreItem {
  /** 아이콘 이름 */
  icon: IconName;
  /** 레이블 텍스트 */
  label: string;
  /** 클릭 핸들러 */
  onClick?: () => void;
}

export interface PopoverMoreProps {
  /** 메뉴 아이템 목록 */
  items?: MoreItem[];
  /** 추가 className */
  className?: string;
}
