import State from './state';
import Communication from './communication';
import Log from '../logger/log';

class App {
  static startApp(): void {
    State.Communicator = new Communication();
    State.Communicator.listen();
    Log.log('test', 'test');
  }
}

App.startApp();
