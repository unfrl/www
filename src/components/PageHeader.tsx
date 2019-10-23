import React, { FunctionComponent } from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    header: {
        width: "100%",
        textAlign: "center",
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(),
        fontSize: "2.5rem",
        [theme.breakpoints.up("sm")]: {
            fontSize: "3rem",
        },
    },
    subtitle: {
        width: "100%",
        textAlign: "center",
        fontStyle: "italic",
    },
    space: {
        marginBottom: theme.spacing(4),
    },
}));

export interface IPageHeaderProps {
    title: string;
    subtitle?: string;
}

const PageHeader: FunctionComponent<IPageHeaderProps> = props => {
    const classes = useStyles();
    const { title, subtitle } = props;

    return (
        <div>
            <Typography variant="h1" className={classes.header}>
                {title}
            </Typography>
            {subtitle && <Typography className={classes.subtitle}>{subtitle}</Typography>}
            <div className={classes.space}></div>
        </div>
    );
};

export default PageHeader;
