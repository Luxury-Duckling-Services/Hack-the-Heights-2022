import PokemonCard from "./PokemonCard";

function CurrentHabits( { ownerships }) {
    
    return (
        <>
            {ownerships.map( ownership => {
                return <PokemonCard key={ownership.id} ownership={ownership}/>
            })}
        </>
    )
}

export default CurrentHabits;