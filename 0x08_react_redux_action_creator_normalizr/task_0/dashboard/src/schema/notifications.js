import * as data from '../../../../notifications.json';

const getAllNotificationsByUser = (userId) => {
  return data.default
    .filter((data) => data.author.id === userId)
    .map((data) => data.context);
};

export default getAllNotificationsByUser;
