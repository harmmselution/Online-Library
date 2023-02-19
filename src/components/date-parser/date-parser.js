export const getDate = (str) => {
  const date = new Date(str);
  const monthArr = [
    'января',
    'февраля',
    'марта',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];
  const day = date.getUTCDate() < 10 ? `0${date.getUTCDate()}` : date.getUTCDate();
  const year = date.getFullYear();
  const month = monthArr[date.getMonth() + 1];

  return `${day} ${month} ${year}`;
};

export const getShortDate = (str) => {
  const date = new Date(str);
  const day = date.getUTCDate() < 10 ? `0${date.getUTCDate()}` : date.getUTCDate();
  const month = date.getUTCMonth() + 1 < 10 ? `0${date.getUTCMonth() + 1}` : date.getUTCMonth() + 1;

  return `${day}.${month}`;
};
