import type Communication from './communication';

class State {
  private _communicator: Communication = null;

  get communicator(): Communication {
    return this._communicator;
  }

  set communicator(value: Communication) {
    this._communicator = value;
  }
}

const state = new State();

export default state;
