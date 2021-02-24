import React from 'react'
import { ReactComponent as Spinner } from '../asset/Spinner.svg'

export default function Loading({ loadingMessage, ...restProps }) {
  return (
    <>
      <Spinner title="로딩중" {...restProps} />
      <p children={loadingMessage ?? '조금만 기다려 주세요!'}></p>
    </>
  )
}
