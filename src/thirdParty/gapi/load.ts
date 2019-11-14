export default async (): Promise<void> => {
  await new Promise((resolve) => {
    window.gapi.load('client:auth2', resolve);
  });
  console.log('gapi has been successfully loaded');
};
