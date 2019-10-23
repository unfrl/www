import { FunctionComponent } from "react"
import React from "react"
import { makeStyles, useTheme, useMediaQuery, Grid, Typography } from "@material-ui/core";

import { ImageTransition } from ".";
import logo from "../assets/logo.png";

const useStyles = makeStyles(theme => ({
    fullFooterSpacing: {
        marginTop: theme.spacing(4),
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        width: "100%",
        position: "static",
        bottom: 0,
        left: 0,
        right: 0,
        // maxHeight: 100
    },
    fullFooter: {
        backgroundColor: theme.palette.background.paper
    },
    footerItem: {
        // backgroundColor: 'red'
    },
    footerContainer: {
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4)
    },
    logo: {
        maxWidth: 70,
        maxHeight: 70
    },
    logoContainer: {
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    copyright: {
        foSize: '1rem',
        // position: 'static',
        bottom: '1rem',
        color: theme.palette.text.hint
    }
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
                                <ImageTransition className={classes.logo} src={logo} />
                                <div>
                                    <Typography variant="h4">Unfrl</Typography>
                                    <Typography variant="h6">Custom Software</Typography>
                                    <small className={classes.copyright}>© 2019 Unfrl LLC</small>
                                </div>
                            </div>

                        </Grid>
                        <Grid className={classes.footerItem} item xs={3}>
                            stuff
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