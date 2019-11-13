import { Fragment, FunctionComponent } from "react";
import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import { Link } from "gatsby";

import { ImageTransition } from ".";
import logo from "../assets/logo.png";

const useStyles = makeStyles(theme => ({
    logoContainer: {
        display: "flex",
        alignItems: "center",
        maxHeight: 60,
    },
    logo: {
        maxWidth: 45,
        maxHeight: 45,
        borderRadius: 2,
    },
    homeLink: {
        marginRight: theme.spacing(2),
    },
}));

const Logo: FunctionComponent = props => {
    const classes = useStyles();
    return (
        <Fragment>
            <div className={classes.logoContainer}>
                <Link to="/" className={classes.homeLink}>
                    <ImageTransition className={classes.logo} src={logo} alt="Unfrl" />
                </Link>
                <div>
                    <Typography variant="h6">Unfrl</Typography>
                    <Typography variant="subtitle2">Software Design & Development</Typography>
                </div>
            </div>
            <Typography variant="caption">© 2019 Unfrl LLC</Typography>
        </Fragment>
    );
};

export default Logo;
