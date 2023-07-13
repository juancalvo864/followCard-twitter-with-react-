import { useState } from "react"

export function TwitterfollowCard ({children,userName}) {
    const [isFollowing,setIsFollowing] = useState(false)
    /* las tres lineas de abajo son lo mismo que la linea de aariba.
    const state = useState(false)
    const isFollowing = state[0]
    const setIsFollowing = state[1] */


    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following' 
    : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
       <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`} alt="El avatar de midudev" />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
            <aside>
                 <button className={buttonClassName} onClick={handleClick}>
                    {text}
                 </button>
            </aside>
       </article>
    )
}