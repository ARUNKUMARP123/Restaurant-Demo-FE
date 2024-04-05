import { Grid, Paper, Typography } from "@mui/material"


export const BestOffers = () => {
    const BEST_OFFERS_IMGS=[
        "http://im1.dineout.co.in/images/uploads/misc/2020/Aug/12/10offid.png?tr=tr:n-small",
        "http://im1.dineout.co.in/images/uploads/misc/2020/Aug/12/15offid.png?tr=tr:n-small",
        "http://im1.dineout.co.in/images/uploads/misc/2020/Aug/12/20offid.png?tr=tr:n-small",
        "http://im1.dineout.co.in/images/uploads/misc/2020/Aug/12/25offid.png?tr=tr:n-small",
        
    ];
  return (
    <Grid container 
    flexDirection={"column"} 
    justifyContent={"flex-start"}
     alignItems={"flex-start"}
     style={{
        width:1110,
        margin:"0 auto"
     }}
     spacing={2}
     >
        
        <Grid item>
        <Typography variant="h3">BestOffers</Typography>
        </Grid>
        <Grid item width={"100%"}>
            <Grid container >
      {BEST_OFFERS_IMGS.map((image,index)=>(
          <Paper elevation={3} key={index} style={{margin:10}}>
          <img src={image} alt="image" />
      </Paper>
      ))}
            </Grid>
        
        </Grid>
        
    </Grid>
  )
}
