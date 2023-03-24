import React from 'react'

const Images = (props) => {
    // console.log(props.im);
    return (
      
      <div className="flex justify-center p-2 mx-auto">
          <div
              className="block max-w-md rounded-lg bg-white  dark:bg-neutral-700">
              <a href={props.im.largeImageURL} target='_blank' data-te-ripple-init data-te-ripple-color="light">
                  <img
                      className="rounded-lg"
                      src={props.im.webformatURL}
                      alt="" />
              </a>
              
          </div>
      </div>
  )
}

export default Images