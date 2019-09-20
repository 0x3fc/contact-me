import { writable } from "svelte/store";
import { debounce } from "../utils/debounce";

const COPY_TOAST_WAIT_TIME = 5000;

let toastTimeout = null;

export const clipboard = writable("");
export const copyToastDisplay = writable(false);

export const copy = text => {
  const tmp = document.createElement("input");
  document.body.append(tmp);
  tmp.value = text;
  tmp.select();
  document.execCommand("copy");
  tmp.remove();

  clipboard.update(_ => text);
  copyToastDisplay.update(_ => true);

  toastTimeout = debounce(() => {
    copyToastDisplay.update(_ => false);
  }, COPY_TOAST_WAIT_TIME);
};

export const copyDisplayOff = () => {
  if (toastTimeout !== null) {
    clearTimeout(toastTimeout);
  }

  copyToastDisplay.update(_ => false);
};
