import type { BadgeVerifiedProps } from './Verified.types';

const OfficialIcon = () => (
  <svg width={19} height={17} viewBox="0 0 19 17" fill="none">
    <path d="M9.5 0L11.8 1.2L14.5 1L15.5 3.5L17.8 4.8L17.2 7.5L18.5 9.7L16.5 11.5L16.2 14.2L13.5 14.5L11.5 16.2L9.5 14.5L7.5 16.2L5.5 14.5L2.8 14.2L2.5 11.5L0.5 9.7L1.8 7.5L1.2 4.8L3.5 3.5L4.5 1L7.2 1.2L9.5 0Z" fill="#3283FD" />
    <path d="M6.5 7.5L8.5 9.5L12.5 5.5" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LocalIcon = () => (
  <svg width={19} height={17} viewBox="0 0 19 17" fill="none">
    <path d="M9.5 0L11.8 1.2L14.5 1L15.5 3.5L17.8 4.8L17.2 7.5L18.5 9.7L16.5 11.5L16.2 14.2L13.5 14.5L11.5 16.2L9.5 14.5L7.5 16.2L5.5 14.5L2.8 14.2L2.5 11.5L0.5 9.7L1.8 7.5L1.2 4.8L3.5 3.5L4.5 1L7.2 1.2L9.5 0Z" fill="#03A94D" />
    <path d="M6.5 7.5L8.5 9.5L12.5 5.5" stroke="white" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const VerifiedSmIcon = () => (
  <svg width={14} height={14} viewBox="0 0 14 14" fill="none">
    <circle cx={7} cy={7} r={7} fill="#3283FD" />
    <path d="M4.5 7L6.2 8.8L9.5 5.2" stroke="white" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const VerifiedLgIcon = () => (
  <svg width={22} height={22} viewBox="0 0 22 22" fill="none">
    <circle cx={11} cy={11} r={11} fill="#3283FD" />
    <path d="M7 11L9.8 13.8L15 8.2" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const iconMap = {
  official: OfficialIcon,
  local: LocalIcon,
  verifiedSm: VerifiedSmIcon,
  verifiedLg: VerifiedLgIcon,
};

export const BadgeVerified = ({ type = 'official' }: BadgeVerifiedProps) => {
  const Icon = iconMap[type];
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <Icon />
    </span>
  );
};

BadgeVerified.displayName = 'BadgeVerified';
