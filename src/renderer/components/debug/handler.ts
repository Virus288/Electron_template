import React from 'react';
import { MainDispatch } from '../../store/types';
import * as hooks from '../../redux';

export default class Handler {
  private readonly dispatch: MainDispatch;

  constructor(dispatch: MainDispatch) {
    this.dispatch = dispatch;
  }

  toggleNotification(e: React.FormEvent<HTMLFormElement>, message: string): void {
    e.preventDefault();
    this.dispatch(hooks.addNotification({ message }));
  }
}
