import { TextField ,InputAdornment, Button, Grid} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import styles from "./banner.module.css"

export const SearchBox = () => {
  return (
    <Grid  width={480}>
      
        <TextField
        fullWidth={true}
        style={{boxShadow:" rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px"}}
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
            <Button>Search</Button>     
            </InputAdornment>
          )
        }}
        variant="standard"
      />
    </Grid>
  )
}
