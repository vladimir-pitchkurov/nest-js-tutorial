import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Users } from "../entities/Users";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users) private usersRepo: Repository<Users>
    ) {
    }

    /**
     *  For Hash Password:
     *   Doc:  https://docs.nestjs.com/security/encryption-and-hashing
     *
     *   npm i bcrypt
     *   npm i -D @types/bcrypt
     *
     *
     * */
    async saveUser(user_data) {
        try {
            const salt = await bcrypt.genSalt();
            const hash = await bcrypt.hash(user_data.password, salt);
            user_data.password = hash;
            const user = await this.usersRepo.save(user_data);
            return {user};
        } catch (err) {
            const {message, code} = err;
            return {message, code};
        }
    }

    findAll(): Promise<Users[]> {
        return this.usersRepo.find();
    }
}
