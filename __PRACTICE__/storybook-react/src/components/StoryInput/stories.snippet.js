import StoryInput from './StoryInput'

/* ------------------------------------------------------------------- */

export default {
  // 컴포넌트 설명을 입력하면 Storybook에 카테고리 되어 표시됩니다.
  title: '디자인 시스템/폼 컨트롤/StoryInput',
  // 컴포넌트 설정
  component: StoryInput,
  // 전달 인자 유형 설정
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
}

// 컴포넌트 템플릿
const Template = (args) => <StoryInput {...args} />

// sm 사이즈 컴포넌트
export const SmSize = Template.bind({})
SmSize.args = {
  id: 'sm-size-kwdj1',
  label: '이메일',
  type: 'email',
  size: 'sm',
  placeholder: 'yamoo9@euid.dev',
}

// sm 사이즈 컴포넌트
export const MdSize = Template.bind({})
MdSize.args = {
  id: 'md-size-kwdj5',
  label: '이메일',
  type: 'email',
  placeholder: 'yamoo9@euid.dev',
}

// sm 사이즈 컴포넌트
export const LgSize = Template.bind({})
LgSize.args = {
  id: 'lg-size-kwdj8',
  label: '이메일',
  type: 'email',
  size: 'lg',
  placeholder: 'yamoo9@euid.dev',
}
