import {BaseEntity, Column, Entity, OneToMany, PrimaryColumn} from "typeorm";
import {UserPicture} from './UserPicture';

@Entity()
export class User extends BaseEntity {

    @PrimaryColumn({unique: true})
    public userId: string;

    @Column({unique: true})
    public personaId: string;

    @Column()
    public name: string;

    @Column()
    public gender: string;

    @Column({default: 'vi_VN'})
    public locale: string;

    @Column()
    public avatar: string;

    @Column({default: false})
    public needLove: boolean;

    @OneToMany(type => UserPicture, userPicture => userPicture.userId)
    public userPictures: UserPicture[];

}
