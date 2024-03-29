import { 
    Box, 
    Divider, 
    Drawer, 
    IconButton, 
    List, 
    ListItem, 
    ListItemButton, 
    ListItemIcon, 
    ListItemText, 
    Typography,
} from "@mui/material"
import { 
    SettingsOutlined,
    ChevronLeft,
    ChevronRightOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    Groups2Outlined,
    ReceiptLongOutlined,
    PublicOutlined,
    PointOfSaleOutlined,
    TodayOutlined,
    CalendarMonthOutlined,
    AdminPanelSettingsOutlined,
    TrendingUpOutlined,
    PieChartOutlined
 } from "@mui/icons-material"
 import { useEffect, useState } from "react"
 import { useLocation, useNavigate } from "react-router-dom"

 const navItems = [
    {
        text: 'Dashboard',
        icon: <HomeOutlined />
    },
    {
        text: 'Client Facing',
        icon: null,
    },
    {
        text: 'Products',
        icon: <ShoppingCartOutlined />
    },
    {
        text: 'Transactions',
        icon: <ReceiptLongOutlined />
    },
    {
        text: 'Geography',
        icon: <PublicOutlined />
    },
    {
        text: 'Sales',
        icon: null
    },
    {
        text: 'Overview',
        icon: <PointOfSaleOutlined />
    },
    {
        text: 'Daily',
        icon: <TodayOutlined />
    },
    {
        text: 'Monthly',
        icon: <CalendarMonthOutlined />
    },
    {
        text: 'Breakdown',
        icon: <PieChartOutlined />
    },
    {
        text: 'Management',
        icon: null
    },
    {
        text: 'Admin',
        icon: <AdminPanelSettingsOutlined />
    },
    {
        text: 'Performance',
        icon: <TrendingUpOutlined />
    }
]

export default function Sidebar({
    drawerWidth,
    isSidebarOpen,
    setIsSidebarOpen,
    isNonMobile
}) {
    const {pathname} = useLocation()
    const [active, setActive] = useState('')
    const navigate = useNavigate()
    
    useEffect(() => {
        setActive(pathname.substring(1))
    }, [pathname])

  return (
    <Box component='nav'>
        {isSidebarOpen && (
            <Drawer 
                open={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
                variant='persistent'
                anchor='left'
                sx={{
                    width: drawerWidth,
                    backgroundColor: '#009688'
                }}
            >
                <Box width='100%'>
                    <Box m='1.5rem 2rem 2rem 3rem'>
                        <div className="flex justify-center items-center">
                            <Box className='flex items-center gap-1'>
                                <Typography variant='h4' fontWeight='bold'>
                                    ECOMVISION
                                </Typography>
                            </Box>
                            {!isNonMobile && (
                                <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                                    <ChevronLeft />
                                </IconButton>
                            )}
                        </div>
                    </Box>
                    <List>
                        {navItems.map(({text, icon}) => {
                            if (!icon) {
                                return (
                                    <Typography key={text} sx={{ m: '2.25rem 0 1rem 3rem'}}>
                                        {text}
                                    </Typography>
                                )
                            }
                            const lcText = text.toLowerCase()
                            return (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton
                                        onClick={() => {navigate(`${lcText}`)
                                        setActive(lcText)
                                    }}
                                    sx={{
                                        backgroundColor: active === lcText ? 'yellow' : 'transparent',
                                        color: active === lcText ? 'yellow' : 'blue'
                                    }}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                ml: '2rem',
                                                color: active === lcText ? 'yellow' : 'blue'
                                            }}
                                        >
                                            {icon}
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                        {active === lcText && (
                                            <ChevronRightOutlined sx={{ml: 'auto'}} />
                                        )}
                                    </ListItemButton>
                                </ListItem>
                            )
                        })}
                    </List>
                </Box>
            </Drawer>
        )}
    </Box>
  )
}
