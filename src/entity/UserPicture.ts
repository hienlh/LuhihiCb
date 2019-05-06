import {Column, Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm";
import {User} from './User';

@Entity()
export class UserPicture {

    @ManyToOne(type => User, user => user.userPictures, {onDelete: 'CASCADE'})
    @JoinColumn({name: 'userId'})
    public user: User;

    @PrimaryColumn()
    public userId: number;

    @PrimaryColumn()
    public attachmentId: number;

    @Column({default: false})
    public selected: boolean;

    @Column('timestamp with time zone')
    public date: Date;

}
