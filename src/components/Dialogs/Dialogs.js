import React from 'react';
import s from './Dialogs.module.css';

export default function Dialogs(props) {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>Sergey</div>
        <div className={s.dialog}>Alesya</div>
        <div className={s.dialog}>Milana</div>
        <div className={s.dialog}>Timosha</div>
        <div className={s.dialog}>Arina</div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hello</div>
        <div className={s.message}>How are you?</div>
        <div className={s.message}>Who are you?</div>
      </div>
    </div>
  );
}
