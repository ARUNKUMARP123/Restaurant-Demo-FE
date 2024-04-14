import Box from '@mui/material/Box';
import {Grid,Chip} from "@mui/material"
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import React from 'react';
import { chipdata } from '../src/Utils';

export default function TimePicker({handleChipClick,bookedslots,selectedTime}) {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
return (
    <Box sx={{ width: '100%', typography: 'body1'}}>
      <TabContext value={value}>
        <Box  sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Morning" value="1" />
            <Tab label="Afternoon" value="2" />
            <Tab label="Evening" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
            <Grid container 
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'center'}
            spacing={4}
            overflow={'auto'}
            alignItems={'center'}
            >
            {chipdata.morning.map((data,index)=>{
                return (
                    <Grid key={`${index}-${data.key}`} item>
                         <Chip 
                         label={data.label}
                          clickable 
                          color={selectedTime===data.label?"default":'success'}
                          disabled={!! bookedslots.includes(data.label)}
                          onClick={()=>{handleChipClick(data.label)}}
                          />
                    </Grid>
                )
            })}
            </Grid>
            
        </TabPanel>
        <TabPanel value="2">
        <Grid container 
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'center'}
            spacing={4}
            overflow={'auto'}>
            {chipdata.afternoon.map((data,index)=>{
                return (
                    <Grid key={`${index}-${data.key}`} item>
                         <Chip 
                         label={data.label} 
                         clickable 
                         color={selectedTime===data.label?"default":'success'}
                          disabled={!! bookedslots.includes(data.label)}
                         onClick={()=>{handleChipClick(data.label)}}
                         />
                    </Grid>
                )
            })}
            </Grid>
        </TabPanel>
        <TabPanel value="3">
        <Grid container 
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'center'}
            spacing={4}
            overflow={'auto'}>
            {chipdata.dinner.map((data,index)=>{
                return (
                    <Grid key={`${index}-${data.key}`} item>
                         <Chip 
                         label={data.label}
                          clickable
                          color={selectedTime===data.label?"default":'success'}
                          disabled={!! bookedslots.includes(data.label)}
                           onClick={()=>{handleChipClick(data.label)}}
                           />
                    </Grid>
                )
            })}
            </Grid>
        </TabPanel>
      </TabContext>
    </Box>
)
}

