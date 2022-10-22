import errLogger from '../../logger';

const fullLog = (logs: string[]): void => {
  logs.forEach((error) => {
    if (typeof error === 'string') {
      errLogger.error(error);
    } else {
      errLogger.error(JSON.stringify(error));
    }
  });
};

export default fullLog;
