import React from "react";
import { withStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { CardHeader, Card, CardContent, CardMedia } from "@material-ui/core";

import { MainLayout } from "../layouts";
import { PageHeader, SEO } from "../components";

import androo from "../assets/androo.jpg";
import matt from "../assets/matt.jpg";

const styles: any = (theme: Theme) => ({
    root: {
        flexGrow: 1,
    },
    bottomMargin: {
        marginBottom: 24,
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: theme.shape.borderRadius,
        display: "block",
        margin: "auto",
    },
    bio: {
        marginTop: theme.spacing(),
        textAlign: "left",
    },
    media: {
        width: 200,
        height: 200,
        alignSelf: "center",
        borderRadius: 4,
    },
    content: {
        display: "flex",
        flexDirection: "column",
    },
});

class About extends React.Component<any, any> {
    render() {
        const { classes } = this.props;
        return (
            <MainLayout>
                <SEO title="About" />
                <div className={classes.root}>
                    <PageHeader title="About" />
                </div>
                <Grid container spacing={3}>
                    <Grid item xs={12} className={classes.bottomMargin}>
                        <Card>
                            <CardHeader
                                title="We're a Co-op!"
                                subheader="Like a real one, where the workers own everything!"
                            />
                            <CardContent>
                                <a>
                                    We believe the most effective software is written by{" "}
                                    <i>People That Care™</i>. Not only that they care about getting
                                    a paycheck, or completing the tasks they've been assigned, but
                                    about the client's problem being solved and the company itself
                                    succeeding. This isn't a new observation, software companies in
                                    particular know this well and have tried everything from bonuses
                                    to profit sharing to Employee Stock Options in an attempt to
                                    harness some of that legendary <i>Startup Energy©</i>. We
                                    believe the answer to this is obvious, let the laborers own the
                                    output of their work and they will inevitably be invested in it.
                                    Our goal with this model is to attract the absolute best talent
                                    and ensure that we can meet any of the needs of our clients.
                                </a>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Card>
                            <CardHeader
                                avatar={
                                    <Avatar
                                        className={classes.avatar}
                                        alt="Andrew Noyes"
                                        src="https://avatars0.githubusercontent.com/u/9619457?v=4.png"
                                    />
                                }
                                title="Andrew Noyes"
                                subheader="Co-Founder"
                            />

                            <CardContent className={classes.content}>
                                <CardMedia
                                    className={classes.media}
                                    image={androo}
                                    title="Andrew Noyes"
                                />
                                <Typography component="p" className={classes.bio}>
                                    I took my first programming class in high school, developing a
                                    simple video game using Microsoft Basic, and I hated it!
                                    Luckily, I rediscovered programming and software development in
                                    college - this time no Basic was involved - and I loved it! I
                                    went on to graduate with a B.S. in CIS.
                                    <br />
                                    <br />
                                    What I love most about software, and technology in general, is
                                    the breadth of industries it can be applied to solve problems.
                                    I've been fortunate enough to work across a number of these
                                    industries from transmission line engineering to tinkering with
                                    image cytometers in biotech.
                                    <br />
                                    <br />
                                    These experiences have taught me numerous lessons, but what
                                    stuck the most is the importance of working alongside the user
                                    during planning, design, and development. The best solutions are
                                    crafted iteratively with a consistent feedback loop to ensure
                                    the end user's needs are being met and their problems are{" "}
                                    <i>actually</i> being solved.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card>
                            <CardHeader
                                avatar={
                                    <Avatar
                                        className={classes.avatar}
                                        alt="Matthew Monahan"
                                        src="https://avatars0.githubusercontent.com/u/6914238?v=4.png"
                                    />
                                }
                                title="Matthew Monahan"
                                subheader="Co-Founder"
                            />

                            <CardContent className={classes.content}>
                                <CardMedia
                                    className={classes.media}
                                    image={matt}
                                    title="Matthew Monahan"
                                />
                                <Typography component="p" className={classes.bio}>
                                    I went into college planning on getting a Biology degree and
                                    working in a lab doing what I assured myself would be important
                                    work. I have always loved computers and helped run the Gaming
                                    and Programming club in High School but for some reason never
                                    considered it a career path, that all changed after I took an
                                    intro CS course my sophomore year. I loved the ideas and the
                                    ability to make tools to solve problems so much I switched
                                    majors that semester and haven't looked back.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* </Grid> */}
                </Grid>
            </MainLayout>
        );
    }
}

export default withStyles(styles)(About);
