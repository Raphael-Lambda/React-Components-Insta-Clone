import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts, newComment} = props;

  return (
    <div className='posts-container-wrapper'>
      { posts.map((post) =>{
          return(<Post post={ post } likePost={likePost} newComment={newComment}/>)
      }) 
      }
    </div>
  );
};

export default Posts;
