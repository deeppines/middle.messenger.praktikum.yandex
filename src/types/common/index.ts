import Block from '@/utils/Block';

import { PagePaths } from '@/constants';

export type TEvents = Record<string, (e: Event) => void>;

export type Indexed<T = unknown> = {
  [key in string]: T;
};
export interface IPage {
  path: PagePaths | PagePaths[];
  block: typeof Block;
  props?: Record<string, unknown>;
}
