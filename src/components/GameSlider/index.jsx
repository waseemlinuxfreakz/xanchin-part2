import React from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import SwipNavigation from './SwipNavigation';


function GameSlider() {

    const navigate = useNavigate();

    return ( 
        <>
            <SwipNavigation/>
            <div className="swiper_wraper">

                <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation={{
                    prevEl: '.prev',
                    nextEl: '.next',
                }}
                modules={[Pagination, Navigation]}
                onSlideChange={() => {}}
                onSwiper={(swiper) => {}}
                className="gameSliderSwip"
            >
            
                <SwiperSlide>
                    <div className="gameCartContainer">
                        <div className="gameCart row">
                            <div onClick={() => navigate("tai-xiu")} className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                <div className="cartcol">
                                    <img src={"/static/media/box_images/taixiu.png"} alt="Tai Xiu Xanh Chin, xanhchin.io" />
                                    <div className="cartContent"><h3>Tài Xỉu</h3></div>
                                </div>
                            </div>
                            <div onClick={() => navigate("bau-cua")} className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                <div className="cartcol">
                                    <img src={"/static/media/box_images/baucua.png"} alt="Cart Image" />
                                    <div className="cartContent"><h3>Bầu Cua</h3></div>
                                </div>
                            </div>
                            <div onClick={() => navigate("xoc-dia")} className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                <div className="cartcol">
                                    <img src={"/static/media/box_images/xocdia.png"} alt="Xoc Dia Xanh Chin, xanhchin.io" />
                                    <div className="cartContent"><h3>Xóc Đĩa</h3></div>
                                </div>
                            </div>
                            <div onClick={() => navigate("crash")} className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                <div className="cartcol">
                                    <img src={"/static/media/box_images/rocket.png"} alt="Rocket Xanh Chin, Phi Thuyen Xanh Chin, xanhchin.io" />
                                    <div className="cartContent"><h3>Phi Thuyền</h3></div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                <div className="cartcol">
                                    <img src={"/static/media/box_images/baccarat.png"} alt="Baccarat Xanh Chin, xanhchin.io" />
                                    <div className="cartContent">
                                        <h3>Bài Baccarat</h3> 
                                        <p>Người chơi đơn</p>
                                        <p>Coming Soon</p>
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => navigate("hilo")} className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                <div className="cartcol">
                                    <img src={"/static/media/box_images/hilo.png"} alt="HILO Xanh Chin, xanhchin.io" />
                                    <div className="cartContent">
                                        <h3>Cao thấp</h3>
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => navigate("tung-xu")} className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                <div className="cartcol">
                                    <img src={"/static/media/box_images/tungxu.png"} alt="Tung Xu Xanh Chin, xanhchin.io" />
                                    <div className="cartContent">
                                        <h3>Tung Xu</h3>
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => navigate("xuc-xac")} className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                <div className="cartcol">
                                    <img src={"/static/media/box_images/xucxac.png"} alt="Xuc Xac Kinh Dien Xanh Chin, xanhchin.io" />
                                    <div className="cartContent">
                                        <h3>Xúc xắc Kinh điển</h3>
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => navigate("mini-poker")} className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                <div className="cartcol">
                                    <img src={"/static/media/box_images/minipoker.png"} alt="Mini Poker Xanh Chin, xanhchin.io" />
                                    <div className="cartContent">
                                        <h3>MiniPoker</h3>
                                        <p>Coming Soon</p>
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => navigate("baccarat-multiplayer")} className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                <div className="cartcol">
                                    <img src={"/static/media/box_images/baccaratmulti.png"} alt="Baccarat Xanh Chin, xanhchin.io" />
                                    <div className="cartContent">
                                        <h3>Bài Baccarat </h3>
                                        <p>Nhiều người chơi</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="gameCartContainer">
                        <div className="gameCart row">
                            <div onClick={() => navigate("tai-xiu")} className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                <div className="cartcol">
                                    <img src={"/static/media/box_images/taixiu.png"} alt="Tai Xiu Xanh Chin, xanhchin.io" />
                                    <div className="cartContent"><h3>Tài Xỉu</h3></div>
                                </div>
                            </div>
                            <div onClick={() => navigate("bau-cua")} className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                <div className="cartcol">
                                    <img src={"/static/media/box_images/baucua.png"} alt="Cart Image" />
                                    <div className="cartContent"><h3>Bầu Cua</h3></div>
                                </div>
                            </div>
                            <div onClick={() => navigate("xoc-dia")} className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                <div className="cartcol">
                                    <img src={"/static/media/box_images/xocdia.png"} alt="Xoc Dia Xanh Chin, xanhchin.io" />
                                    <div className="cartContent"><h3>Xóc Đĩa</h3></div>
                                </div>
                            </div>
                            <div onClick={() => navigate("crash")} className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                <div className="cartcol">
                                    <img src={"/static/media/box_images/rocket.png"} alt="Rocket Xanh Chin, Phi Thuyen Xanh Chin, xanhchin.io" />
                                    <div className="cartContent"><h3>Phi Thuyền</h3></div>
                                </div>
                            </div>
                            <div onClick={() => navigate("")} className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                <div className="cartcol">
                                    <img src={"/static/media/box_images/baccarat.png"} alt="Baccarat Xanh Chin, xanhchin.io" />
                                    <div className="cartContent">
                                        <h3>Bài Baccarat</h3> 
                                        <p>Người chơi đơn Coming Soon</p>
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => navigate("hilo")} className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                <div className="cartcol">
                                    <img src={"/static/media/box_images/hilo.png"} alt="HILO Xanh Chin, xanhchin.io" />
                                    <div className="cartContent">
                                        <h3>Cao thấp</h3>
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => navigate("tung-xu")} className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                <div className="cartcol">
                                    <img src={"/static/media/box_images/tungxu.png"} alt="Tung Xu Xanh Chin, xanhchin.io" />
                                    <div className="cartContent">
                                        <h3>Tung Xu</h3>
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => navigate("xuc-xac")} className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                <div className="cartcol">
                                    <img src={"/static/media/box_images/xucxac.png"} alt="Xuc Xac Kinh Dien Xanh Chin, xanhchin.io" />
                                    <div className="cartContent">
                                        <h3>Xúc xắc Kinh điển</h3>
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => navigate("mini-poker")} className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                <div className="cartcol">
                                    <img src={"/static/media/box_images/minipoker.png"} alt="Mini Poker Xanh Chin, xanhchin.io" />
                                    <div className="cartContent">
                                        <h3>MiniPoker</h3>
                                    </div>
                                </div>
                            </div>
                            <div onClick={() => navigate("baccarat-multiplayer")} className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                <div className="cartcol">
                                    <img src={"/static/media/box_images/baccaratmulti.png"} alt="Baccarat Xanh Chin, xanhchin.io" />
                                    <div className="cartContent">
                                        <h3>Bài Baccarat </h3>
                                        <p>Nhiều người chơi</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
            </div>
        </>
     );
}

export default GameSlider;