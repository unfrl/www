import React from 'react'

import { withStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import posed from 'react-pose';
import { Link } from 'gatsby';

const styles: any = (theme: Theme) => ({
    link: {
        textDecoration: 'none'
    },
    callToAction: {
        display: 'flex',
        alignSelf: 'center',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        boxShadow: theme.shadows[1],
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 32,
        padding: '0 30px',
        transition: 'all .15s ease',
        margin: 'auto'
    },
    linkContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center',
        margin: 0,
        width: 'auto'
    }
})

const Hoverable = posed.div({
    hoverable: true,
    init: {
        scale: 1
    },
    hover: {
        scale: 1.05
    }
});

class ContactButton extends React.Component<any, any> {
    public render() {
        const { classes, style } = this.props;
        return (
            <div className={classes.linkContainer}>
                <Hoverable className={classes.hover}>
                    <Link to="/contact" className={classes.link}>
                        <Button className={classes.callToAction} style={style || {}}>
                            Contact
                        </Button>
                    </Link>
                </Hoverable>
            </div>
        )
    }
}

export default withStyles(styles)(ContactButton);