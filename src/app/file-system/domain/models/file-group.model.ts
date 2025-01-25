import { OrmModel } from 'src/shared/database';
import { FileFlags } from '../file.type';
import { plainToInstance } from 'class-transformer';
import { nanoid } from 'nanoid';

export class FileGroupModel extends OrmModel {

    readonly fileGroupId: string;
    readonly userId: string;
    readonly flag: string;

    static from(userId: string, flag: FileFlags) {
        const now = new Date();
        return plainToInstance(FileGroupModel, {
            fileGroupId: nanoid(30),
            userId,
            flag,
            createdAt: now,
            updatedAt: now,
            deletedAt: null,
        } as FileGroupModel);
    }
}
