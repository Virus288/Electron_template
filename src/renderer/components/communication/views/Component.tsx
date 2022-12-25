import React, { useEffect } from 'react';
import * as hooks from '../../../redux';
import Controller from '../../../communication';
import { useMainDispatch, useMainSelector } from '../../../redux/hooks';

const Communicator: React.FC = () => {
  const dispatch = useMainDispatch();

  const controller = React.useMemo(() => {
    return new Controller(dispatch);
  }, [dispatch]);
  const messages = useMainSelector(hooks.communicatorState);

  useEffect(() => {
    const target = messages.messages[0];
    if (!target) return;

    controller.handleSendMessage({
      target: target.target,
      payload: target.message,
      type: target.type,
    });
    dispatch(hooks.clearMessage({ target: target.counter }));
  }, [messages, dispatch, controller]);

  useEffect(() => {
    controller.listen();
  }, [controller]);

  return <></>;
};

export default Communicator;
