import { AddElement } from './';

import { render } from '@testing-library/react';

test("'AddElement' should show 2 inputs and 1 button", () => {
  const component = render(<AddElement />);

  const inputs = component.findAllByRole("input");
});

test("should have empty inputs", () => {

});