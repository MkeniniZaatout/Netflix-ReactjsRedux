import React, { /*FunctionComponent,*/ useState, useEffect, Component } from "react";
import TextInput from 'react-materialize/lib/TextInput'

class SearchBar extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            searchText :'', 
            placeHolder :'Saisir le nom du Film/Série'
        };
    }

    render() {
        //return (<TextInput onChange={(e) => {this.handleChange(e)}} placeHolder={this.state.placeHolder}></TextInput> )
        return (<input placeholder={this.state.placeHolder} onChange={(e) => {this.handleChange(e)}} type='text'/>)
    }

    handleChange = (e) => {
        this.state.searchText = e.target.value;
        console.log(this.state.searchText);
    }
}


export default SearchBar;