import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreaterUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { UserEntity } from './interfaces/user.entity';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService){}

    @Get()
    async getAllUsers(): Promise<UserEntity[]>{
       return this.userService.getAllUser();
    }

    @Post()
    async createrUser(@Body() createrUser: CreaterUserDto): Promise<UserEntity>{
        return this.userService.createrUser(createrUser);
    }
}
