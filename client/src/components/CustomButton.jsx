/* eslint-disable react/prop-types */
import React from 'react'
import state from '../store'
import { useSnapshot } from 'valtio'
import { getContrastingColor } from '../config/helpers'

const CustomButton = ({
  type,
  title,
  handleClick,
  customStyles,
}) => {
  const snap = useSnapshot(state)
  const generateStyle = type => {
    switch (type) {
      case 'filled':
        return {
          backgroundColor: snap.color,
          color: getContrastingColor(snap.color)
        }
      case 'outline':
        return {
          borderWidth: '1px',
          borderColor: snap.color,
          color: snap.color
        }

      default:
        break;
    }
  }
  return (
    <button
      style={generateStyle(type)}
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default CustomButton
