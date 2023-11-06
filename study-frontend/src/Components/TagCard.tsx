import React, { useState } from 'react';
import '../cssFiles/loginSignInPage.css';

interface Tag {
  id: number;
  name: string;
  color: string;
}

type Props = {
  name: string;
  color: string;
  tags: Array<Tag>;
 
};

export const TagCard = ({ name, color, tags }: Props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (!isClicked) {
      // Add the tag to the tags array
      tags.push({
        id : 0, 
        name : name,
        color: color
        })
      setIsClicked(true);
    } else {
        tags.filter((tag) => tag.name !== name && tag.color !== color)
        setIsClicked(false);
    }
  };

  return (
    <button className='tagCard' style={{ backgroundColor: isClicked ? 'grey' : 'white' }} onClick={handleClick}>
      <div className='tagColorDot' style={{ backgroundColor: color }}></div>
      {name}
    </button>
  );
};
