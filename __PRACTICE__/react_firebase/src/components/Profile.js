import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Avater } from '../asset/Avatar.svg'

const ProfileStyle = styled.img`
  height: ${({ height }) => `${height}px` ?? '30px'};
`

export const Profile = ({ source, size = 60, ...restProps }) => {
  return (
    <>
      {!source ? (
        <ProfileStyle
          height={size}
          src={source}
          {...restProps}
          alt="프로필 이미지"
        />
      ) : (
        <Avater height={size} />
      )}
    </>
  )
}

export default Profile
