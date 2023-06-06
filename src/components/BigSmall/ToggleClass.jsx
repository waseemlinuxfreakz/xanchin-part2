import React, { useState } from 'react';

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        Toggle
      </button>
      <div className={isToggled ? 'toggle-on' : 'toggle-off'}>
        Element with Toggle Class
      </div>
    </div>
  );
};

export default ToggleButton;