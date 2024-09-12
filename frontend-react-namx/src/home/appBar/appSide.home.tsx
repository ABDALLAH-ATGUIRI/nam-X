import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Navbar from "./appBar.home"
import { Link } from 'react-router-dom';
import Logo from "../../components/global/Logo/Logo"



export default function TemporaryDrawer(open: any, setOpen: any) {

    const [state, setState] = React.useState(false);

    const toggleDrawer =
        (open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState(open);
            };

    const list = () => (
        <Box
            sx={{ width: "100%", height: "100%", flexGrow: 1, padding: "2%", top: "15%", backgroundColor: "white", position: "fixed" }}
            role="presentation"
            onClick={toggleDrawer(false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>

                        <ListItemButton sx={{ padding: "2%" }} >
                            <Link to="/" className='font-extrabold text-3xl font-mono' >{text}</Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box >
    );

    React.useEffect(() => {
        setState(open.open);
    }, [open.open])
    return (
        <div>
            <React.Fragment key={'left'}  >
                <Drawer
                    anchor={'left'}
                    open={state}
                    onClick={toggleDrawer(false)}
                >

                    {list()}
                </Drawer>
            </React.Fragment>
        </div>
    );
}