import React, { useState } from 'react';

function Home() {
  const [buttonText, setButtonText] = useState('Show Text');

  const handleClick = () => {
    setButtonText('DONE');
  };

  return (
    <button onClick={handleClick}>{buttonText}</button>
  );
}

export default Home