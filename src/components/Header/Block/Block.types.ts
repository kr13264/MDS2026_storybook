export type HeaderBlockType = 'SheetsTitle' | 'BlockTitle';

export interface HeaderBlockProps {
  /** 블록 타입 */
  type?: HeaderBlockType;
  /** 타이틀 텍스트 */
  title?: string;
  /** Trailing 슬롯 표시 여부 */
  trailingSlot?: boolean;
  /** Trailing 슬롯 커스텀 콘텐츠 */
  back?: React.ReactNode;
  className?: string;
}
