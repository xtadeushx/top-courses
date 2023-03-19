import { MINUTE } from 'helpers/constants/constants.helpers';

export const formateTime = (totalSeconds: number) => {
  let result;

  const totalMinutes = Math.floor(totalSeconds / MINUTE);

  let seconds = Math.round(totalSeconds % MINUTE).toString();
  let hours = Math.floor(totalMinutes / MINUTE).toString();
  let minutes = Math.round(totalMinutes % MINUTE).toString();

  hours = +hours < 10 ? '0' + hours : hours;

  minutes = +minutes < 10 ? '0' + minutes : minutes;
  seconds = +seconds < 10 ? '0' + seconds : seconds;

  result = `${hours}:${minutes}:${seconds}`;

  return result;
};
