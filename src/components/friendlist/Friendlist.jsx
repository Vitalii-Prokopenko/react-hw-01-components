import PropTypes from 'prop-types';
import { FriendListItem } from 'components/friendlistitem/Friendlistitem';
import css from 'components/friendlist/friendlist.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css["friend-list"]}>
      {friends.map(friend => (
        <FriendListItem
          id={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
