---
layout:  layout.njk
---
## Install

```bash
$ npm install butane-toasts --save
```

## Usage

```js
import Toasts from 'butane-toast';
Toasts.init();
Toasts.add('This is a sample message');
```

## Options

### prefix

```js
Toasts.init({ prefix: 'custom' });
```

### position

```js
Toasts.init({ position: 'bottom-right' });
```

Options include `bottom-right`, `bottom-left`, `top-right`, `top-left`.

## API

### .add(message, timeout, type)

```js
Toasts.add('Failed to submit', 2500, 'error');
```

### .dispose()

```js
Toasts.dispose();
```
