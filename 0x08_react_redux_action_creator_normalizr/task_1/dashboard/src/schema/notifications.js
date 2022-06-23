import * as data from '../../../../notifications.json';
import { normalize, schema } from 'normalizr';

const getAllNotificationsByUser = (userId) => {
  return data.default
    .filter((data) => data.author.id === userId)
    .map((data) => data.context);
};

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid'
});

const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

export const normalizedData = normalize(data.default, [notification]);
export default getAllNotificationsByUser;
