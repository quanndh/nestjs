import moment from 'moment';
import { Sonyflake, Epoch } from 'sonyflake';

export const snowflake = new Sonyflake({
  machineId: 1,
  epoch: Epoch.TWITTER, // timestamp
});

export const encode = (str: string): string => {
  return Buffer.from(str, 'utf8').toString('base64');
};

export const decode = (str: string): string => {
  return Buffer.from(str, 'base64').toString('utf8');
};

export function onlyUniqueString(value: string, index: number, self: string[]) {
  return self.indexOf(value) === index;
}

export const randomCode = (length: number) => {
  const possible = '0123456789';
  let string = '';
  for (let i = 0; i < length; i++) {
    string += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return string;
};

export const dateCompareString = (date: Date) =>
  moment(date).utcOffset(process.env.TZ_OFFSET).format('YYYY-MM-DD HH:mm:ss');
