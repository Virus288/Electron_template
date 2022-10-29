// eslint-disable-next-line max-classes-per-file
export class FullError extends Error {
  code: string;

  status: number;
}

export class NoMessageType extends FullError {
  constructor() {
    super('NoMessageType');
    this.message = 'Message type does not exist';
    this.name = 'NoMessageType';
    this.code = '001';
    this.status = 400;
  }
}

export class IncorrectMessageType extends FullError {
  constructor() {
    super('IncorrectMessageType');
    this.message = 'Message type is incorrect';
    this.name = 'IncorrectMessageType';
    this.code = '002';
    this.status = 400;
  }
}

export class NoMessageTarget extends FullError {
  constructor() {
    super('NoMessageTarget');
    this.message = 'Message target does not exist';
    this.name = 'NoMessageTarget';
    this.code = '003';
    this.status = 400;
  }
}

export class IncorrectMessageTarget extends FullError {
  constructor() {
    super('IncorrectMessageTarget');
    this.message = 'Message target is incorrect';
    this.name = 'IncorrectMessageTarget';
    this.code = '004';
    this.status = 400;
  }
}
