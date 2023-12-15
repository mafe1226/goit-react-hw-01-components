import css from './profile.module.css';
export const Profile = ({username, tag, location, avatar, stats }) => {
    const { followers, views, likes } = stats;
    return (
      <div className={css.profile}>
        <div className={css.description}>
          <img
            className={css.avatar}
            src= {avatar}
            alt="User avatar"
          />
          <p className={css.name}>{username}</p>
          <p class="tag">{tag}</p>
          <p class="location">{location}</p>
        </div>
      
        <ul className={css.stats}>
          <li>
            <span className={css.label}>Followers</span>
            <span className={css.quantity}>{followers}</span>
          </li>
          <li>
            <span className={css.label}>Views</span>
            <span className={css.quantity}>{views}</span>
          </li>
          <li>
            <span className={css.label}>Likes</span>
            <span className={css.quantity}>{likes}</span>
          </li>
        </ul>
      </div>
    );
  };