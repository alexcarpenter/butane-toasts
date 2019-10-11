const Toasts = require('../..');
const {
  getAllByTestId,
  getByTestId,
  getByText,
  fireEvent,
} = require('@testing-library/dom');
require('@testing-library/jest-dom/extend-expect');

afterEach(() => {
  Toasts.dispose();
});

it('renders container', () => {
  Toasts.init();
  const container = getByTestId(document.body, 'butane-toast-container');
  expect(container).toBeInTheDocument();
});

it('renders toast', () => {
  Toasts.init({ prefix: 'custom' });
  const container = getByTestId(document.body, 'butane-toast-container');
  expect(container).toHaveClass('custom-toast-container');
});

it('renders custom message', () => {
  Toasts.init();
  Toasts.add('this is a sample toast message');
  const toast = getByTestId(document.body, 'butane-toast');
  expect(toast).toBeInTheDocument();
  expect(toast).toHaveTextContent('this is a sample toast message');
});

it('renders multiple toasts', () => {
  Toasts.init();
  Toasts.add('this is the first toast message');
  Toasts.add('this is the second toast message');
  Toasts.add('this is the third toast message');
  const toasts = getAllByTestId(document.body, 'butane-toast');
  expect(toasts.length).toEqual(3);
});

it('renders custom markup', () => {
  Toasts.init();
  const message = document.createElement('p');
  message.innerHTML = `<strong>Important</strong> toast message`;
  Toasts.add(message);
  expect(message).toContainHTML(
    '<p><strong>Important</strong> toast message</p>',
  );
});

it('dismisses on click', () => {
  Toasts.init();
  Toasts.add('this is a sample toast message');
  const toast = getByTestId(document.body, 'butane-toast');
  const button = getByText(document.body, /dismiss/i);
  fireEvent(
    button,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  );
  expect(toast).toHaveClass('butane-toast--exit');
});

xit('autodimisses after timeout', () => {
  Toasts.init();
  Toasts.add('this is a sample toast message', 1000);
});
