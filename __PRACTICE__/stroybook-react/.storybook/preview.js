import { themes } from '@storybook/theming'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

const { iphonex, iphonexr } = INITIAL_VIEWPORTS

const customViewports = {
  iphonex,
  iphonexr,
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  viewport: { viewports: { /* ...INITIAL_VIEWPORTS ,*/ ...customViewports } },
  darkMode: {
    // 초기 테마 설정
    current: 'light',
    dark: { ...themes.dark, appBg: '#101010' },
    light: { ...themes.normal, appBg: '#f1f6fa' },
    // 테마 클래스
    stylePreview: true,
    darkClass: 'dark',
    lightClass: 'light',
  },
}
