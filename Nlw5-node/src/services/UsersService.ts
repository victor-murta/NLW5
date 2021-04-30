import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRespository";

class UsersService{
    
    private usersRepository: Repository<User>;

    constructor(){
        this.usersRepository = getCustomRepository(UsersRepository);
    }

    async create(email: string){
        //verificar se o usuário existe

        const userExists = await this.usersRepository.findOne({
            email,
        });

        //se existir, retornar user
        if(userExists){
            return userExists;
        };

        const user = this.usersRepository.create({
            email,
        });

        await this.usersRepository.save(user);

        //se não existir, criar no banco de dados
        return user;


    }
}

export { UsersService };
