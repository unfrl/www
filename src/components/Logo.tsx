import { Fragment, FunctionComponent } from "react";
import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import { Link } from "gatsby";

import { ImageTransition } from ".";
import logo from "../assets/logo.png";

const useStyles = makeStyles(theme => ({
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
        maxHeight: 60,
    },
    logo: {
        maxWidth: 45,
        maxHeight: 45,
        marginRight: theme.spacing(2)
    },
    copyright: {
        foSize: '1rem',
        bottom: '1rem',
        color: theme.palette.text.hint
    },
}));

const Logo: FunctionComponent = props => {
    const classes = useStyles();
    return (
        <Fragment>
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
        </Fragment>
    )
}

export default Logo;