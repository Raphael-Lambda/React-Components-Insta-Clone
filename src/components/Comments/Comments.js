import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments, postId, newComment} = props;

  return (
    <div>
      <div>
        {comments.map((comment)=>{
          return <Comment comment={comment}/>
          })
        }
      </div>
      <input onKeyDown={(event) => {newComment(event, postId)}}/>
    </div>
  );
};

export default Comments;
