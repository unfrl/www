import React, { FunctionComponent } from "react";
import {
    useTheme,
    useMediaQuery,
    makeStyles,
    Paper,
    Grid,
    Typography,
    BottomNavigation,
    BottomNavigationAction,
    Button,
} from "@material-ui/core";
import BuildIcon from "@material-ui/icons/Build";
import WebIcon from "@material-ui/icons/Web";
import MobileIcon from "@material-ui/icons/MobileFriendly";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import { navigate } from "gatsby";

const useStyles = makeStyles(theme => ({
    card: {
        ...theme.mixins.gutters(),
        padding: theme.spacing(4),
        marginTop: theme.spacing(5),
    },
    cardTitle: {
        textAlign: "center",
    },
    cardDescription: {
        textAlign: "center",
        marginTop: theme.spacing(),
    },
    services: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    serviceItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    serviceTitle: {
        marginTop: 2,
        textAlign: "center",
    },
    bottomNav: {
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
    },
}));

const services = [
    { Title: "Web", Icon: WebIcon, Destination: "services#web" },
    { Title: "Mobile", Icon: MobileIcon, Destination: "services#mobile" },
    { Title: "Desktop", Icon: DesktopWindowsIcon, Destination: "services#desktop" },
    { Title: "Full Stack", Icon: BuildIcon, Destination: "services#cross-platform" },
];

const ServicesCard: FunctionComponent = () => {
    const classes = useStyles();
    const theme = useTheme();
    const fullSize = useMediaQuery(theme.breakpoints.up("sm"));

    if (fullSize) {
        return (
            <Paper className={classes.card}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <div className={classes.services}>
                            {services.map((service, index) => {
                                const { Icon, Title, Destination } = service;
                                return (
                                    <Grid item xs key={Destination} className={classes.serviceItem}>
                                        <Button
                                            color="secondary"
                                            onClick={() => {
                                                navigate(Destination);
                                            }}
                                        >
                                            <Icon fontSize="large" />
                                        </Button>
                                        <Typography
                                            variant="caption"
                                            className={classes.serviceTitle}
                                        >
                                            {Title}
                                        </Typography>
                                    </Grid>
                                );
                            })}
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5" className={classes.cardTitle}>
                            Any Project
                        </Typography>
                        <Typography className={classes.cardDescription}>
                            Deployed how you want it
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        );
    }

    return (
        <BottomNavigation showLabels className={classes.bottomNav}>
            {services.map((service, index) => {
                const { Icon, Title, Destination } = service;
                return (
                    <BottomNavigationAction
                        key={Destination}
                        label={Title}
                        icon={<Icon color="secondary" fontSize="small" />}
                        onClick={() => {
                            navigate(Destination);
                        }}
                    />
                );
            })}
        </BottomNavigation>
    );
};

export default ServicesCard;
