import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import postApi from '../../services/postApi'

class Post extends React.Component {



  state = {
    singlepost: null,
    error: null,
  };

  componentDidMount = async () => {
    try {
      const data = await postApi.getSinglePost(window.location.pathname);
      this.setState({ singlepost: data });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { error, singlepost } = this.state;

    // Print errors if any
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }

    return (

      <div className="App">
        <ul>
          {this.state.singlepost &&
            <li key={this.state.singlepost.id}>{this.state.singlepost.attributes.title}</li>
          }
        </ul>
      </div>
    );
  }
}

export default Post;
