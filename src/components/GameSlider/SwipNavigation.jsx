import React from 'react';

import ArrowRight from '../../assets/img/icons/arrow-right.svg';
import ArrowLeft from '../../assets/img/icons/arrow-left.svg';

function SwipNavigation() {
    return ( 
        <div className="swiper_arrow gameSwiperArrow">
            <div className="prev"><img src={ArrowLeft} alt="ArrowLeft" /></div>
            <div className="next"><img src={ArrowRight} alt="ArrowRight" /></div>
        </div>
     );
}

export default SwipNavigation;