import { MessageType } from '@/types';

export const data = [
  {
    title: 'Андрей',
    preview: 'Изображение',
    date: '10:49',
    count: '2',
  },
  {
    title: 'Киноклуб',
    preview: 'Вы: стикер',
    date: '12:00',
    count: '',
  },
  {
    title: 'Илья',
    preview: 'Друзья, у меня для вас особенный выпуск новостей!...',
    date: '15:12',
    count: '4',
  },
  {
    title: 'Вадим',
    preview: 'Вы: Круто!',
    date: 'Пт',
    count: '',
  },
  {
    title: 'тет-а-теты',
    preview: 'И Human Interface Guidelines и Material Design рекомендуют...',
    date: 'Ср',
    count: '',
  },
  {
    title: '1, 2, 3',
    preview: 'Миллионы россиян ежедневно проводят десятки часов свое...',
    date: 'Пн',
    count: '',
  },
  {
    title: 'Design Destroyer',
    preview: 'В 2008 году художник Jon Rafman начал собирать...',
    date: 'Пн',
    count: '',
  },
  {
    title: 'Day.',
    preview: 'Так увлёкся работой по курсу, что совсем забыл его анонсир...',
    date: '1 Мая 2020',
    count: '',
  },
  {
    title: 'Стас Рогозин',
    preview: 'Можно или сегодня или завтра вечером.',
    date: '12 Апр 2020',
    count: '',
  },
  {
    title: 'Design Destroyer',
    preview: 'В 2008 году художник Jon Rafman начал собирать...',
    date: 'Пн',
    count: '',
  },
  {
    title: 'Day.',
    preview: 'Так увлёкся работой по курсу, что совсем забыл его анонсир...',
    date: '1 Мая 2020',
    count: '',
  },
  {
    title: 'Стас Рогозин',
    preview: 'Можно или сегодня или завтра вечером.',
    date: '12 Апр 2020',
    count: '',
  },
  {
    title: 'Стас Рогозин',
    preview: 'Можно или сегодня или завтра вечером.',
    date: '12 Апр 2020',
    count: '',
  },
  {
    title: 'Design Destroyer',
    preview: 'В 2008 году художник Jon Rafman начал собирать...',
    date: 'Пн',
    count: '',
  },
  {
    title: 'Day.',
    preview: 'Так увлёкся работой по курсу, что совсем забыл его анонсир...',
    date: '1 Мая 2020',
    count: '',
  },
  {
    title: 'Стас Рогозин',
    preview: 'Можно или сегодня или завтра вечером.',
    date: '12 Апр 2020',
    count: '',
  },
];

export const messages = [
  {
    type: MessageType.DATE,
    value: '19 июня',
  },
  {
    type: MessageType.INBOX,
    value:
      'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
    date: '11:56',
  },
  {
    type: MessageType.OUTBOX,
    value: 'Круто!',
    date: '12:00',
    sended: true,
  },
  {
    type: MessageType.DATE,
    value: '21 июня',
  },
  {
    type: MessageType.INBOX,
    value:
      'Сейчас зашёл дизигнер, не то чтобы с похмелья, скорее пьяный ещё. Глупо улыбаясь небритым лицом, положил на стол три пачки ЦВЕТНОЙ бумаги со словами: "я тут, это... в общем шредеру принёс, пусть порадуется. Только без меня не кормите". И ушёл ))',
    date: '11:56',
  },
  {
    type: MessageType.OUTBOX,
    value: 'и меня подождите тогда!!!!!',
    date: '12:00',
    sended: true,
  },
  {
    type: MessageType.INBOX,
    value: 'вот никто ещё по-другому не отреагировал))) вроде взрослые же бля люди...',
    date: '12:02',
  },
  {
    type: MessageType.DATE,
    value: '25 ноября 2007',
  },
  {
    type: MessageType.INBOX,
    value: 'что тобой там делают, на твоей кошмарной работе????',
    date: '12:02',
  },
  {
    type: MessageType.OUTBOX,
    value: 'они мною работу работают!!',
    date: '12:05',
    sended: true,
  },
  {
    type: MessageType.DATE,
    value: '26 ноября 2007',
  },
  {
    type: MessageType.INBOX,
    value: 'не надо мне или - или. Веди себя и как программист, и как мужчина сразу.',
    date: '12:02',
  },
  {
    type: MessageType.OUTBOX,
    value: 'Ок. Я хочу тебе Ctrl+V',
    date: '12:05',
    sended: true,
  },
  {
    type: MessageType.DATE,
    value: '27 ноября 2007',
  },
  {
    type: MessageType.INBOX,
    value: 'постоянно вылезает ошибка что делать?????????',
    date: '12:02',
  },
  {
    type: MessageType.OUTBOX,
    value:
      'Сейчас мы помедитируем, наш ведущий программист впадет в транс и попробует угадать текст ошибки и когда она у вас происходит.',
    date: '12:05',
    sended: true,
  },
];