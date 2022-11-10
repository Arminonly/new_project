import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

export default function Profile() {
  return (
    <div className={s.content}>
      <img
        src="https://kartinkin.net/uploads/posts/2022-02/1645867502_7-kartinkin-net-p-turizm-kartinki-dlya-prezentatsii-7.jpg"
        alt=""
      />
      <div>ava+content</div>
      <MyPosts/>
    </div>
  );
}
