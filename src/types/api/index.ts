import { METHOD } from '@/constants';

export type Options = {
  method: METHOD;
  data?: any;
};

export type OptionsWithoutMethod = Omit<Options, 'method'>;
