import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
// import Videos from './Videos';
import '../image/Image.css'
import HoverVideoPlayer from 'react-hover-video-player'

const Video = (props) => {

    // console.log(props);
    const [videos, setimages] = useState([])
    const [count, setcount] = useState(0)

    const getMyData = async () => {
        try {
            // console.log(text);
            const res = await axios.get(`https://pixabay.com/api/videos/?key=34309567-2686cbea63c413815a6d0851e&&&q=${props.text}&per_page=50`);
            // console.log(res.data);

            // console.log(text);
            setimages(res.data.hits);
            setcount(res.data.totalHits);
            // console.log(videos);
        } catch (error) {
            console.log(error.message);
        }
    };

    // NOTE:  calling the function
    useEffect(() => {

        getMyData();
    }, [props.text, props.item]);


    return (
        <>

            {videos.length !== 0 &&

                <div className="container mx-auto">
                    {videos.map(video => (
                        <a href={video.videos.large.url} target='_blank' data-te-ripple-init data-te-ripple-color="light">
                            <div className="box" >
                                <HoverVideoPlayer
                                    videoSrc={video.videos.tiny.url}
                                    pausedOverlay={
                                        <img
                                            src={`https://i.vimeocdn.com/video/${video.picture_id}_960x540.jpg`}
                                            alt=""
                                            style={{
                                                // Make the image expand to cover the video's dimensions
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                            }}
                                        />
                                    }
                                    loadingOverlay={
                                        <div className="loading-overlay">
                                            <div className="loading-spinner" />
                                        </div>
                                    }
                                />
                            </div>
                        </a>
                    ))}
                </div >}
        </>
    )
}

export default Video