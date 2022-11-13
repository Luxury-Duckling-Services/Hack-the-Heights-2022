import { useState, useEffect , forwardRef  } from "react";
import TopNavBar from "./TopNavBar";
import NewHabit from "./NewHabit";
import CurrentHabits from "./CurrentHabits";
import { Dialog , DialogTitle , Slide , DialogActions , Button } from '@mui/material';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function App() {
  const [ page , setPage ] = useState("current")
  const [ ownerships , setOwnerships ] = useState([])
  const [ question , setQuestion ] = useState( {
    open : false,
    content : ""
  })
  const [ ownershipId , setOwnershipId ] = useState(0)

  useEffect(()=> {
    fetch(`/ownerships`)
    .then((r) => r.json())
    .then((l) => {
      setOwnerships(l)
    })
  } , [page])

  const openQuestion = (ownership) => {
    setQuestion({ open: true , content: ownership.activity } )
    setOwnershipId( ownership.id)
  }

  const handleLevelUp = () => {
    fetch(`/ownerships/${ownershipId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ownership_id: ownershipId
      }),
    })

    setOwnerships(ownerships.map( ownership => {
      if (ownership.id === ownershipId) {
        return { ...ownership , level: ownership.level + 1}
      } else {
        return ownership
      }
    }))
    setQuestion({ open: false , content: "" } )
  }

  return (
    <>
      <TopNavBar page={page} setPage={setPage}/>
      
      {page === "current" ? <CurrentHabits ownerships={ownerships} openQuestion={openQuestion} /> : <></>}
      {page === "new" ? <NewHabit setPage={setPage}/> : <></>}

      <Dialog
            open={question.open}
            TransitionComponent={Transition}
            keepMounted
            onClose={()=>{
              setQuestion( { open: false , content : ""} )
            }}
        >
            <DialogTitle>Have you been {`${question.content} recently?`}</DialogTitle>

            <DialogActions>
              <Button onClick={()=>handleLevelUp()} autoFocus>
                Yes
              </Button>
            </DialogActions>
      </Dialog>

    </>
  );
}

export default App;