import { AddElement } from '../';
import store from '../../store'

import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

test("'AddElement' should show 2 inputs", () => {
  render(<Provider store={store}><AddElement /></Provider>);

  const inputs = screen.getAllByDisplayValue("");

  expect(inputs.length).toEqual(2);
});

test("should have 1 button with label 'Add' ", () => {
  render(<Provider store={store}><AddElement /></Provider>);

  const button = screen.getByText("Add");
  expect(button.innerHTML).toBe("Add");
});

test('should have 2 labels', () => {
  render(<Provider store={store}><AddElement /></Provider>);

  const nameLabel = screen.queryByText("Name");
  expect(nameLabel.innerHTML).toBe("Name");

  const dateLabel = screen.queryByText("Date");
  expect(dateLabel.innerHTML).toBe("Date");

});