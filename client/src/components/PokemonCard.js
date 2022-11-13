import { Card, CardContent, CardActions, CardActionArea, CardMedia, Typography, Button } from '@mui/material';

function PokemonCard( {  } ) {
    
    const pokemon = {
      name: "Snorlax",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png",
      activity: "sleeping on time",
      level: 0
    }

    return (
      <Card sx={{ width: 'auto', pb: 0, mr:0, mb:1 , mt:1 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={pokemon.image}
            alt=""/>
            
          <CardContent sx={{ width: 'auto' , backgroundColor: "#4f92ff" }}>
            <Typography align="center" component="div" variant="h5">
            lv. {pokemon.level} {pokemon.name}
            </Typography>
            
            <Typography align="center" variant="subtitle1" color="text.secondary" component="div">
              { pokemon.activity }
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <Button size="small" color="primary">
            Level Up
          </Button>
        </CardActions>
      </Card>
    );
  }
  
export default PokemonCard