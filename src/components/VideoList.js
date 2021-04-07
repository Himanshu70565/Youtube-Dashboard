import React from "react";

import VideoItem from "./VideoItem";

class VideoList extends React.Component{

    renderVideoList(videos){
        const results=videos.map((video)=>{
            return (<VideoItem key={video.id.videoId} onVideoSelect={this.props.onVideoSelect} video={video}/>);
        })
        return results;
    }

    render(){
        
        const listOfVideos=this.renderVideoList(this.props.videos);

        return (
            <div className="ui relaxed divided list">
                {listOfVideos}
            </div>
        );    
    };
}

export default VideoList;