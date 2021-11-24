import { Card, CardContent, CardHeader, Grid, Typography } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { PageHeader, SEO } from "../components";
import { MainLayout } from "../layouts";

const About: FunctionComponent = () => {
    return (
        <MainLayout>
            <SEO title="About" keywords={["about", "about us"]} />
            <PageHeader title="About" />
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card>
                        <CardHeader
                            title="We're a Co-op based in Salt Lake City, UT!"
                            subheader="Like a real one, where the workers own everything!"
                        />
                        <CardContent>
                            <Typography>
                                We believe the most effective software is written by{" "}
                                <i>People That Care™</i>. Not just about getting a paycheck, or
                                completing the tasks they've been assigned, but about the client's
                                problem being solved and the company itself succeeding. This isn't a
                                new observation, software companies in particular know this well and
                                have tried everything from bonuses to profit sharing to Employee
                                Stock Options in an attempt to harness some of that legendary{" "}
                                <i>Startup Energy©</i>. We believe the answer to this is obvious,
                                let the laborers own the output of their work and they will
                                inevitably be invested in it. Our goal with this model is to attract
                                the absolute best talent and ensure that we can meet any of the
                                needs of our clients.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </MainLayout>
    );
};

export default About;
