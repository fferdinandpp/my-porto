// src/components/ReadMore.jsx
import React, { useState } from 'react';

const ReadMore = ({ children, maxWordCount = 100 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const words = children.split(' ');
  const displayedText = isExpanded ? children : words.slice(0, maxWordCount).join(' ') + '...';

  return (
    <div className="text-white text-base lg:text-lg md:hidden">
      <p>{displayedText}</p>
      <button
        onClick={toggleReadMore}
        className="text-white text-opacity-25 hover:text-opacity-35 focus:outline-none"
      >
        {isExpanded ? ' Read Less' : ' Read More'}
      </button>
    </div>
  );
};

export default ReadMore;
