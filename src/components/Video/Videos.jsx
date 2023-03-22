import React from 'react'

const Videos = (props) => {
    // console.log(props.im);
    return (

        <div className="flex justify-center p-2 mx-auto">
            <div
                className="block max-w-md rounded-lg bg-white  dark:bg-neutral-700 video-wrapper">
                <a href={props.vi.videos.large.url} target='_blank' data-te-ripple-init data-te-ripple-color="light">
                    <video
                        className="rounded-lg"
                        src={props.vi.videos.small.url}
                        onMouseOver={event => event.target.play()}
                        onMouseOut={event => event.target.pause()}
                        alt=""
                        poster={`https://i.vimeocdn.com/video/${props.vi.picture_id}_960x540.jpg`}
                        muted="muted"
                    />

                </a>

            </div>
        </div>
    )
}

export default Videos