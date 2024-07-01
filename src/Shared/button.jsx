import React from 'react';

function Button({ btnText, onClick }) {
  return (
    <div>
      <button className='AddButton' onClick={onClick}>{btnText}</button>
    </div>
  );
}

export default Button;
