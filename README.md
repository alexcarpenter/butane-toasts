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

## API

### add(message, timeout)

`Toasts.add('Failed to submit', 2500);`

### dispose()

`Toasts.dispose();`

## License

MIT License © [Alex Carpenter](https://alexcarpenter.me)
