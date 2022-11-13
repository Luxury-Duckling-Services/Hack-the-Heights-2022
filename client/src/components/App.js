import { useState, useEffect } from "react";
import TopNavBar from "./TopNavBar";
import NewHabit from "./NewHabit";
import CurrentHabits from "./CurrentHabits";

function App() {
  const [ page , setPage ] = useState("current")
  const [ ownerships , setOwnerships ] = useState([])

    useEffect(()=> {
        fetch(`/ownerships`)
        .then((r) => r.json())
        .then((l) => {
            console.log(l)
            setOwnerships(l)
        })
    } , [ownerships])

  return (
    <>
      <TopNavBar page={page} setPage={setPage}/>
      
      {page === "current" ? <CurrentHabits ownerships={ownerships} /> : <></>}
      {page === "new" ? <NewHabit /> : <></>}
    </>
  );
}

export default App;