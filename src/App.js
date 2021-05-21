/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/

// Import the state hook
import React, { useState } from 'react';
// Import the Posts (plural!) and SearchBar components, since they are used inside App component
import Posts from "./components/Posts/Posts"
import SearchBar from "./components/SearchBar/SearchBar"

// Import the dummyData
import './App.css';

import dummyData from './dummy-data'
import { text } from '@fortawesome/fontawesome-svg-core';

const App = () => {
  // Create a state called `posts` to hold the array of post objects, **initializing to dummyData**.
  const [ posts, setPosts] = useState(dummyData)
  // This state is the source of truth for the data inside the app. You won't be needing dummyData anymore.
  // To make the search bar work (which is stretch) we'd need another state to hold the search term.
  const [ query, setQuery ] = useState('')
  const [ postliked, setPostLiked ] = useState([])
  const likePost = postId => {
    const updatedPost = posts.map((item) => {
        if(item.id === postId && !postliked.includes(item.id)){
          postliked.push(item.id)
          setPostLiked(postliked)
          return item = {...item, likes: item.likes + 1}
        } else {
          return item
        }
    })
    setPosts(updatedPost)
  };

  function newComment(event, postID){
    if(event.keyCode === 13){
      const { value } = event.target
      const newPosts = posts.map((item) => {
        if(item.id ===  postID){
          item.comments.push({
            id: "XX",
            username: "Unknown user",
            text: value,
          })
        }
        return item
      })
      console.log(newPosts)
      setPosts(newPosts)
    }
  }

  return (
    <div className='App'>
      {/* Add SearchBar and Posts here to render them */}
      <SearchBar />
      <Posts posts={posts} likePost={likePost} newComment={newComment}/>
      {/* Check the implementation of each component, to see what props they require, if any! */}
    </div>
  );
};

export default App;
