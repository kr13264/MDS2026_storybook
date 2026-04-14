/**
 * MDS Component Registry
 * JSON 스키마의 component 이름과 실제 React 컴포넌트를 매핑
 */
import { ButtonBasic } from '../components/Buttons/Basic';
import { ButtonIcon } from '../components/Buttons/Icon';
import { ButtonSegment } from '../components/Buttons/Segment';
import { ButtonGroup } from '../components/Buttons/Group';
import { Chip } from '../components/Chip/Chip';
import { Divider } from '../components/Divider/Divider';
import { Icon } from '../components/Icon/Icon';
import { Thumbnail } from '../components/Thumbnail/Thumbnail';
import { Tab } from '../components/Tabs/Tab/Tab';
import { TabList } from '../components/Tabs/TabList/TabList';
import { HeaderTitle } from '../components/Header/Title/Title';
import { HeaderBlock } from '../components/Header/Block/Block';
import { Handle } from '../components/Header/Handle/Handle';
import { Indicator } from '../components/Header/Indicator/Indicator';
import { Dialog } from '../components/Dialogs/Dialog';
import { Pagination } from '../components/Pagination/Pagination';
import { Selection } from '../components/Selection/Selection';
import { SwitchToggle } from '../components/Switch/Toggle/SwitchToggle';
import { SwitchTab } from '../components/Switch/Tab/SwitchTab';
import { ReactionHorizontal } from '../components/Reaction/Horizontal/Horizontal';
import { ReactionVertical } from '../components/Reaction/Vertical/Vertical';
import { ProfileHorizontal } from '../components/Profile/Horizontal/ProfileHorizontal';
import { Profile } from '../components/Profile/Vertical/ProfileVertical';
import { BadgeOverlay } from '../components/Badges/Overlay/Overlay';
import { BadgeAd } from '../components/Badges/Ad/Ad';
import { BadgeCount } from '../components/Badges/Count/Count';
import { BadgeTooltip } from '../components/Badges/Tooltip/Tooltip';
import { BadgeVerified } from '../components/Badges/Verified/Verified';
import { ImageRect } from '../components/Images/ImageRect';
import { PopoverTooltip } from '../components/Popover/Tooltip/Tooltip';
import { PopoverInfo } from '../components/Popover/Info/Info';
import { PopoverMore } from '../components/Popover/More/More';

import type { ComponentType } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const componentRegistry: Record<string, ComponentType<any>> = {
  // Badges
  BadgeOverlay,
  BadgeAd,
  BadgeCount,
  BadgeTooltip,
  BadgeVerified,
  // Buttons
  ButtonBasic,
  Button: ButtonBasic,
  ButtonIcon,
  ButtonSegment,
  ButtonGroup,
  // Chip
  Chip,
  // Dialogs
  Dialog,
  // Divider
  Divider,
  // Header
  HeaderTitle,
  HeaderBlock,
  Handle,
  Indicator,
  // Icon
  Icon,
  // Images
  ImageRect,
  // Pagination
  Pagination,
  // Popover
  PopoverTooltip,
  PopoverInfo,
  PopoverMore,
  // Profile
  Profile,
  ProfileHorizontal,
  // Reaction
  ReactionHorizontal,
  ReactionVertical,
  // Selection
  Selection,
  // Switch
  SwitchToggle,
  SwitchTab,
  // Tabs
  Tab,
  TabList,
  // Thumbnail
  Thumbnail,
};
