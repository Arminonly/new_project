import React from 'react';
import s from './ProfileInfo.module.css';

export default function ProfileInfo() {
  return (
    <div>
      <div> 
        <img
          src="https://kartinkin.net/uploads/posts/2022-02/1645867502_7-kartinkin-net-p-turizm-kartinki-dlya-prezentatsii-7.jpg"
          alt=""
        />
        <div className={s.descriptionBlock}>ava + description</div>
      </div>
    </div>
  );
}
