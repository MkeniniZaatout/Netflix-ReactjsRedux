import React, { Component }  from 'react';
import SearchBar from '../components/searchBar';
import VideoList from './video-list';
import axios from 'axios';

const API_KEY = 'd4d622a83a99e8faf8f45b6f5eb7bffc';
const API_END_POINT='https://api.themoviedb.org/3/'
const POPULAR_MOVIES_URL='discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {listFilm: new Array()};
    }
    
    componentWillMount() {
        axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&api_key=${API_KEY}`).then(function(res) {
            if(res.data.hasOwnProperty('results')) {
                this.setState({listFilm: res.data.results});
                console.log(this.state.listFilm);
            }  
        }.bind(this));
        //axios.get(`https://api.themoviedb.org/3/movie/550?api_key=d4d622a83a99e8faf8f45b6f5eb7bffc`);
    }

    render() {
        return (
        <div>
            <SearchBar/>
            <VideoList movies={this.state.listFilm}/>
        </div>)
    }
    
}

export default App;