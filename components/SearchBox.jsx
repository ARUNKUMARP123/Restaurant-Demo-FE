import { TextField ,InputAdornment, Button, Grid} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import styles from "./banner.module.css"

export const SearchBox = () => {
  return (
    <Grid  width={480}>
      
        <TextField
        fullWidth={true}
        style={{boxShadow:" rgba(0, 0, 0, 0.2) 0px 0px 0px 0px, rgba(0, 0, 0, 0.14) 0px 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 2px 0px 0px"}}
        id="input-with-icon-textfield"
       // label="Search Anything"   
        className={styles.banner_search}
        InputProps={{
            placeholder:"Search Anything", 
            disableUnderline:true,
            style:{height:40},
          startAdornment: (
            <InputAdornment position="start">
            <SearchIcon/>
            </InputAdornment>
          ),
          endAdornment:(
            <InputAdornment position= "end">
            <Button color="success" variant="text">Search</Button>     
            </InputAdornment>
          )
        }}
        variant="standard"
      />
    </Grid>
  )
}
