import React from 'react';
import type { Preview, Decorator } from '@storybook/react';
import '../src/index.css';
import { MdsDocsPage } from './MdsDocsPage';

const DOCS_TYPOGRAPHY_CSS = `
  .sbdocs, .sbdocs * {
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif !important;
  }
  .sbdocs h1 {
    font-size: 36px !important;
    font-weight: 800 !important;
    letter-spacing: -0.5px !important;
    color: #111122 !important;
    margin-bottom: 6px !important;
  }
  .sbdocs-title {
    font-size: 36px !important;
    font-weight: 800 !important;
    letter-spacing: -0.5px !important;
    color: #111122 !important;
  }
  .sbdocs h2,
  .sbdocs h3,
  .sbdocs h4 {
    font-weight: 700 !important;
    border-bottom: none !important;
    padding-bottom: 0 !important;
    color: #111122 !important;
  }
  .sbdocs h2 {
    font-size: 20px !important;
    margin: 24px 0 12px !important;
  }
  .sbdocs p {
    font-size: 13px !important;
    color: #55557A !important;
    line-height: 1.7 !important;
  }
  .sbdocs .sb-unstyled {
    margin-top: 8px !important;
  }
  .sbdocs .sb-anchor > h2#stories,
  .sbdocs-stories-title,
  h2#stories,
  [id="stories"],
  .sbdocs h2[id="stories"],
  .sbdocs div > h2:has(+ .sb-unstyled) {
    display: none !important;
  }
  /* Properties 헤더 테두리 */
  .docblock-argstable {
    border-radius: 4px !important;
    overflow: hidden !important;
  }
  .docblock-argstable thead tr {
    border-top: 1px solid #E4E4EE !important;
    border-left: 1px solid #E4E4EE !important;
    border-right: 1px solid #E4E4EE !important;
    border-radius: 8px 8px 0 0 !important;
  }
  /* STORIES 대문자 레이블 */
  h3[class], h2[class] {
    text-transform: none !important;
    letter-spacing: normal !important;
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
  #storybook-root, .docs-story, .docs-story > div {
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
          'Assets', ['Icon', 'container.icon', 'Badges', ['Overlay', 'Ad', 'Count', 'Tooltip', 'Verified', '*', 'Overview', 'Docs'], '*'],
          'Components',
          [
            'Badges', ['Overlay', 'Ad', 'Count', 'Tooltip', 'Verified', '*', 'Overview', 'Docs'],
            'Buttons', ['Basic', 'Icon', 'Segment', 'Group', '*', 'Overview', 'Docs'],
            'Chip',
            'Controls', ['Switch', 'Search', '*', 'Docs'],
            'Dialogs',
            'Divider',
            'Header', ['Title', 'Block', 'Components', 'Usage', 'Matrix', '*', 'Docs'],
            'Images', ['Circle', 'Opacity', 'Place', 'Rectangle', 'Shadow', 'Thumbnail', '*', 'Overview', 'Docs'],
            'Pagination',
            'Popover @의선',
            'Profile',
            'Reaction', ['Horizontal', 'Vertical', '*', 'Docs'],
            'Sheets @ 수정',
            'Snackbar @수정',
            'Tabs',
            'Thumbnail',
            '*',
          ],
          'Templates',
          '*',
        ],
      },
    },
    docs: {
      page: MdsDocsPage,
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
