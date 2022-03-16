export const addClass = (cl: string, el: HTMLElement | null): void => {
  if (el) el.classList.add(cl);
};

export const removeClass = (cl: string, el: HTMLElement | null): void => {
  if (el) el.classList.remove(cl);
};

export const setMessage = (msg: string, el?: HTMLElement | null): void => {
  if (el) el.innerText = msg;
};

export const inputHasValue = (input?: HTMLInputElement | null): boolean => {
  if (input && input.value) return true;

  return false;
};

export const isEqual = (a: Record<string, unknown>, b: Record<string, unknown>): boolean => {
  if (a === null || a === undefined || b === null || b === undefined) return a === b;

  if (a.constructor !== b.constructor) return false;

  if (a instanceof Function) return a === b;

  if (a instanceof RegExp) return a === b;

  if (a === b || a.valueOf() === b.valueOf()) return true;

  if (Array.isArray(a) && Array.isArray(b) && a.length !== b.length) return false;

  if (a instanceof Date) return false;

  if (!(a instanceof Object)) return false;
  if (!(b instanceof Object)) return false;

  const p = Object.keys(a);

  return (
    Object.keys(b).every((i) => {
      return p.indexOf(i) !== -1;
    }) &&
    p.every((i) => {
      return isEqual(a[i] as Record<string, unknown>, b[i] as Record<string, unknown>);
    })
  );
};

export const updatePageTitle = (title: string): void => {
  document.title = title;
};
