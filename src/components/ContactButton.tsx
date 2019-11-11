import React, { FunctionComponent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import posed from "react-pose";

const useStyles = makeStyles(theme => ({
    callToAction: {
        display: "flex",
        alignSelf: "center",
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        boxShadow: theme.shadows[1],
        borderRadius: 3,
        border: 0,
        color: "white",
        height: 32,
        padding: "0 30px",
        transition: "all .15s ease",
        margin: "auto",
    },
}));

const Hoverable = posed.div({
    hoverable: true,
    init: {
        scale: 1,
    },
    hover: {
        scale: 1.05,
    },
});

export interface IContactButtonProps {
    style?: React.CSSProperties;
}

const ContactButton: FunctionComponent<IContactButtonProps> = props => {
    const classes = useStyles();
    const { style } = props;

    return (
        <Hoverable>
            <Button className={classes.callToAction} href="mailto:hello@unfrl.com" style={style}>
                Contact
            </Button>
        </Hoverable>
    );
};

export default ContactButton;
