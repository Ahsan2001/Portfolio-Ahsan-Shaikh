"use client"
import * as React from 'react';
import Switch from '@mui/material/Switch';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import LightModeIcon from '@mui/icons-material/LightMode';
import style from "./style.module.css"

export default function ControlledSwitches({mode, setMode}) {


  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {

    setChecked(event.target.checked);
    
    if (event.target.checked) {
      document.body.classList.add('dark-mode'); 
    } else {
      document.body.classList.remove('dark-mode'); 
    }
  };

  
  React.useEffect(() => {
    if (checked) {
      setMode(false)
      document.body.classList.add('dark-mode'); 
    } else {
      setMode(true)
      document.body.classList.remove('dark-mode'); 
    }
  }, [checked]);

  return (
    <div className={style.selectMode}>

    

    {mode ?
    
    <div className={style.day}>
      <LightModeIcon /> 
    </div>
    : 
    <div className={style.night}>
      <NightsStayIcon />
    </div>
    
    
    
    }

    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />


    </div>
  );
}
