export const formateDate = (date: string) => {
  const event = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    day: 'numeric',
    month: 'numeric',
  });
  return event;
};
