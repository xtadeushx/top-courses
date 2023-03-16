
export const formateTime = (date: number) => {
  let result;
  let hours = (Math.round(date / 60)).toString();
  let minutes = Math.round(date / 3600).toString();
  let seconds = Math.round(date / 3600 * 24).toString();
  hours = +hours < 10 ? '0' + hours : hours;
  minutes = +minutes < 10 ? '0' + minutes : minutes;
  seconds = +seconds < 10 ? '0' + seconds : seconds;
  result = `${hours}:${minutes}:${seconds}`;
  return result;
};


