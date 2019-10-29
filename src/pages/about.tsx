import React, { Fragment, FunctionComponent } from "react";
import { CardHeader, Card, CardContent, Typography, Grid } from "@material-ui/core";

import { MainLayout } from "../layouts";
import { PageHeader, SEO, Biography } from "../components";

import androo from "../assets/androo-min.jpg";
import matt from "../assets/matt-min.jpg";

const biographies = [
    {
        name: "Andrew Noyes",
        image: androo,
        avatarSrc: "https://avatars0.githubusercontent.com/u/9619457?v=4.png",
        body: (
            <Fragment>
                I took my first programming class in high school, developing a simple video game
                using Microsoft Basic, and I hated it! Luckily, I rediscovered programming and
                software development in college - this time no Basic was involved - and I loved it!
                I went on to graduate with a B.S. in CIS.
                <br />
                <br />
                What I love most about software, and technology in general, is the breadth of
                industries it can be applied to solve problems. I've been fortunate enough to work
                across a number of these industries from transmission line engineering to tinkering
                with image cytometers in biotech.
                <br />
                <br />
                These experiences taught me the importance of working with the user during planning,
                design, and development. The best solutions are crafted iteratively with a
                consistent feedback loop to ensure the end user's needs are being met and their
                problems are <i>actually</i> being solved.
            </Fragment>
        ),
    },
    {
        name: "Matthew Monahan",
        image: matt,
        avatarSrc: "https://avatars0.githubusercontent.com/u/6914238?v=4.png",
        body: (
            <Fragment>
                I went into college planning on getting a Biology degree and working in a lab doing
                what I assured myself would be important work. I have always loved computers and
                helped run the Gaming and Programming club in High School but for some reason never
                considered it a career path, that all changed after I took an intro CS course my
                sophomore year. I loved the ideas and the ability to make tools to solve problems so
                much I switched majors that semester and haven't looked back.
            </Fragment>
        ),
    },
];

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
                {biographies.map(biography => (
                    <Grid item xs={12} sm={6} key={biography.name}>
                        <Biography {...biography} />
                    </Grid>
                ))}
            </Grid>
        </MainLayout>
    );
};

export default About;
