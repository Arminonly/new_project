import React from 'react';
import s from './Post.module.css';

export default function Post(props) {
  return (
    <div className={s.item}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbiMjUoOxJCAMB9poSO2wLg34m7OxmyaT-A&usqp=CAU"
        alt=""
      />
      {props.message}
      <div>
        <span>like</span> <span>You have: {props.likeCounter} likes</span>
      </div>
    </div>
  );
}
