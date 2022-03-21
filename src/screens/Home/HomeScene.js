import React, { useState, useEffect } from 'react';
import WrapperComponent from '../../component/hoc/WrapperComponent';

function HomeScene(props) {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happening :)</p>
    </div>
  );
}
export default WrapperComponent('HomeScene')(HomeScene);
