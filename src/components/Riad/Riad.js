import React from "react";
import './Riad.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Grid } from '@mui/material';




function Riad(props){
    

    const{title,picture,des} =props.country;
    
    
    
  
    return(
        <>
        
       <Grid container spacing={2}>
    
       <Grid item xs={4}>
       <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={picture}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {des}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item xs={4}>
       <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={picture}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {des}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item xs={4}>
       <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={picture}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {des}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
       </Grid>
        
        
    
        
  
         <h1>Our county name is : {title}</h1>
         
        

 
       
        </>
       
     
    )
  }
  export default Riad;