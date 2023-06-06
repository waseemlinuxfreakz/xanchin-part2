import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";

import ArrowRight from '../assets/img/icons/arrow-right.svg';
import ArrowLeft from '../assets/img/icons/arrow-left.svg';
import UserIcon from '../assets/img/icons/user_gray.svg';
import AffilateBlue from '../assets/img/icons/affilate-blue.svg';


function AffilateTable() {

    return ( 
        <>
            
                
            <div className="swiper_wraper">

                <Swiper
                    spaceBetween={5}
                    slidesPerView={1}
                    navigation={{
                        prevEl: '.prev',
                        nextEl: '.next',
                    }}
                    modules={[Pagination, Navigation]}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="affilateSliderSwip"
                >
            
                    <SwiperSlide>
                        <ul className="affilateList">
                            <li>
                                <a href='#' className="affilate_list_name">
                                    <img src={UserIcon} alt="UserIcon" />
                                    <p>1.Jhone carter</p>
                                </a>
                                <span className='affilate_number'>
                                    <img src={AffilateBlue} alt="UserIcon" />
                                    1252.23365
                                </span>
                            </li>
                            <li>
                                <a href='#' className="affilate_list_name">
                                    <img src={UserIcon} alt="UserIcon" />
                                    <p>1.Jhone carter</p>
                                </a>
                                <span className='affilate_number'>
                                    <img src={AffilateBlue} alt="UserIcon" />
                                    1252.23365
                                </span>
                            </li>
                            <li>
                                <a href='#' className="affilate_list_name">
                                    <img src={UserIcon} alt="UserIcon" />
                                    <p>1.Jhone carter</p>
                                </a>
                                <span className='affilate_number'>
                                    <img src={AffilateBlue} alt="UserIcon" />
                                    1252.23365
                                </span>
                            </li>
                            <li>
                                <a href='#' className="affilate_list_name">
                                    <img src={UserIcon} alt="UserIcon" />
                                    <p>1.Jhone carter</p>
                                </a>
                                <span className='affilate_number'>
                                    <img src={AffilateBlue} alt="UserIcon" />
                                    1252.23365
                                </span>
                            </li>
                            <li>
                                <a href='#' className="affilate_list_name">
                                    <img src={UserIcon} alt="UserIcon" />
                                    <p>1.Jhone carter</p>
                                </a>
                                <span className='affilate_number'>
                                    <img src={AffilateBlue} alt="UserIcon" />
                                    1252.23365
                                </span>
                            </li>
                            <li>
                                <a href='#' className="affilate_list_name">
                                    <img src={UserIcon} alt="UserIcon" />
                                    <p>1.Jhone carter</p>
                                </a>
                                <span className='affilate_number'>
                                    <img src={AffilateBlue} alt="UserIcon" />
                                    1252.23365
                                </span>
                            </li>
                            <li>
                                <a href='#' className="affilate_list_name">
                                    <img src={UserIcon} alt="UserIcon" />
                                    <p>1.Jhone carter</p>
                                </a>
                                <span className='affilate_number'>
                                    <img src={AffilateBlue} alt="UserIcon" />
                                    1252.23365
                                </span>
                            </li>
                            <li>
                                <a href='#' className="affilate_list_name">
                                    <img src={UserIcon} alt="UserIcon" />
                                    <p>1.Jhone carter</p>
                                </a>
                                <span className='affilate_number'>
                                    <img src={AffilateBlue} alt="UserIcon" />
                                    1252.23365
                                </span>
                            </li>
                            <li>
                                <a href='#' className="affilate_list_name">
                                    <img src={UserIcon} alt="UserIcon" />
                                    <p>1.Jhone carter</p>
                                </a>
                                <span className='affilate_number'>
                                    <img src={AffilateBlue} alt="UserIcon" />
                                    1252.23365
                                </span>
                            </li>
                            <li>
                                <a href='#' className="affilate_list_name">
                                    <img src={UserIcon} alt="UserIcon" />
                                    <p>1.Jhone carter</p>
                                </a>
                                <span className='affilate_number'>
                                    <img src={AffilateBlue} alt="UserIcon" />
                                    1252.23365
                                </span>
                            </li>
                        </ul>
                    </SwiperSlide>

                    <SwiperSlide>
                        <ul className="affilateList">
                            <li>
                                <a href='#' className="affilate_list_name">
                                    <img src={UserIcon} alt="UserIcon" />
                                    <p>1.Jhone carter</p>
                                </a>
                                <span className='affilate_number'>
                                    <img src={AffilateBlue} alt="UserIcon" />
                                    1252.23365
                                </span>
                            </li>
                            <li>
                                <a href='#' className="affilate_list_name">
                                    <img src={UserIcon} alt="UserIcon" />
                                    <p>1.Jhone carter</p>
                                </a>
                                <span className='affilate_number'>
                                    <img src={AffilateBlue} alt="UserIcon" />
                                    1252.23365
                                </span>
                            </li>
                            <li>
                                <a href='#' className="affilate_list_name">
                                    <img src={UserIcon} alt="UserIcon" />
                                    <p>1.Jhone carter</p>
                                </a>
                                <span className='affilate_number'>
                                    <img src={AffilateBlue} alt="UserIcon" />
                                    1252.23365
                                </span>
                            </li>
                            <li>
                                <a href='#' className="affilate_list_name">
                                    <img src={UserIcon} alt="UserIcon" />
                                    <p>1.Jhone carter</p>
                                </a>
                                <span className='affilate_number'>
                                    <img src={AffilateBlue} alt="UserIcon" />
                                    1252.23365
                                </span>
                            </li>
                            <li>
                                <a href='#' className="affilate_list_name">
                                    <img src={UserIcon} alt="UserIcon" />
                                    <p>1.Jhone carter</p>
                                </a>
                                <span className='affilate_number'>
                                    <img src={AffilateBlue} alt="UserIcon" />
                                    1252.23365
                                </span>
                            </li>
                            <li>
                                <a href='#' className="affilate_list_name">
                                    <img src={UserIcon} alt="UserIcon" />
                                    <p>1.Jhone carter</p>
                                </a>
                                <span className='affilate_number'>
                                    <img src={AffilateBlue} alt="UserIcon" />
                                    1252.23365
                                </span>
                            </li>
                            <li>
                                <a href='#' className="affilate_list_name">
                                    <img src={UserIcon} alt="UserIcon" />
                                    <p>1.Jhone carter</p>
                                </a>
                                <span className='affilate_number'>
                                    <img src={AffilateBlue} alt="UserIcon" />
                                    1252.23365
                                </span>
                            </li>
                            <li>
                                <a href='#' className="affilate_list_name">
                                    <img src={UserIcon} alt="UserIcon" />
                                    <p>1.Jhone carter</p>
                                </a>
                                <span className='affilate_number'>
                                    <img src={AffilateBlue} alt="UserIcon" />
                                    1252.23365
                                </span>
                            </li>
                            <li>
                                <a href='#' className="affilate_list_name">
                                    <img src={UserIcon} alt="UserIcon" />
                                    <p>1.Jhone carter</p>
                                </a>
                                <span className='affilate_number'>
                                    <img src={AffilateBlue} alt="UserIcon" />
                                    1252.23365
                                </span>
                            </li>
                            <li>
                                <a href='#' className="affilate_list_name">
                                    <img src={UserIcon} alt="UserIcon" />
                                    <p>1.Jhone carter</p>
                                </a>
                                <span className='affilate_number'>
                                    <img src={AffilateBlue} alt="UserIcon" />
                                    1252.23365
                                </span>
                            </li>
                        </ul>
                    </SwiperSlide>

                    <SwiperSlide>
                        <ul className="affilateList">
                            <li>
                                <a href='#' className="affilate_list_name">
                                    <img src={UserIcon} alt="UserIcon" />
                                    <p>1.Jhone carter</p>
                                </a>
                                <span className='affilate_number'>
                                    <img src={AffilateBlue} alt="UserIcon" />
                                    1252.23365
                                </span>
                            </li>
                            <li>
                                <a href='#' className="affilate_list_name">
                                    <img src={UserIcon} alt="UserIcon" />
                                    <p>1.Jhone carter</p>
                                </a>
                                <span className='affilate_number'>
                                    <img src={AffilateBlue} alt="UserIcon" />
                                    1252.23365
                                </span>
                            </li>
                            <li>
                                <a href='#' className="affilate_list_name">
                                    <img src={UserIcon} alt="UserIcon" />
                                    <p>1.Jhone carter</p>
                                </a>
                                <span className='affilate_number'>
                                    <img src={AffilateBlue} alt="UserIcon" />
                                    1252.23365
                                </span>
                            </li>
                            <li>
                                <a href='#' className="affilate_list_name">
                                    <img src={UserIcon} alt="UserIcon" />
                                    <p>1.Jhone carter</p>
                                </a>
                                <span className='affilate_number'>
                                    <img src={AffilateBlue} alt="UserIcon" />
                                    1252.23365
                                </span>
                            </li>
                            <li>
                                <a href='#' className="affilate_list_name">
                                    <img src={UserIcon} alt="UserIcon" />
                                    <p>1.Jhone carter</p>
                                </a>
                                <span className='affilate_number'>
                                    <img src={AffilateBlue} alt="UserIcon" />
                                    1252.23365
                                </span>
                            </li>
                            <li>
                                <a href='#' className="affilate_list_name">
                                    <img src={UserIcon} alt="UserIcon" />
                                    <p>1.Jhone carter</p>
                                </a>
                                <span className='affilate_number'>
                                    <img src={AffilateBlue} alt="UserIcon" />
                                    1252.23365
                                </span>
                            </li>
                            <li>
                                <a href='#' className="affilate_list_name">
                                    <img src={UserIcon} alt="UserIcon" />
                                    <p>1.Jhone carter</p>
                                </a>
                                <span className='affilate_number'>
                                    <img src={AffilateBlue} alt="UserIcon" />
                                    1252.23365
                                </span>
                            </li>
                            <li>
                                <a href='#' className="affilate_list_name">
                                    <img src={UserIcon} alt="UserIcon" />
                                    <p>1.Jhone carter</p>
                                </a>
                                <span className='affilate_number'>
                                    <img src={AffilateBlue} alt="UserIcon" />
                                    1252.23365
                                </span>
                            </li>
                            <li>
                                <a href='#' className="affilate_list_name">
                                    <img src={UserIcon} alt="UserIcon" />
                                    <p>1.Jhone carter</p>
                                </a>
                                <span className='affilate_number'>
                                    <img src={AffilateBlue} alt="UserIcon" />
                                    1252.23365
                                </span>
                            </li>
                            <li>
                                <a href='#' className="affilate_list_name">
                                    <img src={UserIcon} alt="UserIcon" />
                                    <p>1.Jhone carter</p>
                                </a>
                                <span className='affilate_number'>
                                    <img src={AffilateBlue} alt="UserIcon" />
                                    1252.23365
                                </span>
                            </li>
                        </ul>
                    </SwiperSlide>

                </Swiper>
            </div>
            
            <div className="swiper_arrow affilate_arrow">
                <div className="prev"><img src={ArrowLeft} alt="ArrowLeft" /></div>
                <div className="next"><img src={ArrowRight} alt="ArrowRight" /></div>
            </div>
            

        </>
     );
}

export default AffilateTable;