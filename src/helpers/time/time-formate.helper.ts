import { DAY, HOUR, MINUTE } from 'helpers/constants/constants.helpers';

export const formateTime = (date: number) => {
  let result;

  let hours = Math.round(date / MINUTE).toString();
  let minutes = Math.round(date / HOUR).toString();
  let seconds = Math.round(date / DAY).toString();

  hours = +hours < 10 ? '0' + hours : hours;

  minutes = +minutes < 10 ? '0' + minutes : minutes;
  seconds = +seconds < 10 ? '0' + seconds : seconds;

  result = `${hours}:${minutes}:${seconds}`;

  return result;
};
