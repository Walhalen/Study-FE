import React from 'react'

type Props = {
    name : string
    color : string
}

const TagCard = ({name, color}: Props) => {
  return (
    <div className='tagCard'>
        <div className='tagColorDot' style={{ backgroundColor: color }}></div>
        {name}
    </div>

  )
}

export default TagCard
