import PokemonCard from "./PokemonCard";

function CurrentHabits( { ownerships , openQuestion }) {
    
    return (
        <>
            {ownerships.map( ownership => {
                return <PokemonCard key={ownership.id} ownership={ownership} openQuestion={openQuestion}/>
            })}
        </>
    )
}

export default CurrentHabits;