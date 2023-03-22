import React from 'react';
import HoverVideoPlayer from 'react-hover-video-player';

const Videos = (props) => {
    // console.log(props.im);
    return (

        <div className="flex justify-center p-2 mx-auto">
            <div
                className="block max-w-md rounded-lg bg-white  dark:bg-neutral-700 video-wrapper">
                <a href={props.vi.videos.large.url} target='_blank' data-te-ripple-init data-te-ripple-color="light">
                    {/* <video
                        className="rounded-lg"
                        src={props.vi.videos.small.url}
                        onMouseOver={event => event.target.play()}
                        onMouseOut={event => event.target.pause()}
                        alt=""
                        poster={`https://i.vimeocdn.com/video/${props.vi.picture_id}_960x540.jpg`}
                        muted="muted"
                    /> */}

                    <HoverVideoPlayer
                        videoSrc={props.vi.videos.small.url}
                        pausedOverlay={
                            <img
                                src={`https://i.vimeocdn.com/video/${props.vi.picture_id}_960x540.jpg`}
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

                </a>

            </div>
        </div>
    )
}

export default Videos