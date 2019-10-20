import { graphql, navigate } from "gatsby"
import * as React from "react"
import { MainLayout } from "../layouts"
import { withStyles, Theme } from '@material-ui/core/styles';
import BuildIcon from '@material-ui/icons/Build';
import WebIcon from '@material-ui/icons/Web';
import MobileIcon from '@material-ui/icons/MobileFriendly';
import { Grid, Typography, Paper, IconButton, Button } from "@material-ui/core";
import { ImageTransition, PageHeader } from "../components";

import polestarMobile from '../assets/polestar-mobile.png';

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  // data: {
  //   site: {
  //     siteMetadata: {
  //       siteName: string
  //     }
  //   }
  // },
  classes: any
}

// export const pageQuery = graphql`
//   query IndexQuery {
//     site {
//       siteMetadata {
//         siteName
//       }
//     }
//   }
// `

const styles: any = (theme: Theme) => ({
  root: {
    width: '100%',
  },
  card: {
    ...theme.mixins.gutters(),
    padding: theme.spacing(4),
    marginTop: theme.spacing(5),
  },
  cardTitle: {
    textAlign: 'center',
  },
  cardDescription: {
    textAlign: 'center',
    marginTop: theme.spacing(),
  },
  services: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceTitle: {
    marginTop: 2,
    textAlign: 'center',
  }
});

const services = [
  { Title: 'Full Stack', Icon: BuildIcon, Destination: 'services#cross-platform' },
  { Title: 'Web Apps', Icon: WebIcon, Destination: 'services#web' },
  { Title: 'Mobile Apps', Icon: MobileIcon, Destination: 'services#mobile' }
];

class IndexPage extends React.Component<IndexPageProps> {
  readonly hello = `Hello`
  public render() {
    const { classes } = this.props;
    return (
      <MainLayout>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <PageHeader title="What we do" />
              <Typography variant="body1" align="center" gutterBottom>
                We provide custom software solutions for businesses of any size using the lastest in web & mobile technologies to ensure our customers, and yours, always have the best possible experience.
                        </Typography>

              <Typography variant="body1" align="center" gutterBottom>
                Our affordable services use modern design principles and processes to provide our customers with anything from small internal tools to large enterprise applications to web/mobile apps with huge user bases.
                        </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ImageTransition src={polestarMobile} />
            </Grid>
          </Grid>

          <Paper className={classes.card}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <div className={classes.services}>
                  {
                    services.map((service, index) => {
                      const { Icon, Title, Destination } = service;
                      return (
                        <Grid item xs key={index} className={classes.serviceItem}>
                          <Button color="secondary" onClick={() => { navigate(Destination) }}>
                            <Icon fontSize="large" />
                          </Button>
                          <Typography variant="caption" className={classes.serviceTitle}>
                            {Title}
                          </Typography>
                        </Grid>
                      )
                    })
                  }
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h5" className={classes.cardTitle}>
                  What We Do
                            </Typography>
                <Typography className={classes.cardDescription}>
                  Blah blah blah...
                            </Typography>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </MainLayout>
    )
  }
}

export default withStyles(styles)(IndexPage);