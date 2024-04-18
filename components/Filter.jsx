import {FormControlLabel,FormGroup,Checkbox} from "@mui/material"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { QuickFilter,CuisniesFilter,TagsFilter } from "../src/Utils";



export default function Filter({checkedFilter=[],setCheckedFilter}) {
console.log(checkedFilter)
  const handleFilter=(event)=>{
    
    if(event.target.checked){
      setCheckedFilter([...checkedFilter,event.target.value,]);
    }else{
      const filters=checkedFilter.filter((ele)=>event.target.value!==ele);
      setCheckedFilter(filters);
    }
  }
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         Quick Filter
        </AccordionSummary>
        <AccordionDetails>
        <FormGroup>
        {QuickFilter.map((label,index)=>{
            return (<FormControlLabel onChange={handleFilter} key={index} control={<Checkbox  />} label={label} name={label} value={label} />)            
        })}
        </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         Cuisnies Filter
        </AccordionSummary>
        <AccordionDetails>
        <FormGroup>
        {CuisniesFilter.map((label,index)=>{
            return (<FormControlLabel onChange={handleFilter} key={index} control={<Checkbox  />} label={label} name={label} value={label} />)            
        })}
        </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
        Tags Filter
        </AccordionSummary>
        <AccordionDetails>
        <FormGroup>
        {TagsFilter.map((label,index)=>{
            return (<FormControlLabel onChange={handleFilter} key={index} control={<Checkbox  />} label={label} name={label} value={label} />)            
        })}
        </FormGroup>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}