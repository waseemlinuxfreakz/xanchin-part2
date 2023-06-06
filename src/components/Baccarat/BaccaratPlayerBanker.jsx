import React from 'react';

import BlockLeft from '../../assets/img/block_left.png';
import BlockLeft2 from '../../assets/img/block_left_2.png';
import BlockRight from '../../assets/img/block_right.png';
import BlockRight2 from '../../assets/img/block_right_2.png';
import BlockTop from '../../assets/img/block_top.png';
import BlockTop2 from '../../assets/img/block_top_2.png';


function BaccaratPlayerBanker() {
    return ( 
        <div className="baccaratPlayerBanker">
            <div className="row">
                <div className="col-md-3 col-6">
                    <div className="BaccaratBlock BaccaratBlockLeft">
                        <img src={BlockLeft} alt="" className="bg_art BlockLeft1" />
                        <img src={BlockLeft2} alt="" className="bg_art BlockLeft2" />
                        <div className="BaccaratBlockTitle">
                            <h2>PLAYER</h2>
                            <span className='color-orange'>x 2.00</span>
                        </div>
                        <div className="BaccaratBlockBottom">
                            5,000
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="BaccaratBlock BaccaratBlockTop">
                        <img src={BlockTop} alt="" className="bg_art BlockTop1" />
                        <img src={BlockTop2} alt="" className="bg_art BlockTop2" />
                        <div className="BaccaratBlockTitle">
                            <h2>TIE</h2>
                            <span className='color-orange'>x 2.00</span>
                        </div>
                        <div className="BaccaratBlockBottom">
                            5,000
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="BaccaratBlock">
                                <div className="BaccaratBlockTitle">
                                    <h2>TIE</h2>
                                    <span className='color-orange'>x 2.00</span>
                                </div>
                                <div className="BaccaratBlockBottom">
                                    5,000
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="BaccaratBlock">
                                <div className="BaccaratBlockTitle">
                                    <h2>TIE</h2>
                                    <span className='color-orange'>x 2.00</span>
                                </div>
                                <div className="BaccaratBlockBottom">
                                    5,000
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-6">
                    <div className="BaccaratBlock BaccaratBlockRight">
                        <img src={BlockRight} alt="" className="bg_art BlockRight1" />
                        <img src={BlockRight2} alt="" className="bg_art BlockRight2" />
                        <div className="BaccaratBlockTitle">
                            <h2>BANKER</h2>
                            <span className='color-orange'>x 2.00</span>
                        </div>
                        <div className="BaccaratBlockBottom">
                            5,000
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default BaccaratPlayerBanker;