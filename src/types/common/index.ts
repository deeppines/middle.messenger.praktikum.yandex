import Block from '@/utils/Block';

export type TEvents = Record<string, (e: Event) => void>;

export type Indexed<T = unknown> = {
  [key in string]: T;
};
export interface IPage {
  path: string | string[];
  block: typeof Block;
  props?: Record<string, unknown>;
}
