import * as React from 'react';
import ICON from './assets/images/location-dot.svg'

function Pin() {
  return (
      <img src={ICON} width={"35px"} height={"35px"}/>
  );
}

export default React.memo(Pin);