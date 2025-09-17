import './App.css'
import { useState } from 'react'

export function TwitterFollowCard({children, userName='unknown', initialIsFollowing}){
const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing?'Siguiendo':'Seguir'
    const buttonClassName = isFollowing?'tw-followCard-button is-following':'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' alt="Red Bull" src={`https://eu.ui-avatars.com/api/?name=${userName}`}></img>
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
<span className='tw-followCard-infoUserName'>@{userName}</span>          
        </div>
      </header>
<aside>
  <button className={buttonClassName} onClick={handleClick}>
        <span className='tw-followCard-text'>{text}</span>

    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
  </button>
</aside>
    </article>
  )
}