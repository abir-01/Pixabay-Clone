import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Videos from './Videos';

const Video = (props) => {

    // console.log(props);
    const [videos, setimages] = useState([])

    const getMyData = async () => {
        try {
            // console.log(text);
            const res = await axios.get(`https://pixabay.com/api/videos/?key=34309567-2686cbea63c413815a6d0851e&&&q=${props.text}&per_page=100`);
            console.log(res.data);

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
    }, [props.text]);


    return (
        <>

            {videos.length !== 0 && <div className="flex flex-row flex-wrap justify-center align-center container py-8 my-10 mx-auto">
                {videos.map(video => (
                    // console.log(image),
                    <Videos vi={video} key={video.id} />
                ))}
            </div>}
        </>
    )
}

export default Video