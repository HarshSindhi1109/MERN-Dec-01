import React from 'react';

const Football = () => {
  //   const shoot = () => {
  //     alert('Great Shot!!!');
  //   };

  const shoot = (a, b) => {
    // alert(a);
    //   alert(b.type);
    console.log(b.target);
  };

  return (
    <div>
      {/* <button onClick={(event) => shoot('Goal', event)}>Click Me!!</button> */}
      <button onMouseOver={(event) => shoot('Goal', event)}>Click Me!!</button>
    </div>
  );
};

export default Football;
