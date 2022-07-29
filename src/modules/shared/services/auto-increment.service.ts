/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable } from '@nestjs/common';
import { IdPrefixEnum } from 'src/modules/common/id-prefix';
import { getConnection } from 'typeorm';
interface Sequence {
  nextval: string;
}
@Injectable()
export class AutoIncrementService {
  async generateIncrementId(prefix: IdPrefixEnum | string, returnWithPrefix = true, suffixLength?: number) {
    try {
      const sysName = process.env.CSYT_UID ?? '';
      if (!suffixLength) suffixLength = process.env.SUFFIX_LENGTH ? +process.env.SUFFIX_LENGTH : 5;
      const val = (await getConnection()
        .query(`select  nextval('${prefix}')`)
        .catch(async (err) => {
          if (err && (err.code === '42P01' || (err.message && err.message.indexOf('does not exist') !== -1))) {
            await getConnection()
              .query(`create sequence ${prefix}`)
              .catch(() => {
                console.log(`Create sequence ${prefix} fail !\n`);
              });
            return (await getConnection().query(`select  nextval('${prefix}')`)) as Sequence[];
          }
          throw err;
        })) as Sequence[];
      if (val && val.length > 0) {
        const lastString = `${
          val[0].nextval.length < suffixLength ? Array(suffixLength + 1 - val[0].nextval.length).join('0') : ''
        }${val[0].nextval}`;
        return returnWithPrefix
          ? sysName
            ? `${sysName}-${prefix}-${lastString}`
            : `${prefix}-${lastString}`
          : lastString;
      }
      return '';
    } catch (error) {
      console.log(
        '🚀 ~ file: auto-increment.service.ts ~ line 22 ~ AutoIncrementService ~ generateIncrementId ~ error',
        error,
      );
      return '';
    }
  }
}
