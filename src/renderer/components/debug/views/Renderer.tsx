import React, { useState } from 'react';
import { Section } from '../../settings/themed';
import { Button, Form, Input, Label } from '../../customs';
import Handler from '../handler';

// eslint-disable-next-line import/prefer-default-export
export const ToggleNotification: React.FC<{ handler: Handler }> = ({ handler }) => {
  const [text, setText] = useState<string>();

  return (
    <Section focusWithin>
      <Form onSubmit={(e): void => handler.toggleNotification(e, text)}>
        <Label>Toggle notification</Label>
        <Input type="text" placeholder="Text" onChange={(e): void => setText(e.target.value)} required />
        <Button type="submit" className="mainButton">
          Send
        </Button>
      </Form>
    </Section>
  );
};
