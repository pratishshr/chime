import 'rc-slider/assets/index.css';

import ReactSlider from 'rc-slider';
import React, { Component } from 'react';

class Slider extends Component {
  render() {
    return (
      <ReactSlider
        trackStyle={{ background: 'orange' }}
        railStyle={{ background: '#a6afbb' }}
      />
    );
  }
}

export default Slider;
