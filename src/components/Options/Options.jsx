import React from 'react'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import BrushIcon from '@mui/icons-material/Brush';
import VideocamIcon from '@mui/icons-material/Videocam';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { useCallback } from 'react';

import './Options.css'
import Image from '../image/Image';

const Options = ({ text, onTextChange }) => {
    
    const handlewallpaper = useCallback(() => {
        onTextChange("wallpaper")
    }, [])
    const handlebackground = useCallback(() => {
        onTextChange('background')
    }, [])
    const handlenature = useCallback(() => {
        onTextChange('nature')
    }, [])
    

    return (
        <>
            <div className="options container flex mx-auto justify-center items-center overflow-scroll  my-6 ">
                <div className="photos  sm:ml-12 lg:mx-8 lg:my-10 md:my-6 text-gray-600">
                    
                    <button className=' font-medium  md:py-1 ml-1'><CameraAltIcon />Photos</button>

                </div>
                <div className="Illustrations  sm:mx-2 lg:mx-8 lg:my-10 md:my-6 text-gray-600">
                    
                    <button className=' font-medium  md:py-1 ml-1' ><BrushIcon />Illustrations</button>
                </div>
                <div className="Videos  sm:mx-2 lg:mx-8 lg:my-10 md:my-6 text-gray-600">
                    
                    <button className=' font-medium  md:py-1 ml-1'><VideocamIcon />Videos</button>
                </div>
                <div className="Music  sm:mx-2 lg:mx-8 lg:my-10 md:my-6 text-gray-600">
                    
                    <button className=' font-medium  md:py-1 ml-1'><AudiotrackIcon />Music</button>
                </div>
                <div className="Sound Effects  sm:mx-2 lg:mx-8 lg:my-10 md:my-6 text-gray-600">
                    
                    <button className=' font-medium  md:py-1 ml-1'><GraphicEqIcon />Sound Effects</button>
                </div>
                <div className="GIFs  sm:mx-2 lg:mx-8 lg:my-10 md:my-6 text-gray-600">
                    
                    <button className=' font-medium  md:py-1 ml-1'><LocalFireDepartmentIcon />GIFs</button>
                </div>
            </div>

            <div className=" flex justify-center flex-wrap m-6 ">
                <div className="tags flex options overflow-scroll  ">
                    <button className="border rounded-lg px-3 py-2 mx-2 my-2" onClick={handlebackground}>
                        background
                    </button>
                    <button className="border rounded-lg px-3  mx-2 my-2" onClick={handlewallpaper}>
                        wallpaper
                    </button>
                    <button className="border rounded-lg px-3  mx-2 my-2" onClick={handlenature}>
                        nature
                    </button>
                    <button className="border rounded-lg px-3  mx-2 my-2">
                        sky
                    </button>
                    <button className="border rounded-lg px-3  mx-2 my-2">
                        water
                    </button>
                    <button className="border rounded-lg px-3  mx-2 my-2">
                        money
                    </button>
                    <button className="border rounded-lg px-3  mx-2 my-2">
                        cat
                    </button>
                    <button className="border rounded-lg px-3  mx-2 my-2">
                        food
                    </button>
                    <button className="border rounded-lg px-3  mx-2 my-2">
                        car
                    </button>
                    <button className="border rounded-lg px-3  mx-2 my-2">
                        flowers
                    </button>
                    <button className="border rounded-lg px-3  mx-2 my-2">
                        dog
                    </button>
                    <button className="border rounded-lg px-3  mx-2 my-2">
                        spring
                    </button>
                    <button className="border rounded-lg px-3  mx-2 my-2" >
                        iphone wallpapers
                    </button>


                </div>
                
                <div className="flex  justify-center ">
                    <div className="  mb-3 sm:w-100 lg:w-auto">
                        <select className="rounded-full focus:ring-black" data-te-select-init>
                            <option  value="1">Editor's Choice</option>
                            <option  value="2">Trending</option>
                            <option  value="3">Popularity</option>
                            
                        </select>
                    </div>
                </div>

                </div>

            



        </>
    )
}

export default Options