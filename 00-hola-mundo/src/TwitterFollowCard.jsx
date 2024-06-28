import {useState} from 'react'

// eslint-disable-next-line react/prop-types
export function TwitterFollowCard({ userName= "unknow", name= "unknow", initialFollow }) {
    const [isFollowing, setIsFollowing] = useState(initialFollow)

    const buttonClassName= isFollowing ? 'button-card isFollowingUser' : 'button-card';

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    console.log('renderiza en el hijo '+ userName)


    return (
        <article className="card-twitter">
            <header className="header-card">
                <img src="src/assets/react.svg" alt="avaar logo"/>
                <div className="card-content">
                    <strong>{name}</strong>
                    <span>@{userName}</span>
                </div>
            </header>
            <aside className="aside-card">
                {/*<button className={buttonClassName} onClick={() => {*/}
                {/*    setIsFollowing(!isFollowing)*/}
                {/*    console.log(isFollowing)*/}
                {/*}}>*/}
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="text-card">{isFollowing ? 'Siguiendo' : 'Seguir'}</span>
                    <span className="button-card-hover">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}