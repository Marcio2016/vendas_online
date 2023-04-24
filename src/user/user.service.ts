import { CreaterUserDto } from './dtos/createUser.dto';
import { Injectable } from '@nestjs/common';
import { UserEntity } from './interfaces/user.entity';
import { hash } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {   
    
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ){}

    //retorna todos os usuários
    async getAllUser(): Promise<UserEntity[]> {
        return this.userRepository.find();
    }

    //Salva um usuário
    async createrUser(createrUserDto: CreaterUserDto):Promise<UserEntity> {
        const saltOrRounds = 10;
        const passwordHashed = await hash(createrUserDto.password, saltOrRounds);

        return this.userRepository.save({
            ...createrUserDto,
            typeUser: 1,
            password: passwordHashed,
        });       
    }
}
