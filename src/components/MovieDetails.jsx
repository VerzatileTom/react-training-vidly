import React, { Component } from "react";

class MovieDetails extends Component {
  handleSave = () => {
    this.props.history.push("/movies");
  };

  render() {
    return (
      <div>
        <h1>Movie Details: {this.props.match.params.id}</h1>
        <button onClick={this.handleSave} className="btn btn-sm btn-primary">
          Save
        </button>
      </div>
    );
  }
}

export default MovieDetails;
