import VideoListItem from "../components/videoListItem";
import React from "react";


const VideoList = ({movies = new Array({original_title: 'film 1'}, {original_title: 'film 2'})}) => {
    
    const Movies = movies;
    
    return(
        <div>
            <ul>
                {
                    movies.map((movie) => {
                        return <VideoListItem key={movie.original_title} movie={movie.original_title}></VideoListItem> 
                    })
                }
            </ul>
        </div>
    )
}

export default VideoList;