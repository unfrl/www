import React from 'react'

import { withStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles: any = (theme: Theme) => ({
    containerGrid: {
        [theme.breakpoints.up("lg")]: {
            maxWidth: 1280
        },
        width: '100%',
        fontFamily: 'Roboto, sans-serif',
        padding: '2rem',
    }
});

export interface IContentGridProps {
    children: any;
    classes?: any;
}

class ContentGrid extends React.Component<IContentGridProps, any> {
    render() {
        const { classes } = this.props;
        return (
            <Grid container justify="center">
                <Grid
                    container
                    className={classes.containerGrid}
                    alignItems="center"
                    justify="center"
                >
                    {this.props.children}
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(ContentGrid);
