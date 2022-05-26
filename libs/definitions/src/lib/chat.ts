export interface Chat {
  _id: string;
  members: string[];
  messages: Message[];
  allow: {
    images: boolean;
    audios: boolean;
  };
}

export interface Message {
  date: Date;
  content: string;
  sender: string;
  receiver: string;
}

export const mockGeneralChat: Chat = {
  _id: '_idChat1',
  members: ['_id1', '_id2'],
  allow: {
    images: true,
    audios: true,
  },
  messages: [
    {
      date: new Date(),
      content: 'Hola usuario 2',
      sender: '_id1',
      receiver: '_id2',
    },
    {
      date: new Date(),
      content:
        'https://pickaface.net/gallery/avatar/unr_test_180612_1021_b05p.png',
      sender: '_id2',
      receiver: '_id1',
    },
    {
      date: new Date(),
      content: 'Jaja tienes razón',
      sender: '_id1',
      receiver: '_id2',
    },
    {
      date: new Date(),
      content:
        'https://www.onlinemictest.com/wp-content/themes/onlinemictest/sound.mp3',
      sender: '_id2',
      receiver: '_id1',
    },
  ],
};
