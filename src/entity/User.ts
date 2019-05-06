import {Column, Entity, OneToMany, PrimaryColumn} from "typeorm";
import {UserPicture} from './UserPicture';

@Entity()
export class User {

    @PrimaryColumn({unique: true})
    public userId: number;

    @Column()
    public name: string;

    @Column()
    public gender: number;

    @Column({default: 'vi_VN'})
    public locale: string;

    @Column()
    public avatar: string;

    @Column({default: false})
    public needLove: boolean;

    @OneToMany(type => UserPicture, userPicture => userPicture.userId)
    public userPictures: UserPicture[];

}
