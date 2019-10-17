import * as React from 'react';

import { withStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

export interface IPageHeaderProps {
    classes?: any;
    title: string;
    subtitle?: string;
}

const styles: any = (theme: Theme) => ({
    header: {
        width: '100%',
        textAlign: 'center',
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(),
    },
    subtitle: {
        width: '100%',
        textAlign: 'center',
        fontStyle: 'italic'
    },
    space: {
        marginBottom: theme.spacing(4)
    }
});

class PageHeader extends React.Component<IPageHeaderProps, null> {
    public render() {
        const { classes, title, subtitle } = this.props;
        return (
            <div>
                <Typography variant="h2" className={classes.header}>
                    {title}
                </Typography>
                {subtitle &&
                    <Typography className={classes.subtitle}>
                        {subtitle}
                    </Typography>}
                <div className={classes.space}></div>
            </div>
        )
    }
}

export default withStyles(styles)(PageHeader);