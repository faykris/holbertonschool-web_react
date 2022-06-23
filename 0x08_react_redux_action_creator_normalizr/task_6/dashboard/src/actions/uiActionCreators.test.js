import expect from 'expect';
import { displayNotificationDrawer, hideNotificationDrawer, login, logout } from './uiActionCreators';
import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN, LOGOUT } from './uiActionTypes';

describe('Action creators', () => {
  it('Verify login action', () => {
    const result = { type: LOGIN, user: { email: 'Joe@gmail.com', password: '12345' } };
    expect(login('Joe@gmail.com', '12345')).toEqual(result);
  });

  it('Verify logout action', () => {
    const result = { type: LOGOUT };
    expect(logout()).toEqual(result);
  });

  it('Verify displayNotificationDrawer action', () => {
    const result = { type: DISPLAY_NOTIFICATION_DRAWER };
    expect(displayNotificationDrawer()).toEqual(result);
  });

  it('Verify hideNotificationDrawer action', () => {
    const result = { type: HIDE_NOTIFICATION_DRAWER };
    expect(hideNotificationDrawer()).toEqual(result);
  });
});
