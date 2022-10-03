import { _AbstractEntity } from '@app/commons/database/mysql/abstract.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'project' })
export class ProjectEntity extends _AbstractEntity<ProjectEntity> {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'name', nullable: false })
    name: string;
}
