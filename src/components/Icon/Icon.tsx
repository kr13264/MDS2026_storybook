import { iconPaths } from './iconPaths';
import type { IconProps, IconSize } from './Icon.types';

const sizeMap: Record<IconSize, number> = {
  xl: 30,
  lg: 24,
  md: 20,
  sm: 18,
  xs: 16,
  '2xs': 14,
  '3xs': 10,
};

export const Icon = ({
  name,
  variant = 'outlined',
  size = 'lg',
  color = 'currentColor',
  className = '',
}: IconProps) => {
  const icon = iconPaths[name];
  if (!icon) return null;

  const svgContent = icon[variant] ?? icon.filled ?? icon.outlined ?? '';
  const px = sizeMap[size];

  // SVG path의 fill="black"/stroke="black"을 color로 교체
  const coloredContent = svgContent
    .replace(/fill="black"/g, `fill="${color}"`)
    .replace(/stroke="black"/g, `stroke="${color}"`);

  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ flexShrink: 0 }}
      dangerouslySetInnerHTML={{ __html: coloredContent }}
    />
  );
};

Icon.displayName = 'Icon';
