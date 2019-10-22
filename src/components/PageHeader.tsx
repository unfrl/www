import * as React from "react";

import { withStyles, createStyles, WithStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = (theme: Theme) =>
    createStyles({
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
    });

export interface IPageHeaderProps extends WithStyles<typeof styles> {
    title: string;
    subtitle?: string;
}

class PageHeader extends React.Component<IPageHeaderProps, {}> {
    public render() {
        const { classes, title, subtitle } = this.props;
        return (
            <div>
                <Typography variant="h1" className={classes.header}>
                    {title}
                </Typography>
                {subtitle && <Typography className={classes.subtitle}>{subtitle}</Typography>}
                <div className={classes.space}></div>
            </div>
        );
    }
}

export default withStyles(styles)(PageHeader);
