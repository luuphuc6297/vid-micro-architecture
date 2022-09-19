import { HttpModule, Module } from '@nestjs/common';
import { FilesAdapter } from './files.adapter';

@Module({
    imports: [HttpModule],
    providers: [FilesAdapter],
    exports: [FilesAdapter],
})
export class FilesModule {}
