import React from 'react';
import { Section } from '../../settings/themed';
import { Button, Form, Input, Label } from '../../customs';

// eslint-disable-next-line import/prefer-default-export
export const RenderRandomDebug: React.FC = () => {
  return (
    <Section>
      <Form onSubmit={(e): void => e.preventDefault()}>
        <Label>Random debug</Label>
        <Input name="build" id="build" type="file" required />
        <Button type="submit" className="mainButton">
          Send
        </Button>
      </Form>
    </Section>
  );
};
