import React, { FunctionComponent } from "react";
import {
    CardHeader,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Avatar,
    makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    avatar: {
        height: 50,
        width: 50,
        borderRadius: theme.shape.borderRadius,
        display: "block",
        margin: "auto",
    },
    body: {
        marginTop: theme.spacing(),
        textAlign: "left",
    },
    media: {
        width: 200,
        height: 200,
        alignSelf: "center",
        borderRadius: theme.shape.borderRadius,
    },
    content: {
        display: "flex",
        flexDirection: "column",
    },
}));

export interface IBiographyProps {
    name: string;
    image: any;
    avatarSrc: string;
    body: string | React.ReactNode;
    title?: string;
}

const Biography: FunctionComponent<IBiographyProps> = props => {
    const classes = useStyles();
    const { name, image, avatarSrc, body, title } = props;

    return (
        <Card>
            <CardHeader
                avatar={<Avatar className={classes.avatar} alt={name} src={avatarSrc} />}
                title={name}
                subheader={title || "Co-Founder"}
            />

            <CardContent className={classes.content}>
                <CardMedia className={classes.media} image={image} title={name} />
                <Typography component="p" className={classes.body}>
                    {body}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Biography;
