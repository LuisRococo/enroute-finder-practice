//solo podra chatear entre 1 y 1
export interface Chat {
  _id: string;
  members: string[];
  messages: Message[];
  allow: {
    images: boolean,
    audios: boolean
  }
}

//time span? mejor, lo puso al final como date
export interface Message {
  date: Date;
  content: string;
  sender: string;
  receiver: string;
}

export const mockGeneralChat: Chat = {
  _id: "324243423423",
  members: ["_id1", "_id2"],
  allow: {
    images: true,
    audios: true
  },
  messages: [{
    date: new Date(),
    content: "Lol",
    receiver: "_id2",
    sender: "_id1"
  },
  {
    date: new Date(),
    content: "url de imagen",
    receiver: "_id2",
    sender: "_id1"
  },
  {
    date: new Date(),
    content: "url de audio",
    receiver: "_id2",
    sender: "_id1"
  }]
}
