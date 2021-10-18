import React, { Component } from "react";
import MovieItem from "./movieitem";

 class Movies extends Component{

    render() {
       
            return this.props.movies.map((movie)=>{
               return <MovieItem movie={movie} key={movie.imdbID}></MovieItem>

            })
        
    }
}
//Marking for export
export default Movies;