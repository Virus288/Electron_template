import { IFullError } from '../types';

const tryCatch = async (
  func: () => Promise<void>,
  errCallback: string[],
  shouldExit?: boolean
): Promise<void> => {
  try {
    await func();
  } catch (errRes) {
    const error = errRes as IFullError;
    const errors = errCallback.concat([error.message]);
    errors.forEach((err) => {
      // #TODO Add proper handler to send those errors to backend and save them in logs. Frontend handler should also display something in popup
      console.log(err);
    });
    if (shouldExit) throw errRes;
  }
};

export default tryCatch;
