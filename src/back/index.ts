import State from './state';
import Communication from './communication';

class App {
  static startApp(): void {
    State.Communicator = new Communication();
    State.Communicator.listen();
    console.log('Dupa');
  }
}

App.startApp();
