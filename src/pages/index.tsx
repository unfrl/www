import React, { FunctionComponent } from "react";
import { makeStyles, Grid, Typography, Button } from "@material-ui/core";
import { Link } from "gatsby";

import { ImageTransition, SEO, ServicesCard } from "../components";
import { MainLayout } from "../layouts";
import polestarMobile from "../assets/polestar-mobile.webp";

const useStyles = makeStyles(theme => ({
    infoContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: theme.spacing(4),
        marginTop: theme.spacing(4),
        [theme.breakpoints.up("md")]: {
            marginTop: 0,
        },
    },
    infoTitle: {
        fontSize: "2.5rem",
        textAlign: "center",
        marginBottom: theme.spacing(2),
        [theme.breakpoints.up("md")]: {
            fontSize: "3rem",
            textAlign: "left",
        },
    },
    infoDescription: {
        textAlign: "center",
        [theme.breakpoints.up("md")]: {
            textAlign: "left",
        },
    },
    link: {
        textDecoration: "none",
        color: "inherit",
    },
    exploreServices: {
        display: "flex",
        marginTop: theme.spacing(4),
        justifyContent: "center",
        [theme.breakpoints.up("md")]: {
            justifyContent: "flex-start",
        },
    },
    largeImage: {
        padding: theme.spacing(4),
    },
}));

const IndexPage: FunctionComponent = () => {
    const classes = useStyles();

    return (
        <MainLayout>
            <SEO />
            <Grid container spacing={3}>
                <Grid item sm={12} md={6} className={classes.infoContainer}>
                    <Typography variant="h1" className={classes.infoTitle}>
                        Custom Software Design & Development
                    </Typography>
                    <Typography variant="body1" gutterBottom className={classes.infoDescription}>
                        Software solutions built using the latest in web and mobile technologies
                        tailored to your company's needs.
                    </Typography>
                    <div className={classes.exploreServices}>
                        <Link to="/services" className={classes.link}>
                            <Button variant="contained" size="large" color="primary">
                                Explore our Services
                            </Button>
                        </Link>
                    </div>
                </Grid>
                <Grid item sm={12} md={6}>
                    <ImageTransition
                        alt="mobile-app-screenshot"
                        src={polestarMobile}
                        className={classes.largeImage}
                    />
                </Grid>
            </Grid>
            <ServicesCard />
        </MainLayout>
    );
};

export default IndexPage;
