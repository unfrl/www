import React from 'react'

import { withStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

import { MainLayout } from "../layouts"
import { PageHeader, ImageTransition } from '../components';
import dreamTeam from '../assets/dreamTeam.jpg';
import { CardHeader, Card, CardContent } from '@material-ui/core';

const styles: any = (theme: Theme) => ({
    root: {
        flexGrow: 1
    },
    header: {
        width: '100%',
        textAlign: 'center',
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4)
    },
    bottomMargin: {
        marginBottom: 24,
    },
    teamImg: {
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[2]
    },
    teamProfile: {
        padding: theme.spacing(2),
        textAlign: 'center'
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: theme.shape.borderRadius,
        display: 'block',
        margin: 'auto'
    },
    bio: {
        marginTop: theme.spacing(),
        textAlign: 'left'
    },
    cardContent: {
        display: 'flex',
    },
    carImage: {
        maxWidth: '50%'
    }
});

class About extends React.Component<any, any> {
    render() {
        const { classes } = this.props;
        return (
            <MainLayout>
                <div className={classes.root}>
                    <PageHeader title="About" />
                </div>
                <Grid container spacing={3}>
                    <Grid item sm={12} className={classes.bottomMargin}>
                        <Card>
                            <CardHeader
                                title="We're a Co-op!"
                                subheader="Like a real one, where the workers own everything!" />
                            <CardContent>
                                Talk about what a co-op is and what that means in terms of how it affects our culture.
                        </CardContent>
                        </Card>
                    </Grid>
                    <Grid item className={classes.bottomMargin}>
                        <ImageTransition src={dreamTeam} className={classes.teamImg} />
                    </Grid>

                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <Paper className={classes.teamProfile}>
                                <div>
                                    <Avatar className={classes.avatar} alt="Andrew Noyes" src="https://avatars0.githubusercontent.com/u/9619457?v=4.png" />
                                </div>
                                <Typography component="p" className={classes.bio}>
                                    Lorem ipsum dolor amet mustache neutra hammock, man bun DIY disrupt asymmetrical cronut. Meh waistcoat iceland cray humblebrag. Palo santo kickstarter trust fund taxidermy, pickled listicle ramps street art gluten-free leggings fixie. Neutra pop-up +1 snackwave leggings ugh, succulents lyft organic kickstarter salvia activated charcoal glossier flexitarian.
                            </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Paper className={classes.teamProfile}>
                                <div>
                                    <Avatar className={classes.avatar} alt="Matthew Monahan" src="https://avatars0.githubusercontent.com/u/6914238?v=4.png" />
                                </div>
                                <Typography component="p" className={classes.bio}>
                                    Lorem ipsum dolor amet mustache neutra hammock, man bun DIY disrupt asymmetrical cronut. Meh waistcoat iceland cray humblebrag. Palo santo kickstarter trust fund taxidermy, pickled listicle ramps street art gluten-free leggings fixie. Neutra pop-up +1 snackwave leggings ugh, succulents lyft organic kickstarter salvia activated charcoal glossier flexitarian.
                            </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Paper className={classes.teamProfile}>
                                <div>
                                    <Avatar className={classes.avatar} alt="Brett Gardiner" src="https://avatars0.githubusercontent.com/u/20871604?v=4.png" />
                                </div>
                                <Typography component="p" className={classes.bio}>
                                    Lorem ipsum dolor amet mustache neutra hammock, man bun DIY disrupt asymmetrical cronut. Meh waistcoat iceland cray humblebrag. Palo santo kickstarter trust fund taxidermy, pickled listicle ramps street art gluten-free leggings fixie. Neutra pop-up +1 snackwave leggings ugh, succulents lyft organic kickstarter salvia activated charcoal glossier flexitarian.
                            </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </MainLayout>
        );
    }
}

export default withStyles(styles)(About);
