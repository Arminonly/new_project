import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = props => {
  let path = '/dialogs/1' + props.id;
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}>
        {props.name}
      </NavLink>
    </div>
  );
};

const Message = props => {
  return (
    <div className={s.message}>
      {' '}{props.message}
    </div>
  );
};

export default function Dialogs(props) {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Sergey" id="1" />
        <DialogItem name="Alesya" id="2" />
        <DialogItem name="Milana" id="3" />
        <DialogItem name="Timosha" id="4" />
        <DialogItem name="Arina" id="5" />
      </div>
      <div className={s.messages}>
        <Message message="Hello" />
        <Message message="How are you?" />
        <Message message="Who are you?" />
        <Message message="Where are you?" />
      </div>
    </div>
  );
}
