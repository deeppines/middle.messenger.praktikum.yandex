export const addClass = (cl: string, el: HTMLElement): void => {
  el.classList.add(cl);
};

export const removeClass = (cl: string, el: HTMLElement): void => {
  el.classList.remove(cl);
};

export const setMessage = (msg: string, el: HTMLElement): void => {
  el.innerText = msg;
};

export const inputHasValue = (input: HTMLInputElement): boolean => {
  if (input.value) return true;

  return false;
};
