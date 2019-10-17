import React from 'react'

import MainLayout from "../layouts"
import { PageHeader, ImageTransition } from '../components';
import { Theme, Card, CardHeader, CardContent, Grid, useMediaQuery, useTheme, CardMedia } from '@material-ui/core'
import { withStyles } from '@material-ui/styles';
import webapp_img from '../assets/undraw_website.svg';
import mobileapp_img from '../assets/undraw_mobileapp_teardown.svg';
import desktopapp_img from '../assets/undraw_desktop.svg';
import crossplatform_img from '../assets/undraw_device_sync.svg'

const styles: any = (theme: Theme) => ({
    root: {
        flexGrow: 1
    },
    cardImage: {
        minWidth: 151,
        margin: 'auto'
    },
    cardContent: {
        display: 'flex',
    },
    anchor: {
        display: "block",
        position: "relative",
        top: "-50px",
        visibility: "hidden"
    }
});

class Services extends React.Component<any, any> {
    RenderSections = () => {
        const theme = useTheme();
        const fullSize = useMediaQuery(theme.breakpoints.up('sm'));
        const textSpacing = fullSize ? 6 : 12;
        const { classes } = this.props;
        return (
            <MainLayout>
                <div className={classes.root}>
                    <div>
                        <PageHeader title="Services" subtitle="We make stuff thats good and whatnot" />
                    </div>
                    <Grid container spacing={3}>
                        {fullSize &&
                            <Grid item xs={6}>
                                <ImageTransition src={webapp_img} />
                            </Grid>
                        }
                        <a className={classes.anchor} id="web"></a>
                        <Grid item xs={textSpacing}>
                            <Card>
                                <CardHeader
                                    title="Web Apps"
                                    subheader="The future is web!" />
                                <div className={classes.cardContent}>
                                    <CardContent>
                                        Lorem ipsum dolor amet mustache neutra hammock, man bun DIY disrupt asymmetrical cronut. Meh waistcoat iceland cray humblebrag. Palo santo kickstarter trust fund taxidermy, pickled listicle ramps street art gluten-free leggings fixie. Neutra pop-up +1 snackwave leggings ugh, succulents lyft organic kickstarter salvia activated charcoal glossier flexitarian.
                            </CardContent>
                                    {!fullSize &&
                                        <CardMedia
                                            component="img"
                                            className={classes.cardImage}
                                            image={webapp_img}
                                            alt="web app image"
                                        />
                                    }
                                </div>
                            </Card>
                        </Grid>
                        <br />
                        <Grid item xs={textSpacing}>
                            <Card>
                                <CardHeader
                                    title="Mobile Apps"
                                    subheader="Complex Interactivity!" />
                                <div className={classes.cardContent}>
                                    <CardContent>
                                        Lorem ipsum dolor amet mustache neutra hammock, man bun DIY disrupt asymmetrical cronut. Meh waistcoat iceland cray humblebrag. Palo santo kickstarter trust fund taxidermy, pickled listicle ramps street art gluten-free leggings fixie. Neutra pop-up +1 snackwave leggings ugh, succulents lyft organic kickstarter salvia activated charcoal glossier flexitarian.
                                </CardContent>
                                    {!fullSize &&
                                        <CardMedia
                                            component="img"
                                            className={classes.cardImage}
                                            image={mobileapp_img}
                                            alt="mobile app image"
                                        />
                                    }
                                </div>
                            </Card>
                        </Grid>
                        <a className={classes.anchor} id="mobile"></a>
                        {fullSize &&
                            <Grid item xs={6}>
                                <ImageTransition src={mobileapp_img} />
                            </Grid>
                        }
                        <br />
                        {fullSize &&
                            <Grid item xs={6}>
                                <ImageTransition src={desktopapp_img} />
                            </Grid>
                        }
                        <a className={classes.anchor} id="desktop"></a>
                        <Grid item xs={textSpacing}>
                            <Card>
                                <CardHeader
                                    title="Desktop Apps"
                                    subheader="Powerful tooling!" />
                                <div className={classes.cardContent}>
                                    <CardContent>
                                        Lorem ipsum dolor amet mustache neutra hammock, man bun DIY disrupt asymmetrical cronut. Meh waistcoat iceland cray humblebrag. Palo santo kickstarter trust fund taxidermy, pickled listicle ramps street art gluten-free leggings fixie. Neutra pop-up +1 snackwave leggings ugh, succulents lyft organic kickstarter salvia activated charcoal glossier flexitarian.
                            </CardContent>
                                    {!fullSize &&
                                        <CardMedia
                                            component="img"
                                            className={classes.cardImage}
                                            image={desktopapp_img}
                                            alt="desktop app image"
                                        />
                                    }
                                </div>
                            </Card>
                        </Grid>
                        <br />
                        <Grid item xs={textSpacing}>
                            <Card>
                                <CardHeader
                                    title="Cross Platform"
                                    subheader="Run anywhere!" />
                                <div className={classes.cardContent}>
                                    <CardContent>
                                        Lorem ipsum dolor amet mustache neutra hammock, man bun DIY disrupt asymmetrical cronut. Meh waistcoat iceland cray humblebrag. Palo santo kickstarter trust fund taxidermy, pickled listicle ramps street art gluten-free leggings fixie. Neutra pop-up +1 snackwave leggings ugh, succulents lyft organic kickstarter salvia activated charcoal glossier flexitarian.
                            </CardContent>
                                    {!fullSize &&
                                        <CardMedia
                                            component="img"
                                            className={classes.cardImage}
                                            image={crossplatform_img}
                                            alt="desktop app image"
                                        />
                                    }
                                </div>
                            </Card>
                        </Grid>
                        <a className={classes.anchor} id="cross-platform"></a>
                        {fullSize &&
                            <Grid item xs={6}>
                                <ImageTransition src={crossplatform_img} />
                            </Grid>
                        }
                    </Grid>
                </div>
            </MainLayout>
        )
    }

    render() {
        return (
            <this.RenderSections />
        )
    }
}

export default withStyles(styles)(Services);