import {Grid,Typography,FormControl,Select,MenuItem} from "@mui/material"
import { SORT } from "../src/Utils"

export const InfoBox = () => {
  return (
    <Grid  container justifyContent={"space-between"} alignItems={"center"}>
        <Grid item>
           < Typography variant="h5">Best Restaurants Near Me in</Typography>
        </Grid>
        <Grid item >
            <Grid container justifyContent={"center"} alignItems={"center"} >
            < Typography variant="h5" marginRight={4}>Sort By</Typography>
        <FormControl variant="outlined" sx={{ m: 1, minWidth: 50 }}>
        {/* <InputLabel id="demo-simple-select-filled-label">Sort</InputLabel> */}
        <Select 
       style={{width:196}}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={SORT[0]}    
          onChange={()=>{}}
        >
          {SORT.map((e,index)=>{
            return (
                <MenuItem key={index} value={e}>{e}</MenuItem>
            )
          })}
        </Select>
      </FormControl> 
            </Grid>
       
        </Grid>

    </Grid>
  )
}
