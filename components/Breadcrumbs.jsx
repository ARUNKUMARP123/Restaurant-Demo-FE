import {Breadcrumbs,Link,Typography} from "@mui/material"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
export const GeoBreadcrumbs = () => {

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={()=>{}}>
          MUI
        </Link>,
        <Link
          underline="hover"
          key="2"
          color="inherit"
          href="/material-ui/getting-started/installation/"
          onClick={()=>{}}
        >
          Core
        </Link>,
        <Typography key="3" color="text.primary">
          Breadcrumb
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
