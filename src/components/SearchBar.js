import React from "react";

class SearchBar extends React.Component{

    state={
        text:""
    }

    handleFormSubmit=(event)=>{
        event.preventDefault();
        this.props.onSubmit(this.state.text);
    }

    render(){
        return (
            <form className="ui form" onSubmit={this.handleFormSubmit}>
                <div className="field">
                    <label>Enter Search Text</label>
                    <input type="text" name="search-video" value={this.state.text} onChange={(event)=>{this.setState({text:event.target.value})}} placeholder="Search Video" />
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        );
    }
}

export default SearchBar;