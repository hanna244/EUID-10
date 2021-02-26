// 초기 상태(initial state)
const initialState = {
  animationClass: '',
}

// 스토어 리듀서(store reducer)
const logoAnimationReducer = (state, action) => {
  switch (action.type) {
    case STOP_LOGO_ANIMATION:
      return {
        ...state,
        animationClass: '',
      }
    case PLAY_LOGO_ANIMATION:
      return {
        ...state,
        animationClass: action.activeAnimationClassName,
      }
    default:
      return state
  }
}

// 액션 타입
export const STOP_LOGO_ANIMATION = '로고 애니메이션 정지'
export const PLAY_LOGO_ANIMATION = '로고 애니메이션 실행'

// 액션 크리에이터
export const playLogoAnimation = (activeAnimationClassName) => ({
  type: PLAY_LOGO_ANIMATION,
  activeAnimationClassName,
})
export const stopLogoAnimation = () => ({
  type: STOP_LOGO_ANIMATION,
})

// 리듀서 기본 내보내기
export default logoAnimationReducer
