/* eslint-disable no-restricted-syntax */
import { BASE_SOCKET_URL } from '@/constants';

export default class SocketConnection {
  protected socket;

  constructor(endpoint: string) {
    this.socket = new WebSocket(`${BASE_SOCKET_URL}${endpoint}`);

    this.init();
  }

  private init() {
    this.setListeners();
  }

  private setListeners() {
    this.socket.addEventListener('open', () => {
      console.log('Соединение установлено');
    });

    this.socket.addEventListener('close', (event) => {
      if (event.wasClean) {
        console.log('Соединение закрыто чисто');
      } else {
        console.log('Обрыв соединения');
      }

      console.log(`Код: ${event.code} | Причина: ${event.reason}`);
    });

    this.socket.addEventListener('message', (event) => {
      console.log('Получены данные', event.data);
    });

    this.socket.addEventListener('error', (event) => {
      console.log('Ошибка', event);
    });
  }

  public sendMessage(message: string) {
    this.socket.send(
      JSON.stringify({
        content: message,
        type: 'message',
      })
    );
  }

  public getPrevMessages(count: string) {
    this.socket.send(
      JSON.stringify({
        content: count,
        type: 'get old',
      })
    );
  }
}
