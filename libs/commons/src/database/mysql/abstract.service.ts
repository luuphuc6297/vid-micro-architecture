import { NotFoundException } from '@nestjs/common';
import _ from 'lodash';
import { DeepPartial, ObjectID, ObjectLiteral, Repository } from 'typeorm';

export interface IAbstractService<Entity extends ObjectLiteral> {
    findById(id: number | string | Date | ObjectID): Promise<Entity | null>;

    create(doc: DeepPartial<Entity>): Promise<Entity | null>;

    deleteById(id: number | string): Promise<any | null>;
}

export abstract class AbstractService<Entity extends ObjectLiteral> implements IAbstractService<Entity> {
    protected readonly _repository: Repository<Entity>;

    protected constructor(baseRepository: Repository<Entity>) {
        this._repository = baseRepository;
    }

    public async findById(id: number | string | Date | ObjectID | any): Promise<Entity | null> {
        const foundInstance = await this._repository.findOne(id);
        if (!foundInstance) throw new NotFoundException('Instance not found');
        return foundInstance;
    }

    public async create(doc: DeepPartial<Entity>): Promise<Entity | null> {
        return await this._repository.create(doc).save();
    }

    public async updateById(id: number, doc: DeepPartial<Entity>): Promise<any> {
        const foundInstance = await this.findById(id);
        _.keys(doc).forEach((key) => {
            _.set(foundInstance, key, doc[key]);
        });

        return await foundInstance.save();
    }

    public async deleteById(id: number): Promise<any> {
        const foundInstance = await this.findById(id);
        await this._repository.remove(foundInstance);
        return {
            message: `Instance with id ${id} has been deleted`,
        };
    }
}
