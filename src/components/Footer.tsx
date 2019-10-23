import { FunctionComponent } from "react"
import React from "react"
import { makeStyles, useTheme, useMediaQuery, Grid, Typography, IconButton } from "@material-ui/core";
import { Link } from "gatsby";
import GitHubIcon from '@material-ui/icons/GitHub';

import { ImageTransition } from ".";
import logo from "../assets/logo.png";

const useStyles = makeStyles(theme => ({
    fullFooterSpacing: {
        marginTop: theme.spacing(4),
        paddingTop: theme.spacing(),
        paddingBottom: theme.spacing(2),
        width: "100%",
        position: "static",
        bottom: 0,
        left: 0,
        right: 0,
        maxHeight: 80
    },
    fullFooter: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[1],
    },
    footerItem: {
        // backgroundColor: 'red'
    },
    footerContainer: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4)
    },
    logo: {
        maxWidth: 45,
        maxHeight: 45,
        marginRight: theme.spacing(2)
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
        maxHeight: 60,
    },
    copyright: {
        foSize: '1rem',
        bottom: '1rem',
        color: theme.palette.text.hint
    },
    linkArea: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    link: {
        textDecoration: "none",
        color: "inherit",
    },
}));

export enum FooterType {
    Normal,
    Drawer
}

export interface IFooterProps {
    variant: FooterType,

}

const Footer: FunctionComponent<IFooterProps> = props => {
    const classes = useStyles();
    const { variant } = props;
    const theme = useTheme();
    const fullSize = useMediaQuery(theme.breakpoints.up("md"));

    if (variant == FooterType.Normal) {
        if (fullSize) {
            return (
                <footer className={`${classes.fullFooterSpacing} ${classes.fullFooter}`}>
                    <Grid className={classes.footerContainer}
                        container
                        justify="space-between"
                        alignItems="center">
                        <Grid className={classes.footerItem} item xs={3}>
                            <div className={classes.logoContainer}>
                                <Link to="/">
                                    <ImageTransition className={classes.logo} src={logo} />
                                </Link>
                                <div>
                                    <Typography variant="h6">Unfrl</Typography>
                                    <Typography variant="subtitle2">Software Design & Development</Typography>
                                </div>
                            </div>
                            <small className={classes.copyright}>© 2019 Unfrl LLC</small>

                        </Grid>
                        <Grid className={classes.footerItem} item xs={3}>
                            <div className={classes.linkArea}>
                                <Link to="services" className={classes.link}>
                                    Services
                                </Link>
                                <Link to="process" className={classes.link}>
                                    Process
                                </Link>
                                <Link to="about" className={classes.link}>
                                    About
                                </Link>
                                <IconButton color="inherit" href="https://github.com/unfrl" >
                                    <GitHubIcon />
                                </IconButton>
                            </div>
                        </Grid>
                    </Grid>
                </footer>
            )
        }
        //Even if it is small we want to render the empty footer with a topMargin
        return (
            <footer className={classes.fullFooterSpacing}>EMPTY</footer>
        )
    }

    return (
        <div>
            SMALL
        </div>
    )
}

export default Footer;