import React from 'react';
import type { Preview, Decorator } from '@storybook/react';
import '../src/index.css';

const DOCS_TYPOGRAPHY_CSS = `
  .sbdocs-title {
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif !important;
    font-size: 36px !important;
    font-weight: 700 !important;
    letter-spacing: -0.3px !important;
  }
  .sbdocs h2,
  .sbdocs h3,
  .sbdocs h4 {
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif !important;
    font-weight: 700 !important;
  }
  .sbdocs-description,
  .sbdocs .sbdocs-p {
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif !important;
  }
`;

const CANVAS_DARK_CSS = `
  body, .sb-show-main, .sb-main-padded, .sb-main-centered, .sb-main-fullscreen,
  #storybook-root, .docs-story, .docs-story > div {
    background-color: #111122 !important;
  }
  .docs-story {
    border-color: #2E2E50 !important;
    outline-color: #2E2E50 !important;
  }
`;

const CANVAS_LIGHT_CSS = `
  body, .sb-show-main, .sb-main-padded, .sb-main-centered, .sb-main-fullscreen,
  #storybook-root {
    background-color: #F5F5F8 !important;
  }
`;

const withTheme: Decorator = (Story, context) => {
  const isDark = context.globals['theme'] === 'dark';

  React.useEffect(() => {
    // Docs typography override
    if (!document.getElementById('mds-docs-typography')) {
      const typoEl = document.createElement('style');
      typoEl.id = 'mds-docs-typography';
      typoEl.textContent = DOCS_TYPOGRAPHY_CSS;
      document.head.appendChild(typoEl);
    }

    const root = document.documentElement;
    root.classList.toggle('dark', isDark);

    // Inject style tag to override Storybook's inline appPreviewBg
    let styleEl = document.getElementById('mds-canvas-theme') as HTMLStyleElement | null;
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = 'mds-canvas-theme';
      document.head.appendChild(styleEl);
    }
    styleEl.textContent = isDark ? CANVAS_DARK_CSS : CANVAS_LIGHT_CSS;
  }, [isDark]);

  return <Story />;
};

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [withTheme],
  parameters: {
    options: {
      storySort: {
        order: [
          'Home',
          'Foundation',
          'Assets', ['Icon', 'container.icon', 'Badges', ['Docs', 'Overlay', 'Ad', 'Count', 'Tooltip', 'Verified', 'Overview', '*'], '*'],
          'Components',
          [
            'Buttons', ['Docs', 'Basic', 'Icon', 'Segment', 'Group', 'Overview', '*'],
            'Chip',
            'Dialogs',
            'Divider',
            'Header', ['Docs', 'Title', 'Block', 'Components', 'Usage', 'Matrix', '*'],
            'Images', ['Docs', 'Circle', 'Opacity', 'Place', 'Rectangle', 'Shadow', 'Thumbnail', '*'],
            'Pagination',
            'Popover @의선',
            'Profile',
            'Reaction', ['Docs', 'Horizontal', 'Vertical', '*'],
            'Search',
            'Sheets @ 수정',
            'Snackbar @수정',
            'Switch',
            'Tabs',
            'Thumbnail',
            '*',
          ],
          'Templates',
          '*',
        ],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
    backgrounds: { disable: true },
    viewport: {
      viewports: {
        mobile: { name: 'Mobile (375)', styles: { width: '375px', height: '812px' } },
        tablet: { name: 'Tablet (768)', styles: { width: '768px', height: '1024px' } },
        desktop: { name: 'Desktop (1280)', styles: { width: '1280px', height: '900px' } },
        wide: { name: 'Wide (1440)', styles: { width: '1440px', height: '900px' } },
      },
      defaultViewport: 'responsive',
    },
  },
};

export default preview;
