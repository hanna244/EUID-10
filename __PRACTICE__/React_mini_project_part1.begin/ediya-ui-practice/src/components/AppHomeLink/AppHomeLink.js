import './AppHomeLink.scss'
import React from 'react'
import { string } from 'prop-types'
import classNames from 'classnames'

const AppHomeLink = ({
  wrapperProps: { as: WrapperComponent, wrapperClassName, ...restWrapperProps },
  children,
  external,
  className,
  ...domProps
}) => {
  // classNames를 사용해서 클래스 이름이 중첩되어 사용할 수 있도록 한다.
  const linkClassNames = classNames('appHeader__homeLink', className ?? '')
  const wrapperClassNames = classNames(
    'appHeader__brand',
    wrapperClassName ?? ''
  )
  return (
    <WrapperComponent {...restWrapperProps} className={wrapperClassNames}>
      <a
        // 기본값이 아닌 사용자가 입력한 나머지 속성이 포함되도록 한다.
        {...domProps}
        className={linkClassNames}
        // external 속성에 true/false를 사용해서 두 개의 속성을 모두 설정하거나 제거 하도록 할 수 있다.
        target={external ? '_blank' : null}
        rel={external ? 'noopener noreferrer' : null}
      >
        {/* 기본 값이 필요한 속성은 아래와 같이 기본 값을 할 수 있다. */}
        {children ?? <span className="a11yHidden">홈링크</span>}
      </a>
    </WrapperComponent>
  )
}

// href이 반드시 전달 될 수 있도록 propTypes를 설정한다.
AppHomeLink.propTypes = {
  href: string.isRequired,
}
AppHomeLink.defaultProps = {
  wrapperProps: {
    as: 'h1',
  },
}

export default AppHomeLink
