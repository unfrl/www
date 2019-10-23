import React, { FunctionComponent } from "react";
import { Grid } from "@material-ui/core";

import { MainLayout } from "../layouts";
import { PageHeader, SEO, ProcessStep } from "../components";

const processSteps = [
    {
        title: "Discovery",
        subtitle: "What are we building?",
        isFree: true,
        body:
            "Likely the most important stage. We work with you to figure out what exactly needs to be built. This stage is mostly intended to answer high level questions like what type of deliverables are needed. Do we need to write an API? A web app? Both? Another goal here is to determine the scope of the app and develop a budget. This stage is free and at the end of it both sides can decide if they want to continue.",
    },
    {
        title: "Design",
        subtitle: (
            <a>
                <u>
                    <i>
                        <b>What</b>
                    </i>
                </u>{" "}
                are we building?
            </a>
        ),
        body:
            "We take the output of the Discovery phase and layout an architecture that can make it a reality. We focus on simplicity and recognized patterns to ensure the deliverable is easy to read, easy to maintain, and is portable. If the project has a UI component we work closely with you to create a beautiful interface your users will love to work with.",
    },
    {
        title: "Development",
        subtitle: "Time to code your project, ensuring that it's well tested and performant",
        body:
            "We do what we do best, write code! This is an iterative process where we meet with you every 1-2 weeks to showcase new features and make adjustments to the development plan to ensure we stay agile. We write code with high test coverage and good documentation to ensure that we, or someone else, can easily come in and continue working on the codebase after the project is complete.",
    },
    {
        title: "Delivery",
        subtitle: "Give your product the launch it deserves!",
        body:
            "Delivery can vary dramatically depending on the type of project, which will have been determined in the Discovery phase. For example, a mobile app's delivery might be as simple as publishing the app to the relevant store. Typically, the delivery will be more involved. It can range from providing the client credentials to whatever external services the app relies on, to training the client's employees on how to maintain and update the app on their own.",
    },
    {
        title: "Maintenance",
        subtitle: "Keep your app running smoothly",
        body:
            "Maintaining software is likely the most underrated stage in the Software Development Lifecyle (SDLC). Code needs to be updated to stay secure and ensure the performance tracks with your users' expectaions over time. We use block-time contracts to ensure we can respond quickly to your app's needs and keep it running at its best.",
    },
];

const Process: FunctionComponent = () => {
    return (
        <MainLayout>
            <SEO title="Process" keywords={["process"]} />
            <PageHeader title="Process" subtitle="Code → Review → Repeat" />
            <Grid container direction="row" justify="center" alignItems="stretch" spacing={3}>
                {processSteps.map((step, index) => (
                    <ProcessStep key={index} index={index} {...step} />
                ))}
            </Grid>
        </MainLayout>
    );
};

export default Process;
