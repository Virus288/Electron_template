import chalk from 'chalk';
import errLogger from './index';

export default class Log {
  static error(target: string, message: unknown): void {
    console.info(chalk.red(target));
    console.info(chalk.red(message));
    Log.saveLog(message);
  }

  static warn(target: string, message: unknown): void {
    console.info(chalk.yellow(target));
    console.info(chalk.yellow(message));
    Log.saveLog(message);
  }

  static log(target: string, message: unknown): void {
    console.info(chalk.blue(target));
    console.info(chalk.blue(message));
    Log.saveLog(message);
  }

  static trace(target: string, message: unknown): void {
    console.trace(chalk.yellowBright(target));
    console.info(chalk.yellowBright(message));
    Log.saveLog(message);
  }

  private static saveLog(message: unknown): void {
    const mess = typeof message !== 'string' ? JSON.stringify(message) : message;

    if (!process.env.DEBUG_PROD) return;
    errLogger.error(mess);
  }
}
