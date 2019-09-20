export const debounce = (fn, wait) => {
  let timeout = null;

  (() => {
    if (timeout !== null) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(fn, wait);
  })();

  return timeout;
};
