import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

export default function BasicSpeedDial(props) {
  return (
    <SpeedDial
      ariaLabel="BasicSpeedDial"
      sx={{position: 'fixed', bottom: 16, right: 16}}
      icon={<MenuOpenIcon/>}>
      <SpeedDialAction
        key='New Survey'
        icon={<AddIcon/>}
        tooltipTitle='New Survey'
        onClick={props.handleNewSurvey}/>
      <SpeedDialAction
        key='Logout'
        icon={<LogoutIcon/>}
        tooltipTitle='Logout'
        onClick={props.handleLogOut}/>
    </SpeedDial>
  );
}