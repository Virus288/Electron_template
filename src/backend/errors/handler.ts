import * as types from '../../types';
import Log from '../../logger/log';

const tryCatch = async (
  func: () => Promise<void>,
  errCallback: string[],
  target: string,
  shouldExit?: boolean
): Promise<void> => {
  try {
    await func();
  } catch (errRes) {
    const error = errRes as types.IFullError;
    const errors = errCallback.concat([error.message]);
    errors.forEach((err) => {
      // #TODO Add proper handler to send those errors to backend and save them in logs. Frontend handler should also display something in popup
      if (typeof err !== 'string') {
        Log.error(target, String(err));
      } else {
        Log.error(target, err);
      }
    });
    if (shouldExit) throw errRes;
  }
};

export default tryCatch;
