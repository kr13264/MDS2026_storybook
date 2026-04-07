export type DividerOrientation = 'horizontal' | 'vertical';

export interface DividerProps {
  /** 방향 */
  orientation?: DividerOrientation;
  /** 길이 (horizontal: width, vertical: height) */
  length?: number | string;
  className?: string;
}
