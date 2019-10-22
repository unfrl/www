
import { Theme, withStyles, Grid, Card, CardHeader, CardContent, Typography, Icon, Chip, Avatar, Badge, Tooltip, createStyles, useTheme, useMediaQuery, IconButton, ClickAwayListener, Button } from "@material-ui/core";
import React from "react";
import MoneyOffRoundedIcon from "@material-ui/icons/MoneyOffRounded";

import { MainLayout } from "../layouts";
import { PageHeader, SEO } from "../components";

const styles: any = (theme: Theme) => ({
    stepIcon: {
        width: 30,
        height: 30,
        alignSelf: "center",
        color: "#fff",
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    },
    stepTitle: {
        display: "flex",
    },
    stepTitleText: {
        marginLeft: theme.spacing(2),
    },
    freeMobileStepTitleText: {
        marginLeft: theme.spacing(1)
    },
    smallIcon: {
        width: 15,
    },
    freeButton: {
        justifyContent: 'left',
        paddingLeft: 0,
        minWidth: 30
    },
});

const processSteps = [
    {
        Title: "Discovery",
        Subtitle: "What are we building?",
        isFree: true,
        Body:
            "Likely the most important stage. We work with you to figure out what exactly needs to be built. This stage is mostly intended to answer high level questions like what type of deliverables are needed. Do we need to write an API? A web app? Both? Another goal here is to determine the scope of the app and develop a budget. This stage is free and at the end of it both sides can decide if they want to continue.",
    },
    {
        Title: "Design",
        Subtitle: (
            <a>
                <u>
                    <i>
                        <b>What</b>
                    </i>
                </u>{" "}
                are we building?
            </a>
        ),
        Body:
            "We take the output of the Discovery phase and layout an architecture that can make it a reality. We focus on simplicity and recognized patterns to ensure the deliverable is easy to read, easy to maintain, and is portable. If the project has a UI component we work closely with you to create a beautiful interface your users will love to work with.",
    },
    {
        Title: "Development",
        Subtitle: "Time to code your project, ensuring that it's well tested and performant",
        Body:
            "We do what we do best, write code! This is an iterative process where we meet with you every 1-2 weeks to showcase new features and make adjustments to the development plan to ensure we stay agile. We write code with high test coverage and good documentation to ensure that we, or someone else, can easily come in and continue working on the codebase after the project is complete.",
    },
    {
        Title: "Delivery",
        Subtitle: "Give your product the launch it deserves!",
        Body:
            "Delivery can vary dramatically depending on the type of project, which will have been determined in the Discovery phase. For example, a mobile app's delivery might be as simple as publishing the app to the relevant store. Typically, the delivery will be more involved. It can range from providing the client credentials to whatever external services the app relies on, to training the client's employees on how to maintain and update the app on their own.",
    },
    {
        Title: "Maintenance",
        Subtitle: "Keep your app running smoothly",
        Body:
            "Maintaining software is likely the most underrated stage in the Software Development Lifecyle (SDLC). Code needs to be updated to stay secure and ensure the performance tracks with your users' expectaions over time. We use block-time contracts to ensure we can respond quickly to your app's needs and keep it running at its best.",
    },
];

const SmallBorderedBadge = withStyles((theme: Theme) =>
    createStyles({
        badge: {
            right: -3,
            border: `2px solid ${theme.palette.background.default}`,
            padding: '0 4px',
            background: 'mediumseagreen',
        },
    })
)(Badge);

export interface IProcessState {
    freeTooltipOpen: boolean
}

