# butane-toasts

> Library for creating toast notifications.

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

`butane-toasts` CSS supports 'bottom-right' (default), 'top-right', 'bottom-left', 'top-right'

## API

### .add(message, timeout, type)

`Toasts.add('Failed to submit', 2500, 'success');`

### .dispose()

`Toasts.dispose();`

## License

MIT License © [Alex Carpenter](https://alexcarpenter.me)
