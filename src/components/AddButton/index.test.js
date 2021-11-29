import { AddButton } from '../';

import store from '../../store';
import listReducer, { showAddElementWindow } from '../MainView/redux';

import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';


test("should have label's name as 'Add button' ", () => {
  render(<Provider store={store}><AddButton /></Provider>);

  const label = screen.getByText("Add Element").innerHTML;
  expect(label).toBe("Add Element");
});

test("'AddButton' should change state", () => {
  const prevState = {
    list: [],
    showAddElementWindow: false
  };

  const component = render(<Provider store={store}><AddButton /></Provider>);
  const showElement = listReducer(prevState, showAddElementWindow());

  expect(showElement).toStrictEqual({
    list: [],
    showAddElementWindow: true
  });
});