import React from "react";
import VideoList from '../containers/video-list';

const VideoListItem = ({movie,color='red'}) => {

    return(
        <li color={color}>{movie}</li>
    )
}

export default VideoListItem;