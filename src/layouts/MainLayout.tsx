import * as React from "react"
import { createMuiTheme, MuiThemeProvider, CssBaseline, AppBar, Typography, Theme, withStyles, Hidden, IconButton, Drawer, Container } from "@material-ui/core";
import { Link } from "gatsby";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import InvertColorsIcon from '@material-ui/icons/InvertColors';

import logo_dark from '../assets/logo-dark.png';
import logo_light from '../assets/logo-light.png';
import { ContactButton } from "../components";

const styles: any = (theme: Theme) => ({
  '@global': {
    img: {
      maxWidth: '100%',
    },
  },
  home: {
    textDecoration: 'none',
    color: 'inherit',
    marginLeft: theme.spacing(),
    marginRight: theme.spacing(),
    paddingLeft: 10,
    paddingRight: 10,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: -5
  },
  logo: {
    height: 30,
    marginRight: theme.spacing(),
  },
  company: {
    marginTop: -5
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 48,
    maxWidth: 1040,
    alignSelf: 'center',
    width: '100%'
  },
  navBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: theme.spacing()
  },
  drawerNav: {
    padding: theme.spacing(),
    width: 300,
    maxWidth: '100%',
  },
  drawerMenu: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: `-8px -8px 8px -8px`,
    paddingLeft: 8,
    boxShadow: theme.shadows[1]
  },
  drawerLinkTitle: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
  themeButton: {
    marginBottom: theme.spacing(2),
  },
  hamburgerNav: {
    marginRight: theme.spacing()
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  linkTitle: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    transition: 'opacity ease .2s',
    opacity: 1,
    '&:hover': {
      opacity: 0.7,
    }
  },
});

const links = [
  { to: '/services', title: 'Services' },
  { to: '/process', title: 'Process' },
  { to: '/about', title: 'About' },
]

const themeTypeValue = 'ThemeType';

class _MainLayout extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      drawerOpen: false,
      themeType: 'dark'
    }
  }

  componentDidMount() {
    const themeValue = localStorage.getItem(themeTypeValue) || 'dark';
    this.setState({
      themeType: themeValue
    })
  }

  render() {
    const theme = createMuiTheme({
      palette: {
        // primary: { "500" }
        type: this.state.themeType,
        // text: {
        //   secondary: '#f00'
        // }
      },
    });

    const { children, classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="sticky" color="default">
          <div className={classes.headerContainer}>
            <Link to="/" className={classes.home}>
              <img src={this.state.themeType === 'dark' ? logo_light : logo_dark} alt="KiwiLabs" className={classes.logo} />
              <Typography variant="h6" className={classes.company}>
                KiwiLabs
              </Typography>
            </Link>
            <Hidden smDown={true}>
              <nav className={classes.navBar}>
                {this.renderLinks()}
                <ContactButton style={{ marginLeft: 16 }} />
              </nav>
            </Hidden>
            <Hidden mdUp={true}>
              <IconButton
                color="inherit"
                aria-label="Menu"
                className={classes.hamburgerNav}
                onClick={this.toggleDrawerOpen}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={this.state.drawerOpen}
                onClose={this.toggleDrawerOpen}
              >
                <nav className={classes.drawerNav}>
                  {this.renderLinks(true)}
                  <ContactButton style={{ width: '100%' }} />
                </nav>
              </Drawer>
            </Hidden>
          </div>
        </AppBar>
        <Container maxWidth="lg">
          {children}
        </Container>
      </MuiThemeProvider>
    )
  }

  private toggleTheme = () => {
    const themeType = this.state.themeType === 'dark' ? 'light' : 'dark';
    localStorage.setItem(themeTypeValue, themeType);
    this.setState({
      themeType: themeType
    })
  }

  private renderLinks = (drawerNav: boolean = false) => {
    const { classes } = this.props;
    const linkTitle = `${classes.linkTitle} ${drawerNav ? classes.drawerLinkTitle : ''}`;
    const closeMenu = drawerNav
      ?
      <div className={classes.drawerMenu}>
        <IconButton onClick={this.toggleTheme}>
          <InvertColorsIcon />
        </IconButton>
        <IconButton onClick={this.toggleDrawerOpen} className={classes.hamburgerNav}>
          <CloseIcon />
        </IconButton>
      </div>
      : null;

    return (
      <React.Fragment>
        {closeMenu}
        {
          links.map(link => (
            <Link to={link.to} key={link.to} className={classes.link}>
              <Typography variant="subtitle1" className={linkTitle}>
                {link.title}
              </Typography>
            </Link>
          ))
        }
        {
          !drawerNav ?
            <IconButton onClick={this.toggleTheme}>
              <InvertColorsIcon />
            </IconButton> : null
        }
      </React.Fragment>
    )
  }

  private toggleDrawerOpen = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }
}

export const MainLayout = withStyles(styles)(_MainLayout);
