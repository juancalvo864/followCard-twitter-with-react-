import React from 'react'
import './App.css'
import { TwitterfollowCard } from './TwitterFollowCard.jsx'

export function App () {
    return (
        <section className='App'>  
            <TwitterfollowCard   userName="juancalvo864" >
                Juan Calvo
            </TwitterfollowCard>
            <TwitterfollowCard  userName="pheralb">               
                Pablo Hernandez
            </TwitterfollowCard> 
            <TwitterfollowCard  userName="elonmusk" >
                Elon Musk
            </TwitterfollowCard> 
            <TwitterfollowCard  userName="vxnder">           
                vanderhart
            </TwitterfollowCard>
        </section>
    )
}