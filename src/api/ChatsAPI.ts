import { IChatCreate, Indexed } from '@/types';

import { queryString } from '@/utils/helpers';

import BaseAPI from './BaseAPI';

export default class ChatsAPI extends BaseAPI {
  constructor() {
    super('/chats');
  }

  getChats(query: Indexed): Promise<XMLHttpRequestResponseType> {
    return this.http.get(queryString(query));
  }

  addChat(data: IChatCreate): Promise<XMLHttpRequestResponseType> {
    return this.http.post('', { data });
  }

  deleteChat(id: string): Promise<XMLHttpRequestResponseType> {
    return this.http.delete('', { data: { chatId: id } });
  }

  create = undefined;
  read = undefined;
  update = undefined;
  delete = undefined;
}
