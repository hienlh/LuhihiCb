import {Column, Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm";
import {User} from './User';

@Entity()
export class RequestUser {

    @ManyToOne(type => User, user => user.userPictures, {onDelete: 'CASCADE'})
    @JoinColumn({name: 'userId'})
    public user: User;

    @PrimaryColumn()
    public userId: number;

    @ManyToOne(type => User, user => user.userPictures, {onDelete: 'CASCADE'})
    @JoinColumn({name: 'userRequestId'})
    public userRequest: User;

    @PrimaryColumn()
    public userRequestId: number;

    @Column({default: false})
    public accept: boolean;

}
