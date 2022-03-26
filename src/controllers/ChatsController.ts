import ChatsAPI from '@/api/ChatsAPI';

import store from '@/store/Store';

class ChatsController {
  private api: ChatsAPI;

  constructor() {
    this.api = new ChatsAPI();
  }

  async getChats() {
    const chats = await this.api.getChats({ offset: 0, limit: 50 });

    store.set('chats', chats);
  }
}

export default new ChatsController();
