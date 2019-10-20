
import { Theme, withStyles, Grid, Card, CardHeader, CardContent, Typography, Icon, Chip, Avatar, Badge, Tooltip, createStyles } from "@material-ui/core";
import React from "react";
import MoneyOffRoundedIcon from '@material-ui/icons/MoneyOffRounded';

import { MainLayout } from "../layouts"
import { PageHeader } from "../components";
import { green } from "@material-ui/core/colors";


const styles: any = (theme: Theme) => ({
    stepIcon: {
        width: 30,
        height: 30,
        alignSelf: 'center',
        color: '#fff',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    },
    stepTitle: {
        display: 'flex'
    },
    stepTitleText: {
        marginLeft: theme.spacing(2)
    },
    freeBadge: {
        background: 'mediumseagreen',
    },
    smallIcon: {
        width: 15
    }
});

const processSteps = [
    { Title: 'Discovery', Subtitle: 'What are we building?', isFree: true, Body: "Likely the most important stage. We work with you to figure out what exactly needs to be built. This stage is mostly intended to answer high level questions like what type of deliverables are needed. Do we need to write an API? A web app? both? Another goal here is to detemine the scope of the app and develop a budget. This stage is free and at the end of it both sides can decide if they want to continue." },
    { Title: 'Design', Subtitle: <a><u><i><b>What</b></i></u> are we building?</a>, Body: "We take the output of the Discovery phase and layout an architecture that can make it a reality. We focus on simplicity and recognized patterns to ensure the deliverable is easy to read, easy to maintain, and is portable. If the project has a UI component we work closely with you to create a beautiful interface your users will love to work with." },
    { Title: 'Development', Subtitle: 'Time to code your project, ensuring that its well tested and performant', Body: "We do what we do best, write code! This is an iterative process where we meet with you every 1-2 weeks to showcase new features and make adjustments to the development plan to ensure we stay agile. We write code with high code coverage and good documentation to ensure that we, or someone else, can easily come in and continue working on the codebase after the project is complete." },
    { Title: 'Delivery', Subtitle: 'Give your product the launch it deserves!', Body: "Delivery can vary dramatically depending on the type of project, which will have been determined in the Discovery phase. For example, a simple mobile app's deliver might be as simple as publishing the app to the relevant store. It typically will be more involved and can include anything from giving the client credentials to whatever external services the app relies on to training the client's employees on how to maintain and update the app on their own." },
    { Title: 'Maintenance', Subtitle: 'Keep your app running smoothly', Body: "Maintaining software is likely the most underrated stage in the Software Development Lifecyle (SDLC). Code needs to be updated to stay secure and ensure the performance tracks with your users' expectaions over time. We use block-time contracts to ensure we can respond quickly to your app's needs and keep it running at its best." }
]

const SmallBorderedBadge = withStyles((theme: Theme) =>
    createStyles({
        badge: {
            right: -3,
            border: `2px solid ${theme.palette.background.default}`,
            padding: '0 4px',
        },
    }),
)(Badge);

class Process extends React.Component<any, any> {
    render() {
        const { classes } = this.props;
        return (
            <MainLayout>
                <div className={classes.root}>
                    <div>
                        <PageHeader title="Process" subtitle="How we build" />
                    </div>
                    <this.RenderSections />
                </div>
            </MainLayout>
        )
    }

    RenderSections = () => {
        const { classes } = this.props;
        return (
            <Grid container
                direction="row"
                justify="center"
                alignItems="stretch"
                spacing={3}>
                {
                    processSteps.map((step, index) => {
                        const { Title, Subtitle, isFree, Body } = step;
                        return (
                            <Grid item xs={12} md={6} className={classes.test}>
                                <div>
                                    <Typography variant="h4" className={classes.stepTitle}>
                                        {isFree ? (
                                            <Tooltip placement='top-end' title="This step is FREE 🤑">
                                                <SmallBorderedBadge badgeContent={<MoneyOffRoundedIcon className={classes.smallIcon} />} classes={{ badge: classes.freeBadge }} overlap='circle'>
                                                    <Avatar className={classes.stepIcon}>{index + 1}</Avatar>
                                                </SmallBorderedBadge>
                                            </Tooltip>) :
                                            (
                                                <Avatar className={classes.stepIcon}>{index + 1}</Avatar>
                                            )}
                                        <span className={classes.stepTitleText}>{Title}</span>
                                    </Typography>
                                    <Typography variant="subtitle1" color='textSecondary'>{Subtitle}</Typography>
                                </div>
                                <Typography>
                                    {Body}
                                </Typography>
                            </Grid>
                        )
                    })
                }
            </Grid>
        )
    }
}

export default withStyles(styles)(Process);