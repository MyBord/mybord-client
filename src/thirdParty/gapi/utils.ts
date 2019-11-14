import moment from 'moment';
import numeral from 'numeral';

const formatInt = (int: number): string => {
  if (int < 10) {
    return `0${int}`;
  }
  return `${int}`;
};

export const formatDuration = (time: string): string => {
  const seconds = moment.duration(time).seconds();
  const minutes = moment.duration(time).minutes();
  const hours = moment.duration(time).hours();
  if (hours > 0) {
    return `${formatInt(hours)}:${formatInt(minutes)}:${formatInt(seconds)}`;
  }
  if (minutes > 0) {
    return `${formatInt(minutes)}:${formatInt(seconds)}`;
  }
  return `00:${formatInt(seconds)}`;
};

export const formatNumber = (number: string): string => {
  if (Number(number) > 999999) {
    return numeral(number).format('0.0a');
  }
  return numeral(number).format('0,0');
};

export const formatPublishedAt = (date: string): string => {
  moment.updateLocale('en', {
    relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      ss: '%d seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: '1h',
      hh: '%dh',
      d: '1d',
      dd: '%dd',
      M: '1m',
      MM: '%dm',
      y: '1y',
      yy: '%dy',
    },
  });
  return moment(date).fromNow();
};
