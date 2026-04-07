export type PaginationVariant = 'solid' | 'ghost';

export interface PaginationProps {
  /** 전체 페이지 수 */
  totalPages: number;
  /** 현재 활성 페이지 (1부터 시작) */
  currentPage: number;
  /** 스타일 */
  variant?: PaginationVariant;
  /** 페이지 변경 콜백 */
  onChange?: (page: number) => void;
  className?: string;
}
