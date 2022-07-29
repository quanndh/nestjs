import { Global, Module } from '@nestjs/common';
import { AutoIncrementService } from 'src/modules/shared/services/auto-increment.service';

@Global()
@Module({ imports: [], providers: [AutoIncrementService], exports: [AutoIncrementService] })
export class SharedModule {}