class Process extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            freeTooltipOpen: false
        }
    }

    handleTooltipClose = () => {
        this.setState({ freeTooltipOpen: false });
    }

    handleTooltipOpen = () => {
        this.setState({ freeTooltipOpen: true });
    }

    render() {
        const { classes } = this.props;
        return (
            <MainLayout>
                <SEO title="Process" />
                <div className={classes.root}>
                    <div>
                        <PageHeader title="Process" subtitle="Code → Review → Repeat" />
                    </div>
                    <this.RenderSections />
                </div>
            </MainLayout>
        );
    }

    RenderSections = () => {
        return (
            <Grid container
                direction="row"
                justify="center"
                alignItems="stretch"
                spacing={3}>
                {
                    processSteps.map((step, index) => {
                        const { isFree } = step;
                        if (isFree) {
                            return (
                                <this.RenderFreeStep data={{ ...step, StepNumber: index }} />
                            )
                        }
                        return (
                            <this.RenderStep data={{ ...step, StepNumber: index }} />
                        )
                    })
                }
            </Grid>
        )
    }

    RenderStep = (data: any) => {
        const theme = useTheme();
        const fullSize = useMediaQuery(theme.breakpoints.up('sm'));
        const { classes } = this.props;
        const { Title, Subtitle, Body, StepNumber } = data.data;

        if (fullSize) {
            return (
                <Grid item xs={12} md={6}>
                    <div>
                        <Typography variant="h4" className={classes.stepTitle}>
                            <Avatar className={classes.stepIcon}>{StepNumber + 1}</Avatar>
                            <span className={classes.stepTitleText}>{Title}</span>
                        </Typography>
                        <Typography variant="subtitle1" color='textSecondary'>{Subtitle}</Typography>
                    </div>
                    <Typography>
                        {Body}
                    </Typography>
                </Grid>
            )
        }
        return (
            <Grid item xs={12} md={6}>
                <div>
                    <Typography variant="h4" className={classes.stepTitle}>
                        <Avatar className={classes.stepIcon}>{StepNumber + 1}</Avatar>
                        <span className={classes.stepTitleText}>{Title}</span>
                    </Typography>
                    <Typography variant="subtitle1" color='textSecondary'>{Subtitle}</Typography>
                </div>
                <Typography>
                    {Body}
                </Typography>
            </Grid>
        )
    }

    RenderFreeStep = (data: any) => {
        const theme = useTheme();
        const fullSize = useMediaQuery(theme.breakpoints.up('sm'));
        const { classes } = this.props;
        const { Title, Subtitle, Body, StepNumber } = data.data;
        if (fullSize) {
            return (
                <Grid item xs={12} md={6}>
                    <div>
                        <Typography variant="h4" className={classes.stepTitle}>
                            <Tooltip placement='top-end' title="This step is FREE 🤑">
                                <SmallBorderedBadge badgeContent={<MoneyOffRoundedIcon className={classes.smallIcon} />} overlap='circle'>
                                    <Avatar className={classes.stepIcon}>{StepNumber + 1}</Avatar>
                                </SmallBorderedBadge>
                            </Tooltip>
                            <span className={classes.stepTitleText}>{Title}</span>
                        </Typography>
                        <Typography variant="subtitle1" color='textSecondary'>{Subtitle}</Typography>
                    </div>
                    <Typography>
                        {Body}
                    </Typography>
                </Grid>
            )
        }

        return (
            <Grid item xs={12} md={6}>
                <div>
                    <Typography variant="h4" className={classes.stepTitle}>
                        <ClickAwayListener onClickAway={this.handleTooltipClose}>
                            <div>
                                <Tooltip
                                    PopperProps={{
                                        disablePortal: true,
                                    }}
                                    onClose={this.handleTooltipClose}
                                    open={this.state.freeTooltipOpen}
                                    disableFocusListener
                                    disableHoverListener
                                    disableTouchListener
                                    placement='right-start' title="This step is FREE 🤑">
                                    <Button onClick={this.handleTooltipOpen} className={classes.freeButton}>
                                        <SmallBorderedBadge badgeContent={<MoneyOffRoundedIcon className={classes.smallIcon} />} overlap='circle'>
                                            <Avatar className={classes.stepIcon}>{StepNumber + 1}</Avatar>
                                        </SmallBorderedBadge>
                                    </Button>
                                </Tooltip>
                            </div>
                        </ClickAwayListener>
                        <span className={classes.freeMobileStepTitleText}>{Title}</span>
                    </Typography>
                    <Typography variant="subtitle1" color='textSecondary'>{Subtitle}</Typography>
                </div>
                <Typography>
                    {Body}
                </Typography>
            </Grid>
        )

    }
}

export default withStyles(styles)(Process);
