import { IChatCreate } from '@/types';

import ChatsAPI from '@/api/ChatsAPI';

import { closeModal } from '@/utils/helpers';

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

  async addChat(data: IChatCreate) {
    await this.api.addChat(data);

    this.getChats();

    closeModal('addChat');
  }

  async addUser(data: Record<string, unknown>) {
    console.log(data, 'addUser');
  }

  async deleteUser(data: Record<string, unknown>) {
    console.log(data, 'delUser');
  }

  async deleteChat(id: string) {
    await this.api.deleteChat(id);

    await this.getChats();

    store.set('activeChat.id', null);

    closeModal('delChat');
  }
}

export default new ChatsController();
