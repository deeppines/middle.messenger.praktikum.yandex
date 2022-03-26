import { Indexed } from '@/types';

import { queryString } from '@/utils/helpers';

import BaseAPI from './BaseAPI';

export default class ChatsAPI extends BaseAPI {
  constructor() {
    super('/chats');
  }

  getChats(query: Indexed): Promise<XMLHttpRequestResponseType> {
    return this.http.get(queryString(query));
  }

  create = undefined;
  read = undefined;
  update = undefined;
  delete = undefined;
}
