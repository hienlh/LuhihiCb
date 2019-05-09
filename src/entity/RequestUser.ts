import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm";
import {User} from './User';

@Entity()
export class RequestUser extends BaseEntity {

    @ManyToOne(type => User, user => user.userPictures, {onDelete: 'CASCADE'})
    @JoinColumn({name: 'userId'})
    public user: User;

    @PrimaryColumn()
    public userId: string;

    @ManyToOne(type => User, user => user.userPictures, {onDelete: 'CASCADE'})
    @JoinColumn({name: 'userRequestId'})
    public userRequest: User;

    @PrimaryColumn()
    public userRequestId: string;

}
