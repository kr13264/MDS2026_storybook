import type { Meta, StoryObj } from '@storybook/react';

const IconLibrary = () => (
  <iframe
    src="/mds-icon-library.html"
    style={{
      width: '100%',
      height: 'calc(100vh - 40px)',
      border: 'none',
    }}
    title="MDS Icon Library"
  />
);

const meta: Meta<typeof IconLibrary> = {
  title: 'Assets/Icon/Download',
  component: IconLibrary,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'MDS 아이콘 다운로드 페이지입니다. 아이콘을 검색하고 SVG를 복사/다운로드할 수 있습니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconLibrary>;

export const Default: Story = {};
