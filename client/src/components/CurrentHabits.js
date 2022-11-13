import { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";

function CurrentHabits() {
    const [ listOfCurrentHabits , setListOfCurrentHabits ] = useState([])

    useEffect( () => {
        // GET request
    } , [listOfCurrentHabits] )

    return (
        <>
            <PokemonCard />
        </>
    )
}

export default CurrentHabits;