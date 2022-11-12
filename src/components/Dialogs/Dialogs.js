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
  let dialogs = [
    { id: 1, name: 'Sergey' },
    { id: 2, name: 'Alesya' },
    { id: 3, name: 'Milana' },
    { id: 4, name: 'Timosha' },
    { id: 5, name: 'Arina' }
  ];
  let messages = [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Who are you?' },
    { id: 4, message: 'Where are you?' }
  ];
  let dialogsElements = dialogs.map(d =>
    <DialogItem name={d.name} id={d.id} />
  );

  let messagesElements = messages.map(m => <Message message={m.message} />);
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  );
}
