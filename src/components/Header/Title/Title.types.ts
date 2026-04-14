export type HeaderTitleLayout = 'Left' | 'Center';

export interface HeaderTitleProps {
  /** 타이틀 텍스트 */
  title?: string;
  /** 레이아웃 (좌측 정렬 / 중앙 정렬) */
  layout?: HeaderTitleLayout;
  /** Leading 아이콘 슬롯 (기본: ← 뒤로가기) */
  headIcon?: React.ReactNode;
  /** Leading 아이콘 표시 여부 */
  showHeadIcon?: boolean;
  /** Trailing 아이콘 슬롯 (기본: × 닫기) */
  tailIcon?: React.ReactNode;
  /** Trailing 아이콘 표시 여부 */
  showTailIcon?: boolean;
  /** 타이틀 앞 아이콘 슬롯 */
  titlePrefix?: React.ReactNode;
  /** 타이틀 앞 아이콘 표시 여부 */
  showTitlePrefix?: boolean;
  /** 타이틀 뒤 아이콘 슬롯 */
  titleSuffix?: React.ReactNode;
  /** 타이틀 뒤 아이콘 표시 여부 */
  showTitleSuffix?: boolean;
  className?: string;
}
