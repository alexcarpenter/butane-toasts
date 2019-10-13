# butane-toasts

> A small library for creating toast messages

## Usage

```jsx
import Toasts from 'butane-toasts';

Toasts.init();

Toasts.add('New toast');
```

## Options

### prefix

`Toast.init({ prefix: 'custom' });`

### position

`Toast.init({ position: 'bottom-right' });`

Options include `bottom-right`, `bottom-left`, `top-right`, `top-left`.

## API

### .add(message, timeout, type)

`Toasts.add('Failed to submit', 2500, 'success');`

### .dispose()

`Toasts.dispose();`

## License

MIT License © [Alex Carpenter](https://alexcarpenter.me)
