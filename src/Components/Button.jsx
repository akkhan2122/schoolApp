import React from 'react';
function Button(props) {
  return (
    <button className="mx-auto block bg-orange-500 text-white p-2 rounded-lg" onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default Button;
