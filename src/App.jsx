import React from 'react'
import './App.css'
import { TwitterfollowCard } from './TwitterFollowCard.jsx'

export function App () {
    return (
        <section className='App'>  
            <TwitterfollowCard 
                isFollowing={true} 
                userName="midudev" 
                name="Miguel Angel" 
            />
            <TwitterfollowCard 
                isFollowing={false} 
                userName="pheralb" 
                name="Pablo Hernandez" 
            />
            <TwitterfollowCard 
                isFollowing 
                userName="elonmusk" 
                name="Elon Musk" 
            />
            <TwitterfollowCard 
                isFollowing 
                userName="vxnder" 
                name="vanderhart" 
            />
        </section>
    )
}