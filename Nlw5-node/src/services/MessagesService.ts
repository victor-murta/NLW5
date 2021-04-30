import { getCustomRepository, Repository } from "typeorm";
import { Message } from "../entities/Message";
import { MessagesRespository } from "../repositories/MessagesRespository";

interface IMessageCreate{
    admin_id?: string;
    text: string;
    user_id: string;
}

class MessagesService{
    private messagesRespository: Repository<Message>;

    constructor(){
        this.messagesRespository = getCustomRepository(MessagesRespository);
    }

    async create({ admin_id, text, user_id }: IMessageCreate){
        const message = this.messagesRespository.create({
            admin_id,
            text,
            user_id,
        });

        await this.messagesRespository.save(message);
        return message;
    }

    async listByUser(user_id: string){

        const list = await this.messagesRespository.find({
            where: { user_id },
            relations: ["user"],
        });

        return list;
    }

}

export { MessagesService };

