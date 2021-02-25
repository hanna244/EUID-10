import './BeverageList.scss'
import React from 'react'
import BeverageItem from '../BeverageItem/BeverageItem'

const BeverageList = () => {
  return (
    <ul className="beverageList resetList">
      <BeverageItem />
    </ul>
  )
}

export default BeverageList
