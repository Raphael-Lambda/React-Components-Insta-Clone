import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts, newComment, query} = props;

  return (
    <div className='posts-container-wrapper'>
      { posts.map((post) =>{
          if(post.username.includes(query)){
          return(<Post post={ post } likePost={likePost} newComment={newComment}/>)
          }
          else{return}
      }) 
      }
    </div>
  );
};

export default Posts;
