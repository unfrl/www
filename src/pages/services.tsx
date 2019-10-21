import React from 'react'

import { MainLayout } from "../layouts"
import { PageHeader, ImageTransition, SEO } from '../components';
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
                                Due to the increasing capabilities of browsers Web Apps are now able to solve more problems than ever before. One of the major perks of web apps is that customers can get a running instance of your product just by navigating to a page, no installation necessary. Furthermore technologies like Electron and Progressive Web Apps (PWAs) have made it possible leverage the benefits of Web Apps in a more traditional feeling package with offline functionality. Using web-tech to build your app is one of the easiest ways to maintain a high level of agility as well as ensuring your clients are always using the latest version of your app without annoying updates that interrupt their productivity.
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
                                These days almost no technology is as familiar to users as Mobile apps. User's commonly search the app store for solutions to their problems and, unlike with some other platforms, an app store can market your app for you! Mobile apps also benefit from the tremendous amount of contextual data provided to them from the user's phone, be it something passive like location or the ability to have users take photos and receive notifications. Mobile apps are at the forefront of cutting edge user experiences and can arguably create a more intimiate experience than any other platform.
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
                                For some scenarios, such as deployments that might interact with on-site equipment, Desktop apps provide an easier workflow than other platform. Desktop apps also provide a user with much more screen real estate which makes it easier for powerful or data-intensive tools with complex UIs to remain usable.
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
                                Cross-Platform apps let users interact with your app wherever they are. In many cases a Web app designed as a PWA will provide many of the same benefits, but even today there are still speed and aesthetic benefits to having natively implemented Cross-Platform apps. Among these are the fact that you get to take advantage of platform specific capabilities and potentially do things like configure the host.
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
        )
    }

    render() {
        const { classes } = this.props;
        return (
            <MainLayout>
                <SEO title="Services" />
                <div className={classes.root}>
                    <div>
                        <PageHeader title="Services" />
                    </div>
                    <this.RenderSections />
                </div>
            </MainLayout>
        )
    }
}

export default withStyles(styles)(Services);