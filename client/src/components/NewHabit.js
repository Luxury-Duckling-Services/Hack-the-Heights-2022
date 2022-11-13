import { Dialog , DialogTitle , Slide , Stepper , Step , StepLabel , Select , MenuItem , CardHeader , Avatar } from '@mui/material';
import { useState , useEffect , forwardRef } from "react";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function NewHabit( { setPage } ) {
    const [activeStep , setActiveStep] = useState(0)
    const [newValue , setNewValue] = useState({
        activity_id: 0,
        pokemon_id: 0
    })
    const [activities , setActivities] = useState([])
    const [pokemons , setPokemons] = useState([])
    
    useEffect( ()=> {
        fetch("/activities")
        .then( (r) =>r.json())
        .then( (j) =>{
            setActivities(j)
        })
    } , [])

    const showPokemons = (activityId)=> {
        fetch("/pokemons")
        .then( (r)=>r.json())
        .then( (ps)=> {
            setPokemons(ps.filter( p => {
                return p.activity.id === activityId
            }))
        })
    }

    const catchPokemon = ( pid ) => {
        fetch("/ownerships", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify( {
                pokemon_id: pid,
                level: 0
            }),
        })
        .then( r=> r.json())
        .then()
    }

    return (
        <Dialog
            open={true}
            TransitionComponent={Transition}
            keepMounted
            onClose={()=>{
                setPage('current')
            }}
        >
            <DialogTitle>Form A New Habit</DialogTitle>
            
            <Stepper
                connector={null}
                activeStep={activeStep}
                orientation="vertical"
                sx={{mb:2}}
            >
                <Step>
                    <StepLabel>Choose a habit</StepLabel>
                </Step>

                <Step>
                    <StepLabel>Choose a pokemon</StepLabel>
                </Step>
                    
            </Stepper>
            
            {activeStep === 0 ? 
                <Select
                id="activity_select_id"
                name=""
                label="Activities"
                value={newValue.activity_id}
                onChange={(e)=>{
                    setNewValue({...newValue , activity_id: e.target.value})
                    setActiveStep(1)
                    showPokemons(e.target.value)
                }}
                style={{ display: "flex" }}
                >
                    <MenuItem value={0} key={0}></MenuItem>
                    {activities.map( (activity)=> {
                        return (
                            <MenuItem value={activity.id} key={activity.id}>
                                <CardHeader sx={{height:2}}
                                    titleTypographyProps={{
                                        fontSize: 15,
                                    }}
                                    title={activity.name}
                                />
                            </MenuItem>
                    ) } ) }
                </Select>
            : <></>}
            
            {activeStep === 1 ? 
                <Select
                id="pokemon_select_id"
                name=""
                label="Pokemons"
                value={newValue.pokemon_id}
                onChange={(e)=>{
                    setNewValue({...newValue , pokemon_id: e.target.value})
                    catchPokemon( e.target.value)
                    setPage('current')
                }}
                style={{ display: "flex" }}
                >
                    <MenuItem value={0} key={0}></MenuItem>
                    {pokemons.map( (pokemon)=> {
                        return (
                            <MenuItem value={pokemon.id} key={pokemon.id}>
                                <CardHeader sx={{height:2}}
                                    titleTypographyProps={{
                                        fontSize: 15,
                                    }}
                                    avatar={<Avatar key={pokemon.id} sx={{width: 36, height: 36}} src={pokemon.picture}/>}
                                    title={pokemon.name}
                                />
                            </MenuItem>
                    ) } ) }
                </Select>
            : <></>}
        </Dialog>
    )
}

export default NewHabit;