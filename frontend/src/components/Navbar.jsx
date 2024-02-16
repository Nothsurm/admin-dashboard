import { 
    Menu as MenuIcon, 
    Search,
    SettingsOutlined,
    ArrowDropDownOutlined
 } from '@mui/icons-material'
 import { useState } from 'react'
 import { AppBar, IconButton, InputBase, Toolbar } from '@mui/material'

export default function Navbar() {

    
return (
<div className='static bg-none shadow-none'>
    <Toolbar className='flex justify-between'>
        {/* LEFT SIDE */}
        <div className="flex justify-between items-center">
            <IconButton onClick={() => console.log('open/close sidebar')}>
                <MenuIcon className='text-stone-200' />
            </IconButton>
            <div className=" bg-stone-200 flex justify-between items-center gap-3 py-[0.1rem] px-[1.5rem] rounded-lg">
                <InputBase placeholder='Search...'/>
                <IconButton>
                    <Search />
                </IconButton>
            </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-between items-center gap-[1.5rem]">
            <IconButton>
                <SettingsOutlined className='text-stone-200' />
            </IconButton>
        </div>
    </Toolbar>
  </div>
)
}
