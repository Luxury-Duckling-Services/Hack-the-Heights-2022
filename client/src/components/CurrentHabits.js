import { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";

function CurrentHabits( { ownerships }) {
    
    return (
        <>
            {ownerships.map( ownership => {
                return <PokemonCard key={ownership.id} activity={ownership.activity} pokemon={ownership.pokemon} level={ownership.level}/>
            })}
        </>
    )
}

export default CurrentHabits;