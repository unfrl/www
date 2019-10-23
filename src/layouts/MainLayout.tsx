import * as React from "react";
import {
    createMuiTheme,
    MuiThemeProvider,
    CssBaseline,
    AppBar,
    Typography,
    Theme,
    withStyles,
    Hidden,
    IconButton,
    Drawer,
    Container,
} from "@material-ui/core";
import { Link } from "gatsby";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import InvertColorsIcon from "@material-ui/icons/InvertColors";
import { indigo, orange } from "@material-ui/core/colors";

import logo from "../assets/logo.png";
import { ContactButton, Footer } from "../components";
import { FooterType } from "../components/Footer";

const styles: any = (theme: Theme) => ({
    "@global": {
        img: {
            maxWidth: "100%",
        },
    },
    root: {
        // Note: this can be removed when the home page as enough content to push the footer to the bottom
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "100vh",
    },
    home: {
        textDecoration: "none",
        color: "inherit",
        marginLeft: theme.spacing(),
        marginRight: theme.spacing(),
        paddingLeft: 10,
        paddingRight: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    logo: {
        height: 30,
        marginRight: theme.spacing(),
        borderRadius: theme.shape.borderRadius,
    },
    headerContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 48,
        maxWidth: 1040,
        alignSelf: "center",
        width: "100%",
    },
    navBar: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginRight: theme.spacing(),
    },
    drawerNav: {
        padding: theme.spacing(),
        width: 300,
        maxWidth: "100%",
    },
    drawerMenu: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: `-8px -8px 8px -8px`,
        boxShadow: theme.shadows[1],
    },
    drawerLinkTitle: {
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2),
    },
    hamburgerNav: {
        marginRight: theme.spacing(),
    },
    row: {
        display: "flex",
        alignItems: "center",
    },
    link: {
        textDecoration: "none",
        color: "inherit",
    },
    linkTitle: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        transition: "opacity ease .2s",
        opacity: 1,
        "&:hover": {
            opacity: 0.7,
        },
    },
});

const links = [
    { to: "/services", title: "Services" },
    { to: "/process", title: "Process" },
    { to: "/about", title: "About" },
];

const themeTypeValue = "ThemeType";

class _MainLayout extends React.Component<any, any> {
    public constructor(props: any) {
        super(props);
        this.state = {
            drawerOpen: false,
            themeType: "dark",
        };
    }

    public componentDidMount() {
        const themeValue = localStorage.getItem(themeTypeValue) || "dark";
        this.setState({
            themeType: themeValue,
        });
    }

    public render() {
        const theme = createMuiTheme({
            palette: {
                primary: indigo,
                secondary: orange,
                type: this.state.themeType,
            },
        });

        const { children, classes } = this.props;

        return (
            <MuiThemeProvider theme={theme}>
                <div className={classes.root}>
                    <CssBaseline />
                    <AppBar position="sticky" color="default">
                        <div className={classes.headerContainer}>
                            {this.renderLogo()}
                            <Hidden smDown={true}>
                                <nav className={classes.navBar}>
                                    {this.renderLinks()}
                                    <ContactButton style={{ marginLeft: 16 }} />
                                </nav>
                            </Hidden>
                            <Hidden mdUp={true}>
                                <div className={classes.row}>
                                    <ContactButton style={{ marginRight: 8 }} />
                                    <IconButton
                                        color="inherit"
                                        aria-label="Menu"
                                        className={classes.hamburgerNav}
                                        onClick={this.toggleDrawerOpen}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                </div>
                                <Drawer
                                    anchor="right"
                                    open={this.state.drawerOpen}
                                    onClose={this.toggleDrawerOpen}
                                >
                                    <nav className={classes.drawerNav}>
                                        {this.renderLinks(true)}
                                    </nav>
                                    <Footer variant={FooterType.Drawer}></Footer>
                                </Drawer>
                            </Hidden>
                        </div>
                    </AppBar>
                    <Container maxWidth="lg" style={{ maxWidth: 1100 }}>
                        {children}
                    </Container>
                    <Footer variant={FooterType.Normal}></Footer>
                </div>
            </MuiThemeProvider>
        );
    }

    private renderLogo = () => {
        const { classes } = this.props;

        return (
            <Link to="/" className={classes.home}>
                <img src={logo} alt="Unfrl" className={classes.logo} />
                <Typography variant="h6">Unfrl</Typography>
            </Link>
        );
    };

    private renderLinks = (drawerNav: boolean = false) => {
        const { classes } = this.props;
        const linkTitle = `${classes.linkTitle} ${drawerNav ? classes.drawerLinkTitle : ""}`;
        const closeMenu = drawerNav ? (
            <div className={classes.drawerMenu}>
                {this.renderLogo()}
                <IconButton onClick={this.toggleDrawerOpen} className={classes.hamburgerNav}>
                    <CloseIcon />
                </IconButton>
            </div>
        ) : null;

        return (
            <React.Fragment>
                {closeMenu}
                {links.map(link => (
                    <Link to={link.to} key={link.to} className={classes.link}>
                        <Typography variant="subtitle1" className={linkTitle}>
                            {link.title}
                        </Typography>
                    </Link>
                ))}

                <IconButton onClick={this.toggleTheme}>
                    <InvertColorsIcon />
                </IconButton>
            </React.Fragment>
        );
    };

    private toggleTheme = () => {
        const themeType = this.state.themeType === "dark" ? "light" : "dark";
        localStorage.setItem(themeTypeValue, themeType);
        this.setState({
            themeType: themeType,
        });
    };

    private toggleDrawerOpen = () => {
        this.setState({ drawerOpen: !this.state.drawerOpen });
    };
}

export const MainLayout = withStyles(styles)(_MainLayout);
