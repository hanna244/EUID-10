import StoryInput from './StoryInput'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

/* ------------------------------------------------------------------- */

export default {
  // 컴포넌트 설명을 입력하면 Storybook에 카테고리 되어 표시됩니다.
  title: '디자인 시스템/폼 컨트롤/StoryInput',
  // 데코레이터 설정
  decorators: [withKnobs],
  // 컴포넌트 설정
  component: StoryInput,
  // 전달 인자 유형 설정
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  // 전달인자 설정
  args: {
    label: text('label', '이메일'),
    type: 'email',
    placeholder: 'yamoo9@euid.dev',
  },
  parameters: {
    // 뷰포트 애드온 설정
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      // iPhoneX,XR 만 추출
      defaultViewport: ['iphonex', 'iphonexr'],
    },
  },
}

// 컴포넌트 템플릿
// 함수의 복사본을 만드는 표준 JavaScript 기법
const Template = (args) => <StoryInput {...args} />

// sm 사이즈 컴포넌트
export const SmSize = Template.bind({})
SmSize.storyName = 'Small'
SmSize.args = {
  id: 'sm-size-kwdj1',
  size: 'sm',
}
SmSize.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
}

// md 사이즈 컴포넌트
export const MdSize = Template.bind({})
MdSize.storyName = 'Medium'
MdSize.args = {
  id: 'md-size-kwdj5',
  size: 'md',
}
MdSize.parameters = {
  viewport: {
    defaultViewport: 'iphonexr',
  },
}

// lg 사이즈 컴포넌트
export const LgSize = Template.bind({})
LgSize.storyName = 'Large'
LgSize.args = {
  id: 'lg-size-kwdj8',
  size: 'lg',
  labelHidden: boolean('labelHidden', false),
}
