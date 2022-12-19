import * as types from '../../types';
import * as errors from '../../errors';
import * as enums from '../../enums';

export default class Validator {
  static validateInnerMessage(message: types.DataConnection): void {
    const availableTypes = Object.keys(enums.EResponseCallback);
    const availableTargets = Object.keys(enums.EDebugChannels) || Object.keys(enums.EMessageChannels);

    if (!message.type) throw new errors.NoMessageType();
    if (!availableTypes.includes(message.type)) {
      throw new errors.IncorrectMessageType();
    }

    if (!message.target) throw new errors.NoMessageTarget();
    if (!availableTargets.includes(message.target)) {
      throw new errors.IncorrectMessageTarget();
    }
  }
}
