import { useState, useEffect } from "react";
import TopNavBar from "./TopNavBar";
import NewHabit from "./NewHabit";
import CurrentHabits from "./CurrentHabits";

function App() {
  const [ page , setPage ] = useState("current")

  return (
    <>
      <TopNavBar page={page} setPage={setPage}/>
      
      {page === "current" ? <CurrentHabits /> : <></>}
      {page === "new" ? <NewHabit /> : <></>}
    </>
  );
}

export default App;