import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm";
import {User} from './User';

@Entity()
export class UserPicture extends BaseEntity{

    @ManyToOne(type => User, user => user.userPictures, {onDelete: 'CASCADE'})
    @JoinColumn({name: 'userId'})
    public user: User;

    @PrimaryColumn()
    public userId: string;

    @PrimaryColumn()
    public attachmentId: string;

    @Column({default: false})
    public selected: boolean;

    @Column('timestamp with time zone')
    public date: Date;

}
