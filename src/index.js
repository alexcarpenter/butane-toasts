const ButaneToasts = (() => {
  'use strict';

  let config;
  let container;

  const createContainer = () => {
    container = document.createElement('div');
    container.className = `${config.prefix}-toast-container`;
    container.dataset.testid = 'butane-toast-container';
    document.body.appendChild(container);
  };

  const createToast = (msg, timeout) => {
    const toast = document.createElement('div');
    const message = document.createElement('div');
    const button = document.createElement('button');

    toast.dataset.testid = 'butane-toast';
    toast.className = `${config.prefix}-toast`;
    message.className = `${config.prefix}-toast__message`;
    button.className = `${config.prefix}-toast__dismiss`;

    if (typeof msg === 'string') {
      message.textContent = msg;
    } else {
      message.appendChild(msg);
    }
    button.textContent = 'Dismiss';

    toast.appendChild(message);
    toast.appendChild(button);

    container.appendChild(toast);

    if (timeout) autoDismiss(toast, timeout);
  };

  const add = (x, y) => createToast(x, y);

  const remove = async toast => {
    toast.classList.add(`${config.prefix}-toast--exit`);
    await new Promise(resolve => {
      const eventName = whichAnimationEvent(toast);
      if (eventName) {
        toast.addEventListener(eventName, () => resolve());
      } else {
        resolve();
      }
    });
    toast.remove();
  };

  const autoDismiss = (toast, timeout) => {
    setTimeout(() => {
      remove(toast);
    }, timeout);
  };

  const dismiss = event => {
    if (!event.target.closest(`.${config.prefix}-toast__dismiss`)) return;
    remove(event.target.parentNode);
  };

  const init = options => {
    config = {
      ...{
        prefix: 'butane',
      },
      ...options,
    };
    createContainer();
    document.addEventListener('click', dismiss, false);
  };

  const dispose = () => {
    container.remove();
    document.removeEventListener('click', dismiss, false);
  };

  const whichAnimationEvent = el => {
    const animations = {
      animation: 'animationend',
      OAnimation: 'oAnimationEnd',
      MozAnimation: 'Animationend',
      WebkitAnimation: 'webkitAnimationEnd',
    };

    for (const key of Object.keys(animations)) {
      if (el.style[key] !== undefined) {
        return animations[key];
      }
    }
    return;
  };

  return { init, add, dispose };
})();

export default ButaneToasts;
