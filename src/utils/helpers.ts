import { Indexed, IProfileItem, IUser } from '@/types';

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

export const isObject = (item: Indexed<any> | undefined): boolean => {
  if (!item) return false;

  return item && typeof item === 'object' && !Array.isArray(item);
};

export const merge = (lhs: Indexed<any>, rhs: Indexed<any>): Indexed<any> => {
  if (!rhs) return lhs;

  const rhsArr: Indexed<any>[] = [rhs];

  if (!rhsArr.length) return lhs;

  const src = rhsArr.shift();

  if (isObject(lhs) && isObject(src)) {
    for (const key in src) {
      if (isObject(src[key])) {
        if (!lhs[key]) {
          Object.assign(lhs, {
            [key]: {},
          });
        }

        merge(lhs[key], src[key]);
      } else {
        Object.assign(lhs, {
          [key]: src[key],
        });
      }
    }
  }

  return rhsArr[0] ? merge(lhs, rhsArr[0]) : lhs;
};

export const createNestedObj = (source: Indexed<any>, target = {}): Indexed<any> => {
  const result = Object.entries(source).reduce((obj: Indexed<any>, [k, v]) => {
    const path = k.split('.');
    const prop = path.pop();

    if (prop) {
      path.reduce((acc, n: string) => (acc[n] = acc[n] || {}), obj)[prop] = v;
    }

    return obj;
  }, target);

  return result;
};

export const set = (object: Indexed<any>, path: string, value: unknown): Indexed<any> => {
  if (typeof path !== 'string') throw new Error('path must be string');
  if (!isObject(object)) return object;

  const baseObject = { [path]: value };
  const newObject = createNestedObj(baseObject);

  return merge(object, newObject);
};

export const getProfileItems = (props: IUser): IProfileItem[] => {
  const items: IProfileItem[] = [];

  const addItem = (name: string, value: string) => {
    items.push({ name, value });
  };

  Object.keys(props).forEach((key) => {
    if (key === 'email') addItem('Почта', props[key]);
    if (key === 'login') addItem('Логин', props[key]);
    if (key === 'first_name') addItem('Имя', props[key]);
    if (key === 'second_name') addItem('Фамилия', props[key]);
    if (key === 'display_name') addItem('Имя в чате', props[key]);
    if (key === 'phone') addItem('Телефон', props[key]);
  });

  return items;
};
