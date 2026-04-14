export type InfoType = 'default' | 'titled';
export type InfoLine = 'single' | 'multi';

export interface PopoverInfoProps {
  /** 타입 */
  type?: InfoType;
  /** 줄 수 */
  line?: InfoLine;
  /** 버튼 표시 여부 */
  button?: boolean;
  /** 제목 (titled 타입) */
  title?: string;
  /** 본문 텍스트 */
  text?: string;
  /** 버튼 레이블 */
  buttonLabel?: string;
  /** 링크 텍스트 (single + button) */
  linkText?: string;
  /** 닫기 핸들러 */
  onClose?: () => void;
  /** 버튼 클릭 핸들러 */
  onButtonClick?: () => void;
  /** 링크 클릭 핸들러 */
  onLinkClick?: () => void;
  /** 추가 className */
  className?: string;
}
