import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

export default function MyPosts(props) {

 

  let postElements = props.posts.map(p =>
    <Post message={p.message} likeCounter={p.likeCounter} />
  );
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea name="" id="" cols="20" rows="3" />
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  );
}
