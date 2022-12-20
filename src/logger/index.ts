import { createLogger, format } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

let path = process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME'];
const cache = process.platform === 'win32' ? 'AppData/Roaming/' : '.cache';
const name = process.env.npm_package_productName ?? 'react_electron_template';

if (path) path += `/${cache}/${name}/`;

const errLogger = createLogger({
  transports: [
    new DailyRotateFile({
      level: 'error',
      filename: `${path}logs/errors-%DATE%.log`,
      json: true,
      format: format.combine(
        format.timestamp(),
        format.align(),
        format.printf((info) => `[${info.timestamp as number}] ${info.level}: ${info.message as string}`),
      ),
      datePattern: 'yyyy-MM-DD',
      maxFiles: 30,
      handleExceptions: true,
      handleRejections: true,
    }),
  ],
});

export default errLogger;
