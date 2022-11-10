import React from 'react';
import s from './Post.module.css';

export default function Post() {
  return (
    <div className={s.item}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbiMjUoOxJCAMB9poSO2wLg34m7OxmyaT-A&usqp=CAU"
        alt=""
      />
      Post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
}
