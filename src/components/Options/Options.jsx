import React from 'react'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import BrushIcon from '@mui/icons-material/Brush';
import VideocamIcon from '@mui/icons-material/Videocam';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

import '../Tags/Options.css'
// import Image from '../image/Image';

const Options = ({onitemchange}) => {
  return (
      <div className="options container flex mx-auto justify-center items-center overflow-scroll  my-6 ">
          <div className="photos  sm:ml-12 lg:mx-8 lg:my-10 md:my-6 text-gray-600">

              <Link to="Photos"className=' font-medium  md:py-1 ml-1' ><CameraAltIcon /> Photos</Link>

          </div>
          {/* <div className="Illustrations  sm:mx-2 lg:mx-8 lg:my-10 md:my-6 text-gray-600">

              <a  href='/' className=' font-medium  md:py-1 ml-1' ><BrushIcon /> Illustrations</a>
          </div> */}
          <div className="Videos  sm:mx-2 lg:mx-8 lg:my-10 md:my-6 text-gray-600">

              <Link to='Videos'  className=' font-medium  md:py-1 ml-1' ><VideocamIcon /> Videos</Link>
          </div>
          {/* <div className="Music  sm:mx-2 lg:mx-8 lg:my-10 md:my-6 text-gray-600">

              <a href='/'  className=' font-medium  md:py-1 ml-1'><AudiotrackIcon /> Music</a>
          </div>
          <div className="Sound Effects  sm:mx-2 lg:mx-8 lg:my-10 md:my-6 text-gray-600">

              <a href='/'  className=' font-medium  md:py-1 ml-1'><GraphicEqIcon /> Sound Effects</a>
          </div>
          <div className="GIFs  sm:mx-2 lg:mx-8 lg:my-10 md:my-6 text-gray-600">

              <a href='/'  className=' font-medium  md:py-1 ml-1'><LocalFireDepartmentIcon /> GIFs</a>
          </div> */}
      </div>
  )
}

export default Options