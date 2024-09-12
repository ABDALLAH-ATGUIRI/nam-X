import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Logo from "../../components/global/Logo/Logo"
import Sidebar from "./appSide.home";
import { Link } from "react-router-dom";
import "./appBar.css"

type Page = {
    Home: string;
    Register: string;
    Pruducts: string;
    Panier: string;
}
const pages: any = { Home: "/", Register: "/Register", Pruducts: "/3D-tour", Panier: "Panier" };


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar(): any {
    const [anchorElNav, setAnchorElNav] = React.useState<boolean | HTMLElement>(false);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleNavMenu = () => {
        anchorElNav ? setAnchorElNav(false) : setAnchorElNav(true)
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    ;

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    return (
        <>
            <AppBar position="static" >
                <Container maxWidth="xl" sx={{ bgcolor: "#000000b5", overflow: "hidden", position: "absolute", zIndex: 100, padding: "1%" }}>
                    <Toolbar disableGutters>

                        <Logo {...{ xs: 'none', md: 'flex' }} />

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>

                        </Box>
                        <Logo {...{ xs: 'flex', md: 'none' }} />

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {Object.keys(pages).map((page: string) => (
                                <Link to={pages[page]} className=" mx-4 font-bold text-lg  "> {page}</Link>
                            ))}
                        </Box >

                        <Box sx={{ flexGrow: 0 }}>
                            <button className="signIn">
                                <span>S'IDENTIFIER</span>
                                <div className="top"></div>
                                <div className="left"></div>
                                <div className="bottom"></div>
                                <div className="right"></div>
                            </button>
                        </Box>
                    </Toolbar>
                </Container >
            </AppBar >
            <Sidebar open={anchorElNav} setOpen={handleNavMenu} />
        </>



    );
}

export default ResponsiveAppBar;
