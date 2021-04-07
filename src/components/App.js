import React from "react";

import youtube from "../apis/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";


class App extends React.Component{
    
    state={ videos: [] ,selectedVideo:null};

    componentDidMount(){
        this.onFormSubmit('buildings');
    }

    onFormSubmit=async (term)=>{
        const response=await youtube.get('search',{
            params:{
                q:term
            }
        });
        this.setState({
            videos:response.data.items,
            selectedVideo:response.data.items[0]
        });
    }

    onVideoSelect=(video)=>{
        console.log('Video is Selected,now we have to show videoDetail Componenet');
        this.setState({selectedVideo:video});
    }

    render(){
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onFormSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            {this.state.selectedVideo===null?"Search For a Video ...":<VideoDetail video={this.state.selectedVideo}/>}    
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;