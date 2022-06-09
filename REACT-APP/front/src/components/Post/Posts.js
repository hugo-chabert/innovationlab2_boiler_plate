import React from 'react';
import Grid from '@mui/material/Grid';
import CardPost from '../CardPost';
import postApi from '../../services/postApi'

class Posts extends React.Component {
  state = {
    posts: [],
    error: null,
  };

  componentDidMount = async () => {
    try {
      const data = await postApi.getPosts();
      console.log(data)
      this.setState({ posts: data });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {

    if (this.state.error) {
      return <div>An error occured: {this.state.error.message}</div>;
    }

    return (


      <div className="App">

      <h1> Last posts</h1>
        <Grid container spacing={3}>
        {this.state.posts.map(post => (


        <CardPost post={post} key={post.id} />

      ))}
        </Grid >

      </div>

    );
  }
}

export default Posts;
