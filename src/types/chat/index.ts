import { IUser } from '../user';

export interface IChatItem {
  id: number;
  title: string;
  avatar: string;
  unread_count: number;
  last_message?: {
    user: IUser;
    time: string;
    content: string;
  };
}

export interface IChatCreate {
  title: string;
}

export interface IChatUsersRequest {
  users: number[];
  chatId: number;
}
