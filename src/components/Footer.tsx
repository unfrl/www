import { FunctionComponent } from "react";
import React from "react";
import { makeStyles, useTheme, useMediaQuery, Grid, IconButton } from "@material-ui/core";
import { Link } from "gatsby";
import GitHubIcon from "@material-ui/icons/GitHub";

import { Logo } from ".";

const useStyles = makeStyles(theme => ({
    fullFooter: {
        paddingTop: theme.spacing(),
        paddingBottom: theme.spacing(2),
        width: "100%",
        position: "static",
        bottom: 0,
        left: 0,
        right: 0,
        maxHeight: 80,
        backgroundColor: theme.palette.background.paper,
        boxShadow: `0 -2px 1px -2px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)`,
    },
    footerContainer: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
    },
    linkArea: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
    },
    link: {
        textDecoration: "none",
        color: "inherit",
    },
    drawerFooter: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        paddingLeft: theme.spacing(),
        paddingRight: theme.spacing(),
    },
}));

export enum FooterType {
    Normal,
    Drawer,
}

export interface IFooterProps {
    variant: FooterType;
    className?: any;
}

const Footer: FunctionComponent<IFooterProps> = props => {
    const classes = useStyles();
    const { variant, className } = props;
    const theme = useTheme();
    const fullSize = useMediaQuery(theme.breakpoints.up("md"));

    if (variant == FooterType.Normal) {
        if (fullSize) {
            return (
                <footer className={`${classes.fullFooter} ${className || ""}`}>
                    <Grid
                        className={classes.footerContainer}
                        container
                        justify="space-between"
                        alignItems="center"
                    >
                        <Grid item xs={4}>
                            <Logo />
                        </Grid>
                        <Grid item xs={4}>
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
                                <IconButton color="inherit" href="https://github.com/unfrl">
                                    <GitHubIcon />
                                </IconButton>
                            </div>
                        </Grid>
                    </Grid>
                </footer>
            );
        }
        //Even if it is small we want to render the empty footer so things using it, like layouts, can add a topmargin
        return <footer className={className}></footer>;
    }

    return (
        <div className={classes.drawerFooter}>
            <Logo />
        </div>
    );
};

export default Footer;
