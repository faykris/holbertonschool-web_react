import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  },
  "data-notification-type=default": {
    color: 'blue'
  },
});


const NotificationItem = React.memo(function NotificationItem({ type, value, html, markAsRead, id }) {
  let li;
  if (type === 'default') li = css(styles.default);
  else if (type === 'urgent') li = css(styles.urgent);

  return (
    value ?
      <li data-notification-type={type}
        className={li}
        onClick={() => markAsRead(id)}>
        {value}
      </li> :
      <li data-notification-type={type}
        className={li}
        dangerouslySetInnerHTML={html}
        onClick={() => markAsRead(id)}>
      </li>
  );
});

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string, }),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  html: {},
  markAsRead: () => { },
  id: NaN,
};

export default NotificationItem;
