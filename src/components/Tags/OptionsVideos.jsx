import React from 'react'
import { useCallback } from 'react';

import './Options.css'

const OptionsVideos = ({ text, onTextChange }) => {

    const handlewallpaper = useCallback(() => {
        onTextChange("wallpaper")
    }, [])
    const handlebackground = useCallback(() => {
        onTextChange('background')
    }, [])
    const handlenature = useCallback(() => {
        onTextChange('nature')
    }, [])
    const handlesky = useCallback(() => {
        onTextChange('sky')
    }, [])
    const handlewater = useCallback(() => {
        onTextChange('water')
    }, [])
    const handlemoney = useCallback(() => {
        onTextChange('money')
    }, [])
    const handlecat = useCallback(() => {
        onTextChange('cat')
    }, [])
    const handlefood = useCallback(() => {
        onTextChange('food')
    }, [])
    const handlecar = useCallback(() => {
        onTextChange('car')
    }, [])
    const handleflowers = useCallback(() => {
        onTextChange('flowers')
    }, [])
    const handledog = useCallback(() => {
        onTextChange('dog')
    }, [])
    const handlespring = useCallback(() => {
        onTextChange('spring')
    }, [])
    const handleiphonewallpapers = useCallback(() => {
        onTextChange('iphone+wallpapers')
    }, [])


    return (
        <>
            

            <div className=" flex justify-around flex-wrap m-6 " >
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
                    <button className="border rounded-lg px-3  mx-2 my-2" onClick={handlesky}>
                        sky
                    </button>
                    <button className="border rounded-lg px-3  mx-2 my-2" onClick={handlewater}>
                        water
                    </button>
                    <button className="border rounded-lg px-3  mx-2 my-2" onClick={handlemoney}>
                        money
                    </button>
                    <button className="border rounded-lg px-3  mx-2 my-2" onClick={handlecat}>
                        cat
                    </button>
                    <button className="border rounded-lg px-3  mx-2 my-2" onClick={handlefood}>
                        food
                    </button>
                    <button className="border rounded-lg px-3  mx-2 my-2" onClick={handlecar}>
                        car
                    </button>
                    <button className="border rounded-lg px-3  mx-2 my-2" onClick={handleflowers}>
                        flowers
                    </button>
                    <button className="border rounded-lg px-3  mx-2 my-2" onClick={handledog}>
                        dog
                    </button>
                    <button className="border rounded-lg px-3  mx-2 my-2" onClick={handlespring}>
                        spring
                    </button>
                    <button className="border rounded-lg px-3  mx-2 my-2" onClick={handleiphonewallpapers} >
                        iphone wallpapers
                    </button>


                </div>

                <div className="flex  justify-center ">
                    <div className=" sm:w-100 lg:w-auto my-auto" >
                        <select className="rounded-full focus:ring-black" data-te-select-init>
                            <option value="1">Editor's Choice</option>
                            <option value="2">Trending</option>
                            <option value="3">Popularity</option>

                        </select>
                    </div>
                </div>

            </div>





        </>
    )
}

export default OptionsVideos