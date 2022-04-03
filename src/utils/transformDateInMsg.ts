import { IMessageItem } from '@/types';

export const transformDateInMsg = (msg: IMessageItem[] | IMessageItem) => {
  const oneDay = 86400000;
  const week = oneDay * 7;
  const now = new Date();

  const dateTimeFormat = (date: Date, options: Intl.DateTimeFormatOptions) => {
    const dtf = new Intl.DateTimeFormat('ru-RU', options);

    return dtf.format(date);
  };

  const setFormat = (day: Date, now: Date) => {
    if (Number(now) - Number(day) < oneDay) {
      return dateTimeFormat(day, { hour: 'numeric', minute: 'numeric' });
    } else if (Number(now) - Number(day) < week) {
      return dateTimeFormat(day, { weekday: 'short' });
    } else {
      return dateTimeFormat(day, {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      });
    }
  };

  if (!Array.isArray(msg)) {
    const day = new Date(msg.time);

    msg.time = setFormat(day, now);
  } else {
    msg.map((item) => {
      const day = new Date(item.time);

      item.time = setFormat(day, now);
    });
  }
};
