import { Grid, Typography } from "@mui/material"
import styles from "./banner.module.css"
import { SearchBox } from "./SearchBox"

export const Banner = () => {
  return (
    <Grid container className={styles.banner_div} direction="column"
    justifyContent="center"
    alignItems="center">
<Grid item>
    <Typography style={{color:"white"}} variant="h3">It&apos;s Now Safe To Crave!</Typography>
</Grid>
<Grid item>
    <SearchBox/>
</Grid>
    </Grid>
  )
}
