import remindersData from '../__mockData__/reminders';

const request = function onRequest(requestOpt) {
  const requestInstance = {};
  const { url } = requestOpt;
  if (url.indexOf('reminders') !== -1 && requestOpt.method === 'GET') {
    let data = remindersData;
    if (url.match(/\/reminders\/\d+$/)) {
      const splitUrl = url.split('/');
      const reminderId = splitUrl[splitUrl.length - 1];
      data = data.find(reminder => reminder.id === Number(reminderId));
    }
    requestInstance.request = new Promise((resolve) => {
      resolve(data);
    });
    return requestInstance;
  }
  return null;
};

export default request;
