# butane-toasts

> A small library for creating toast messages

## Install

```bash
$ npm install butane-toasts --save
```

## Usage

```js
import Toasts from 'butane-toasts';

Toasts.init();

Toasts.add('New toast');
```

## Options

### prefix

```js
Toast.init({ prefix: 'custom' });
```

### position

```js
Toast.init({ position: 'bottom-right' });
```

Options include `bottom-right`, `bottom-left`, `top-right`, `top-left`.

## API

### .add(message, timeout, type)

```js
Toasts.add('Failed to submit', 2500, 'success');
```

### .dispose()

```js
Toasts.dispose();
```

## License

MIT License © [Alex Carpenter](https://alexcarpenter.me)
