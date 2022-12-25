import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as hooks from '../../../redux';
import * as animation from '../../../animation';
import { useMainDispatch } from '../../../redux/hooks';
import { Notification } from '../themed';

const Notifications: React.FC = () => {
  const dispatch = useMainDispatch();
  const [data, setData] = useState<string[]>([]);
  const { messages } = useSelector(hooks.notificationsState);

  useEffect(() => {
    setData(messages);

    setTimeout(() => {
      dispatch(hooks.disableNotification());
    }, 6000);
  }, [dispatch, messages]);

  return (
    <Notification variants={animation.opacity} initial="init" animate="visible" exit="exit">
      <h3>{data[0]}</h3>
    </Notification>
  );
};

export default Notifications;
