import Block from '@/utils/Block';

export type TEvents = Record<string, (e: Event) => void>;

export interface IPage {
  path: string | string[];
  block: typeof Block;
  props?: Record<string, unknown>;
}
