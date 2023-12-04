import PropTypes, { bool } from 'prop-types';
import css from 'components/friendlistitem/friendlistitem.module.css';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li key={id} className={css["item"]}>
      <span style={{backgroundColor: isOnline ? "green" : "red"}} className={css["status"]}></span>
      <img className={css["avatar"]} src={avatar} alt="User avatar" width="48" />
      <p className={css["name"]}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: bool.isRequired,
};
