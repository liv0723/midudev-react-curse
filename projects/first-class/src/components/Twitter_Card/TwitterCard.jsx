import { useState } from 'react';
import './TwitterCard.css'



export default function TwitterCard({userName, name, age, formatUserName, initialIsFollowing}) {
  const [following, setFollowing] = useState(initialIsFollowing);
  
  const handleClick = () => setFollowing(!following);

  const textButtonFollowing = (following)? 'Following' : 'Follow';
  const buttonFollowingClassName = (following)? 'tw-followCard-button is-following' : 'tw-followCard-button'
  const userInfo = `https://unavatar.io/${userName}`;
  

  return (
    <article className = {'tw-followCard'} >
      <header className = {'tw-followCard-header'}>
      <img 
      className = {'tw-followCard-avatar'}
      src = {userInfo} alt = {'avatar del user'}/>
      <div className = {'tw-followCard-info'}>
        <p><strong>{name}</strong> {age}</p>
        <span className = {'tw-followCard-infoUserName'}> {formatUserName(userName)}</span>
      </div>
      </header>
      <aside>
        <button className = {buttonFollowingClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{textButtonFollowing}</span>
          <span className="tw-followCard-stopFollow">less following</span>
        </button>
      </aside>
    </article>
  );
}