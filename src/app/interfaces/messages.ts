export interface Message {
    id?:      number;
    title:   string;
    message: string;
    time:    number;
    user_id: number;
}

export interface CreateMessage extends Omit<Message, 'id' | 'time'>{} 