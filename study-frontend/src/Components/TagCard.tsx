import React, { useState, useEffect } from 'react';
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
  setTags: (tags: Array<Tag>) => void;
};

export const TagCard = ({ name, color, setTags, tags }: Props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (!isClicked) {
      // Create a new tag object
      const newTag = {
        id: tags.length, // Assign a unique ID
        name: name,
        color: color,
      };
      console.log(tags)
      // Update the tags state by creating a new array with the new tag
      setTags([...tags, newTag]);
      setIsClicked(true);
    } else {
      
      // Remove the tag with the same name from the tags state
      const updatedTags = tags.filter(tag => tag.name !== name);
      setTags(updatedTags);
      setIsClicked(false);
    }
    
  };
  
  // useEffect(() => {
  //   console.log(tags)
  // }, [tags])


  return (
    <button  className={`tagCard ${isClicked ? 'clicked' : ''}`} onClick={handleClick}>
      <div className='tagColorDot' style={{ backgroundColor: color }}></div>
      {name}
    </button>
  );
};
