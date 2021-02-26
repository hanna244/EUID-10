const initialState = {
  animationClass: '',
}

const logoAnimationReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
    case 'run 함수 초기 실행':
      return state
    case STOP_LOGO_ANIMATION:
      return {
        ...state,
        animationClass: '',
      }
    case PLAY_LOGO_ANIMATION:
      return {
        ...state,
        animationClass: 'run-animation',
      }
  }
}

export const PLAY_LOGO_ANIMATION = '로고 애니메이션 실행'
export const STOP_LOGO_ANIMATION = '로고 애니메이션 정지'

export const playlogoanimation = (animationClass) => ({
  type: PLAY_LOGO_ANIMATION,
  animationClass,
})

export const stoplogoanimation = () => ({
  type: STOP_LOGO_ANIMATION,
})

export logoAnimationReducer
