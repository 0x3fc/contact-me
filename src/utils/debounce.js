let timeout = null;

export const debounce = (fn, wait) => {
  (() => {
    if (timeout !== null) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(fn, wait);
  })();

  return timeout;
};
