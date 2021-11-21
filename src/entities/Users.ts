import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

/**
 *  For Create from CLI:  typeorm entity:create -n src/entities/User
 *
 *  Entity Options:  https://typeorm.io/#/entities/entity-columns
 *
 * **/

@Entity('users')
export class Users {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", {length: 100})
    first_name: string;

    @Column("varchar", {length: 100})
    last_name: string;

    @Column("varchar", {length: 100, unique: true})
    email: string;

    @Column("varchar", {length: 100})
    password: string;

    @CreateDateColumn()
    created_at: string;

    @UpdateDateColumn()
    updated_at: string;
}
