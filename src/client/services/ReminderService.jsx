import request from '../shared/request';

function get(params = {}) {
  const { id } = params;
  let path = 'reminders';
  if (id) {
    path = `/reminders/${id}`;
  }
  return request({
    url: path,
    method: 'GET',
  });
}
const ReminderService = { get };
export default ReminderService;
