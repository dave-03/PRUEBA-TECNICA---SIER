import { AppBar, Toolbar, IconButton } from '@mui/material'
import AddHomeIcon from '@mui/icons-material/AddHome';
import React from 'react'


function NavBar() {
  return (
    <AppBar>
        <Toolbar>
            <IconButton size='large' color='inherit'>
            <AddHomeIcon color='inherit'></AddHomeIcon>
            </IconButton>

            <ul className='navBar'>
                <li>Inicio</li>
            </ul>
            
            
        </Toolbar>
        
    </AppBar>
  )
}

export default NavBar