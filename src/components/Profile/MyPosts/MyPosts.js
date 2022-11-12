import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

export default function MyPosts() {
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
        <Post message="Hello" likeCounter="10" />
        <Post message="How are you?" likeCounter="20" />
      </div>
    </div>
  );
}
