import React from 'react'
import Avatar from "@mui/material/Avatar";
import Grid from '@mui/material/Grid';
import Logo from "../../../assets/textures/ffLogo.png"
import Typography from "@mui/material/Typography";

export default function LogoComponent(style: object) {
    return (
        <Grid
            direction="column"
            justifyContent="center"
            component="a"
            href=""
            sx={{
                display: style,
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none"
            }}
        >
            <Avatar
                component="a"
                sx={{

                    width: 50,
                    height: 50,
                }}
                src={Logo}
                alt="logo"

            />
            <Typography
                variant="h6"
                noWrap
                component="a"
                href=""
                sx={{
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 500,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                Namx
            </Typography>
        </Grid >
    )
}
