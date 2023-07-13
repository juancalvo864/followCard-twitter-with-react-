import React from 'react'
import './App.css'
import { TwitterfollowCard } from './TwitterFollowCard.jsx'

export function App () {
    return (
        <section className='App'>  
            <TwitterfollowCard isFollowing={true}  userName="juancalvo864" >
                Juan Calvo
            </TwitterfollowCard>
            <TwitterfollowCard isFollowing={false} userName="pheralb">               
                Pablo Hernandez
            </TwitterfollowCard> 
            <TwitterfollowCard isFollowing userName="elonmusk" >
                Elon Musk
            </TwitterfollowCard> 
            <TwitterfollowCard isFollowing userName="vxnder">           
                vanderhart
            </TwitterfollowCard>
        </section>
    )
}