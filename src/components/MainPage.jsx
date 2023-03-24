import { React, useState } from 'react'
import Header from './header/Header'
import Options from './Options/Options'
import OptionsPhotos from './Tags/OptionsPhotos'
import OptionsVideos from './Tags/OptionsVideos'
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom"
import Image from './image/Image'
import Video from './Video/Video'

const MainPage = () => {


    const [text, settext] = useState('nature')
    // const [item, setitem] = useState('photos')



    return (
        <>
            <Router>
                <Header text={text} onTextChange={settext} />
                <Options />
                <Routes>

                    <Route exact path='/' element={
                        <>
                            <OptionsPhotos text={text} onTextChange={settext} />
                            <Image text={text} />
                        </>
                    }></Route>

                    <Route exact path='/Photos' element={
                        <>
                            <OptionsPhotos text={text} onTextChange={settext} />
                            <Image text={ text} />
                        </>
                    }></Route>

                    <Route exact path='/Videos' element={
                        <>
                            <OptionsVideos text={text} onTextChange={settext} />
                            {console.log(text)}
                            <Video text={ text} />
                        </>
                    }></Route>

                </Routes>
            </Router>


            {/* {item==='video'&&<OptionsVideo text={text} onTextChange={settext} /> }
            {item==='illustrations'&&<OptionsIllustrations text={text} onTextChange={settext} /> }
            {item==='music'&&<OptionsMusic text={text} onTextChange={settext} /> }
            {item==='sound'&&<OptionsSound text={text} onTextChange={settext} /> } */}
        </>
    )
}

export default MainPage