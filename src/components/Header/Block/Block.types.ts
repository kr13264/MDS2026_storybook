export type HeaderBlockType = 'SheetsTitle' | 'BlockTitle';

export interface HeaderBlockProps {
  /** 블록 타입 */
  type?: HeaderBlockType;
  /** 타이틀 텍스트 */
  title?: string;
  /** Trailing 아이콘 표시 여부 */
  showTailIcon?: boolean;
  /** Trailing 아이콘 슬롯 */
  tailIcon?: React.ReactNode;
  className?: string;
}
