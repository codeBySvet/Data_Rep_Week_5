import React, { Component } from "react";

// Class for the home page of the navbar containing the content of the component
export class Create extends Component {


    constructor() {
        super();
        //Binding events to constructor. It is required to perform handleSubmit and OnChange
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeMovieName = this.onChangeMovieName.bind(this);
        this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
        this.onChangeMoviePoster = this.onChangeMoviePoster.bind(this);

        //Assigning local variables from the state
        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        };
    }

    handleSubmit(event) {
        //stop this method from being run when not called
        event.preventDefault();

        //setting the state
        this.setState({ value: event.target.value });

        console.log("Name "+this.state.Title+" Year: "+this.state.Year+" Poster: "+this.state.Poster)
    }

    onChangeMovieName(event) {
        //updat the state with the new name
        this.setState({
            Title: event.target.value
        })
    }
    onChangeMovieYear(event) {
        //updat the state with the new year
        this.setState({
            Year: event.target.value
        })
    }
    onChangeMoviePoster(event) {
        //updat the state with the new poster
        this.setState({
            Poster: event.target.value
        })
    }

    render() {
        return (
            <h3>
                Hello from create.
                
                    {/* When submitted, run this method */}
                    <form onSubmit={this.handleSubmit}>

                        {/* Creating form input controls */}
                        <div className="form-group">
                            <label>Add Movie Name: </label>
                            <input type="text"
                                className="form-control"
                                //value is equal to the state of the component
                                value={this.state.Title}
                                // Every time a change is submitted, it updates the state (allows text into the box)
                                onChange={this.onChangeMovieName}
                            />
                        </div>

                        <div className="form-group">
                            <label>Add Movie Year: </label>
                            <input type="text"
                                className="form-control"
                                //value is equal to the state of the component
                                value={this.state.Year}
                                // Every time a change is submitted, it updates the state (allows text into the box)
                                onChange={this.onChangeMovieYear}
                            />
                        </div>

                        <div className="form-group">
                            <label>Add Movie Poster: </label>
                            <input type="text"
                                className="form-control"
                                //value is equal to the state of the component
                                value={this.state.Poster}
                                // Every time a change is submitted, it updates the state (allows text into the box)
                                onChange={this.onChangeMoviePoster}
                            />
                        </div>
                        {/* Creating the button to submit movie data */}
                        <div className="form-group">
                            <input type="submit" value="Add Movie" className="btn btn-primary">

                            </input>
                        </div>
                    </form>
                
            </h3>
        );
    }
}
//Marking for export
export default Create;