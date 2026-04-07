export type HeaderTitleLayout = 'Left' | 'Center';

export interface HeaderTitleProps {
  /** 타이틀 텍스트 */
  title?: string;
  /** 레이아웃 (좌측 정렬 / 중앙 정렬) */
  layout?: HeaderTitleLayout;
  /** Leading 슬롯 표시 여부 */
  leadingSlot?: boolean;
  /** Trailing 슬롯 표시 여부 */
  trailingSlot?: boolean;
  /** Leading 슬롯 커스텀 콘텐츠 */
  front?: React.ReactNode;
  /** Trailing 슬롯 커스텀 콘텐츠 */
  back?: React.ReactNode;
  /** 타이틀 앞 아이콘 표시 여부 */
  titlePrefix?: boolean;
  /** 타이틀 앞 커스텀 아이콘 */
  titlePrefixIcon?: React.ReactNode;
  /** 타이틀 뒤 아이콘 표시 여부 */
  titleSuffix?: boolean;
  /** 타이틀 뒤 커스텀 아이콘 */
  titleSuffixIcon?: React.ReactNode;
  className?: string;
}
