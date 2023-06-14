import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../header/Header';
import Options from '../Tags/OptionsPhotos';
import Images from '../Images';
import './Image.css'

const Image = (props) => {

    // console.log(props);
    const [images, setimages] = useState([])
    const [count, setcount] = useState(0)
    const [text, settext] = useState('nature')



    const getMyData = async () => {
        try {
            console.log(text);
            const res = await axios.get(`https://pixabay.com/api/?key=34309567-2686cbea63c413815a6d0851e&&image_type=photo&q=${props.text}&per_page=50`);
            console.log(res.data);

            // console.log(text);
            setimages(res.data.hits);
            setcount(res.data.totalHits);
            // console.log(images);
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
            {images.length !== 0 &&

                <div className="container mx-auto">

                    {images.map(image => (
                        <a href={image.largeImageURL} target='_blank' data-te-ripple-init data-te-ripple-color="light">
                            <div className="box">
                                <img src={image.webformatURL} alt="" />
                            </div>
                        </a>
                    ))}

                </div>}
        </>
    )
}

export default Image