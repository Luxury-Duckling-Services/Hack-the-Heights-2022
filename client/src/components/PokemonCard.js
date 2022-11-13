import { Card, CardContent, CardActions, CardActionArea, CardMedia, Typography, Button } from '@mui/material';

function PokemonCard( { ownership } ) {
    
    return (
      <Card sx={{ width: 'auto', pb: 0, mr:0, mb:1 , mt:1 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={ownership.pokemon.picture}
            alt=""/>
            
          <CardContent sx={{ width: 'auto' , backgroundColor: "#4f92ff" }}>
            <Typography align="center" component="div" variant="h5">
            lv. {ownership.level} {ownership.pokemon.name}
            </Typography>
            
            <Typography align="center" variant="subtitle1" color="text.secondary" component="div">
              { ownership.activity }
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <Button size="small" color="primary" onClick={()=>console.log(`${ownership.id} ${ownership.level}`)}>
            Level Up
          </Button>
        </CardActions>
      </Card>
    );
  }
  
export default PokemonCard