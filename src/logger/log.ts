import chalk from 'chalk';
import errLogger from './index';

export default class Log {
  static error(target: string, message: string): void {
    console.info(chalk.blue(target), chalk.red(message));
    Log.saveLog(message);
  }

  static warn(target: string, message: string): void {
    console.info(chalk.yellowBright(target), chalk.yellow(message));
    Log.saveLog(message);
  }

  static log(target: string, message: string): void {
    console.info(chalk.blue(target), message);
    Log.saveLog(message);
  }

  static trace(target: string, message: string): void {
    console.trace(chalk.yellowBright(target), message);
    Log.saveLog(message);
  }

  private static saveLog(message: string): void {
    typeof message !== 'string'
      ? errLogger.error(JSON.stringify(message))
      : errLogger.error(message);
  }
}
