export default (url: string): string => {
  const parsedUrl = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  // eslint-disable-next-line no-useless-escape
  return (parsedUrl[2] !== undefined) ? parsedUrl[2].split(/[^0-9a-z_\-]/i)[0] : parsedUrl[0];
};
