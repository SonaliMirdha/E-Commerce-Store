import React, { useEffect } from 'react'
import {getData } from '../context/DataContext'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import Category from './Category';

const Carousel = () => {
    const { data, fetchAllProducts } = getData()
    console.log(data);

    useEffect(() => {
        fetchAllProducts()
    }, [])

    const SamplePrevArrow = (props) => {
        const {className, style, onClick} = props;
        return (
            <div onClick={onClick} className={`arrow ${className}`} style={{zIndex:3}}>
                <AiOutlineArrowLeft className='arrows' style={{...style, display: "block", borderRadius:"50px", background:"#FFE8EF" , color:"black" , position:"absolute", padding:"10px", left:"50px"}} />
            </div>
        )
    }
    const SampleNextArrow = (props) => {
        const {className, style, onClick} = props;
        return (
            <div onClick={onClick} className={`arrow ${className}`}>
                <AiOutlineArrowRight className='arrows' style={{...style, display: "block", borderRadius:"50px", background:"#FFE8EF" , color:"black" , position:"absolute", padding:"10px", right:"50px"}} />
            </div>
        )
    }

    var settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed:2000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover:false,
        nextArrow: <SampleNextArrow to="next" />,
        prevArrow: <SamplePrevArrow to="prev" />,
    };

    return (
        <div>
            <Slider {...settings}>
                {
                    data?.slice(0,7)?.map((item, index) => {
                        return <div key={index} className='bg-gradient-to-r from-[#f0e6ed] via-[#fde8e2] to-[#f7efcf] -z-10'>
                            <div className='flex flex-col md:flex-row gap-10 justify-center h-[600px] my-20 md:my-0 items-center px-4'>
                                <div className='md:space-y-6 space-y-3'>
                                    <h3 className='text-black-800 font-semibold font-sans text-sm'>Powering Your World with the Best in Electronics</h3>
                                    <h1 className='md:text-4xl text-xl font-bold uppercase line-clamp-2 md:line-clamp-3 md:w-[500px] text-gray-600'>{item.title}</h1>
                                    <p className='md:w-[500px] line-clamp-3 text-gray-500 pr-7'>{item.description}</p>
                                    <button className='bg-gradient-to-r from-[#dad9d9] via-[#d3bbb4] to-[#cec4a6] px-3 py-2 rounded-md cursor-pointer mt-2'>Shop Now</button>
                                </div>
                                <div>
                                    <img src={item.thumbnail} alt={item.title} className='rounded-full w-[450px] hover:scale-105 transition-all shadow-2xl shadow-red-250'/>
                                </div>
                            </div>
                        </div>
                    })
                }              
            </Slider>
            <Category/>
        </div>
    )
}

export default Carousel
