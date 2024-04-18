import {Breadcrumbs,Link,Typography} from "@mui/material"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
export const GeoBreadcrumbs = ({searchedLocation}) => {

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={()=>{}}>
          Dine out
        </Link>,
        <Link
          underline="hover"
          key="2"
          color="inherit"
          href="/material-ui/getting-started/installation/"
          onClick={()=>{}}
        >
          {searchedLocation}
        </Link>,
        <Typography key="3" color="text.primary">
          {searchedLocation}
        </Typography>,
      ];
    
  return (

        <Breadcrumbs
  separator={<NavigateNextIcon fontSize="small" />}
  aria-label="breadcrumb"
>
  {breadcrumbs}
</Breadcrumbs>
 
  )
}
