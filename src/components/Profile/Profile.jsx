import PropTypes from 'prop-types';
import defaultImage from '../../default-image.png';
import s from './Profile.module.css'

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img
          src={avatar}
          alt="Аватар пользователя"
          className={s.avatar }
        />
        <p className={ s.name}>{name}</p>
        <p className="tag">@{ tag}</p>
        <p className="location">{ location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span>Followers</span>
          <span className={s.quantity}>{ stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span className={s.quantity}>{ stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span className={s.quantity}>{ stats.likes}</span>
        </li>
      </ul>
</div>
    )
}

Profile.defaultProps = {
  avatar: defaultImage,
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(
    PropTypes.number.isRequired
  ).isRequired
}

export default Profile;