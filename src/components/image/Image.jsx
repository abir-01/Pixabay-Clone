import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import Header from '../header/Header';
import Options from '../Options/Options';
import Images from '../Images';

const Image = (props) => {

    // console.log(props);
    const [images, setimages] = useState([])
    const [count, setcount] = useState(0)
    const [text, settext] = useState('nature')

    

    const getMyData = async () => {
        try {
            // console.log(text);
            const res = await axios.get(`https://pixabay.com/api/?key=34309567-2686cbea63c413815a6d0851e&&image_type=photo&q=${text}&per_page=100`);
            // console.log(res.data);

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
    }, [text]);
    
    
  return (
      <>
          <Header text={text} onTextChange={settext} />
          <Options text={text} onTextChange={settext} />
          
          {images.length !== 0 && <div className="flex flex-row flex-wrap justify-center align-center container py-8 my-10 mx-auto">
              {images.map(image => (
                    // console.log(image),
                  <Images im={image} key={image.id} />
              ))}
          </div>}
      </>
  )
}

export default Image