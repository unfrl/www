import { navigate } from "gatsby";
import * as React from "react";
import { withStyles, Theme } from "@material-ui/core/styles";
import BuildIcon from "@material-ui/icons/Build";
import WebIcon from "@material-ui/icons/Web";
import MobileIcon from "@material-ui/icons/MobileFriendly";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import { Link } from "gatsby";
import {
  Grid,
  Typography,
  Paper,
  Button,
  BottomNavigation,
  BottomNavigationAction,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";

import { ImageTransition, SEO } from "../components";
import { MainLayout } from "../layouts";
import polestarMobile from "../assets/polestar-mobile.webp";

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  classes: any;
}

const styles: any = (theme: Theme) => ({
  root: {
    width: "100%",
  },
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
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: 0,
    },
  },
  infoTitle: {
    fontSize: "2.5rem",
    textAlign: "center",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      fontSize: "3rem",
      textAlign: "left",
    },
  },
  infoDescription: {
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
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
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-start",
    },
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
  largeImage: {
    padding: theme.spacing(4)
  }
});

const services = [
  { Title: "Web", Icon: WebIcon, Destination: "services#web" },
  { Title: "Mobile", Icon: MobileIcon, Destination: "services#mobile" },
  { Title: "Desktop", Icon: DesktopWindowsIcon, Destination: "services#desktop" },
  { Title: "Full Stack", Icon: BuildIcon, Destination: "services#cross-platform" },
];

class IndexPage extends React.Component<IndexPageProps> {
  public render() {
    const { classes } = this.props;
    return (
      <MainLayout>
        <SEO title="Home" />
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} className={classes.infoContainer}>
              <Typography variant="h1" className={classes.infoTitle}>
                Custom Software Design & Development
                            </Typography>
              <Typography
                variant="body1"
                gutterBottom
                className={classes.infoDescription}
              >
                Software solutions built using the latest in web and mobile
                technologies tailored to your company's needs.
                            </Typography>
              <div className={classes.exploreServices}>
                <Link to="/services" className={classes.link}>
                  <Button variant="contained" size="large" color="primary">
                    Explore our Services
                                    </Button>
                </Link>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ImageTransition alt="mobile-app-screenshot" src={polestarMobile} className={classes.largeImage} />
            </Grid>
          </Grid>

          <this.Services />
        </div>
      </MainLayout>
    );
  }

  private Services = () => {
    const theme = useTheme();
    const fullSize = useMediaQuery(theme.breakpoints.up("sm"));
    const { classes } = this.props;

    if (fullSize) {
      return (
        <Paper className={classes.card}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <div className={classes.services}>
                {services.map((service, index) => {
                  const { Icon, Title, Destination } = service;
                  return (
                    <Grid item xs key={index} className={classes.serviceItem}>
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
}

export default withStyles(styles)(IndexPage);
