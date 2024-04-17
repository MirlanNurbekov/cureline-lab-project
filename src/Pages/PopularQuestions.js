import React, { useState, useEffect } from 'react';



function PopularQuestions() {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    console.log('isShown changed to: ', isShown);
  }, [isShown]);

  const toggleText = () => {
    setIsShown(!isShown);
  };

  return (
    <div>
      <button onClick={toggleText}>
        {isShown ? 'Hide Text' : 'Show Text'}
      </button>
      {isShown && (
  <div className="show-hide-text">
    This is the text that gets shown or hidden when the button is clicked.
  </div>
)}
    </div>
  );
}

export default PopularQuestions;
