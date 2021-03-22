import React from 'react'
import PropTypes from 'prop-types'
import './StoryInput.scss'

// Story를 구성할 컴포넌트를 작성합니다.
const StoryInput = ({
  id,
  label,
  labelHidden,
  className,
  size,
  backgroundColor,
  ...restProps
}) => (
  <div className={`storyInput ${size} ${className}`.trim()}>
    <label htmlFor={id} className={labelHidden ? 'a11yHidden' : null}>
      {label}
    </label>
    <input id={id} {...restProps} />
  </div>
)

export default StoryInput

// 컴포넌트 속성 검사를 설정하면 Story 문서에 반영됩니다.
// 컴포넌트에 필요한 데이터 형태를 명시하려면 React에서 propTypes를 사용하는 것이 가장 좋습니다.
// 이는 자체적 문서화일 뿐만 아니라, 문제를 조기에 발견하는 데 도움이 됩니다.
StoryInput.propTypes = {
  /** label 요소와 input 요소를 연결하는 key */
  id: PropTypes.string.isRequired,
  /** UI에 표시되는 레이블 */
  label: PropTypes.string.isRequired,
  /** 레이블을 UI에서 감춤 (스크린 리더 사용자에게는 읽힘) */
  labelHidden: PropTypes.bool,
  /** 플레이스홀더 */
  placeholder: PropTypes.string,
  /** 커스텀 클래스 이름 */
  className: PropTypes.string,
  /** 설정 가능한 인풋 타입 */
  type: PropTypes.oneOf(['text', 'email', 'password', 'search']),
  /** 인풋 크기 */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
}

// 컴포넌트 기본 속성을 설정하면 Story 문서에 반영됩니다.
StoryInput.defaultProps = {
  type: 'text',
  className: '',
  size: 'md',
  labelHidden: false,
}
