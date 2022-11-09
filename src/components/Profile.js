import React from 'react';
import s from './Profile.module.css';

export default function Profile() {
  return (
    <div className={s.content}>
      <img
        src="https://kartinkin.net/uploads/posts/2022-02/1645867502_7-kartinkin-net-p-turizm-kartinki-dlya-prezentatsii-7.jpg"
        alt=""
      />
      <div>ava+content</div>
      <div>
        My posts
        <div>New post</div>
        <div className={s.posts}>
          <div className={s.item}>Post 1</div>
          <div className={s.item}>Post 2</div>
        </div>
      </div>
    </div>
  );
}
