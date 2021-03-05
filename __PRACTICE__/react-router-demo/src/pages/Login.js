import React from 'react'

export const Login = ({ location, ...props }) => {
  console.log(location)
  return <p {...props}>로그인 페이지 입니다.</p>
}
