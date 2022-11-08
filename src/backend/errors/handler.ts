import * as types from '../../types';
import Log from '../../logger/log';

/**
 * Simple try catch function, which will test functions and throw external error if should
 * @param func Function which will be tested
 * @param errCallback Callbacks if function fails. Those are simple strings which will logs information alongside received error
 * @param shouldExit Optional boolean. If true, this function will throw on error
 * @example
 * await tryCatch(async () => await fetch(data), ['Testing device failed'], true);
 */
const tryCatch = async (func: () => Promise<void>, errCallback: unknown[], shouldExit?: boolean): Promise<void> => {
  try {
    await func();
  } catch (errRes) {
    const error = errRes as types.IFullError;
    const errors = errCallback.concat([error.message]);
    errors.forEach((err) => {
      // #TODO Add proper handler to send those errors to backend and save them in logs. Frontend handler should also display something in popup
      Log.error('TryCatch', err);
    });
    if (shouldExit) throw errRes;
  }
};

export default tryCatch;
