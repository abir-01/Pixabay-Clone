import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import Navbar from '../Navbar/Navbar';
import { useState } from 'react';
import { useCallback } from 'react';
import { Navigate} from 'react-router'
import { NavLink } from 'react-router-dom'



const Header = ({ text, onTextChange, item,onitemchange}) => {

  // const history = createHashHistory()
  // const router = useRouter();

  // function handleChange(e) {
  //   router.push(`/${e.target.value}`)
  // }


  const [text1, settext1] = useState('')

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    onTextChange(text1)
  })

  const handleInputChange = useCallback((e) => {
    onTextChange(e.target.value)
    settext1(e.target.value)
  }, [onTextChange])




  return (
    <>
      <div className="head">
        <div className=" mx-auto flex flex-col justify-center ">
          <Navbar />
          <h1 className='text-5xl font-bold mx-auto my-6 text-white px-4'>Stunning free images & royalty free stock</h1>
          <p className='mx-auto text-xl text-white px-4'>Over 2.7 million+ high quality stock images, videos and music shared by our talented community.</p>


          <div className=" flex flex-col justify-center mb-20">
            <div className="relative sm:py-6 w-full sm:max-w-2xl sm:mx-auto">
              <div className="overflow-hidden z-0 rounded-full relative sm:p-2 md:p-3">
                <form className="relative flex z-50 bg-white rounded-full"
                  onSubmit={handleSubmit}
                >
                  <div className="search  sm:px-4 md:px-6 py-4">
                    <SearchIcon />
                  </div>
                  <input type="text" onChange={handleInputChange}

                    placeholder="Enter your search here" className=" focus:ring-0 outline-none border-none flex-1  py-4 px-0 text-gray-700 " />
                  <label htmlFor="underline_select" className="sr-only">Underline select</label>
                  <select id="underline_select" defaultValue={`Pixabay-Clone/#/Photos`} className="block py-2.5 px-0  text-lg text-gray-500 bg-transparent border-0  border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                    onChange={(e) => {
                      // console.log(e.target.value),
                      window.location.href=`/${e.target.value}`
                    }}
                  >
                    <option value={`Pixabay-Clone/#/Photos`}  > All Images</option>
                    <option value={`Pixabay-Clone/#/Videos`} > All Videos</option>
                    {/* <option value="Music">Music</option> */}
                    {/* <Dropdown title="" >


                      <Dropdown.Item as="a" href=
                        "/">
                        All Images
                      </Dropdown.Item>

                      <Dropdown.Item as="a" href=
                        "Videos">
                        All Videos
                      </Dropdown.Item>
                    </Dropdown> */}
                  </select>


                </form>
                <div className="glow glow-1 z-10 bg-pink-400 absolute" />
                <div className="glow glow-2 z-20 bg-purple-400 absolute" />
                <div className="glow glow-3 z-30 bg-yellow-400 absolute" />
                <div className="glow glow-4 z-40 bg-blue-400 absolute" />
              </div>
            </div>
          </div>

          <div className='flex justify-between mb-6'>
            <div className='text-gray-300 mx-4'>Read more about the <a target='_blank' href='https://pixabay.com/id/service/license/'><u>Pixabay License</u></a></div>
            <div className='text-gray-300 mx-4'>Free image by <a target='_blank' ><u>Wal_172619</u></a></div>


          </div>









        </div>

      </div>
    </>
  )
}

export default Header;