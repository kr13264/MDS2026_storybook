export type TabType = 'underline' | 'capsule';
export type TabLayout = 'scrollable' | 'fixed';
export type TabTone = 'natural' | 'invert';
export type TabState = 'default' | 'selected' | 'disabled';

export interface TabProps {
  /** 레이블 텍스트 */
  label?: string;
  /** 탭 스타일 */
  type?: TabType;
  /** 레이아웃 방식 */
  layout?: TabLayout;
  /** 톤 */
  tone?: TabTone;
  /** 상태 */
  state?: TabState;
  /** 클릭 핸들러 */
  onClick?: () => void;
  /** 추가 className */
  className?: string;
}
