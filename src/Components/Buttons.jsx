import React from 'react';
function Buttons(props) {
  return (
    <button className="mx-auto block bg-orange-500 text-white p-2 rounded-lg w-24" onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default Buttons;
