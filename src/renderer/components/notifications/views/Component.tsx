import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import * as hooks from '../../../redux';
import * as animation from '../../../animation';
import { DisableNotifications, Notification } from '../themed';
import { useMainDispatch } from '../../../redux/hooks';

const renderNotifications = (messages: string[]): JSX.Element[] | JSX.Element => {
  let i = 0;
  return messages.map((n) => {
    i++;

    return (
      <Notification
        key={`${n}-${i}`}
        nth={i - 1}
        variants={animation.slowSlideDown}
        initial="init"
        animate="visible"
        exit="exit"
      >
        <h3>{n}</h3>
      </Notification>
    );
  });
};

const Notifications: React.FC = () => {
  const dispatch = useMainDispatch();
  const { messages } = useSelector(hooks.notificationsState);
  const [notifications, setNotifications] = useState<string[]>([]);

  useEffect(() => {
    if (messages.length === 0) return;
    setNotifications([...notifications, messages[0]]);
    dispatch(hooks.disableNotification());
  }, [dispatch, messages, notifications]);

  return (
    <AnimatePresence mode="wait">
      {notifications.length > 0 ? (
        <>
          {renderNotifications(notifications)}
          <DisableNotifications
            variants={animation.slowSlideDown}
            initial="init"
            animate="visible"
            exit="exit"
            onClick={(): void => setNotifications([])}
          >
            <i className="icon-left-open-outline navIcon" />
          </DisableNotifications>
        </>
      ) : null}
    </AnimatePresence>
  );
};

export default Notifications;
