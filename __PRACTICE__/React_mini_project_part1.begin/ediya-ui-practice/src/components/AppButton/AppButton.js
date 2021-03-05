import React from 'react'
import classNames from 'classnames'

const AppButton = ({ children, handleNav, className, label, ...restProps }) => {
  const buttonClassNames = classNames('resetButton', className ?? '')

  return (
    <button
      {...restProps}
      onClick={handleNav}
      className={buttonClassNames}
      // type 버튼의 경우는 기본값을 사용할 필요없다. 왜냐하면 해당 컴포넌트는 Button으로만 사용할 것이기 때문에 변하지 않는다.
      type="button"
      // title과 aria-label 값이 동일하니 label로 한번에 설정할 수 있다.
      title={label ?? null}
      aria-label={label ?? null}
    >
      {children ?? <span className="ir"></span>}
    </button>
  )
}

export default AppButton
