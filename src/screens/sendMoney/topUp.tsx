import React from "react";
import clsx from "clsx";
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Container from "@material-ui/core/Container";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import MobileFriendlyIcon from "@material-ui/icons/MobileFriendly";
import ReceiptIcon from "@material-ui/icons/Receipt";
import InfoIcon from "@material-ui/icons/Info";
import AppsIcon from "@material-ui/icons/Apps";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Deposits from "../../component/metrx/deposit";
import Orders from "../../component/metrx/order";
import TopUpChart from "../../component/metrx/topUpChart";
import { NavLink } from "react-router-dom";

const drawerWidth = 220;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      background: "#000000",
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawerOpen: {
      background: "#000000",
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    button: {
      color: "#fff",
      "&:hover": {
        background: " #ff7400",
      },
    },
    drawerClose: {
      background: "#000000",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1,
      },
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    paper: {
      padding: theme.spacing(2),
      display: "flex",
      overflow: "auto",
      flexDirection: "column",
    },
    fixedHeight: {
      height: 240,
    },
    removeUnderLiner: {
      textDecoration: "none",
    },
  })
);
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="">
        W-deposit.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const TopUp = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            W-DEPOSIT FINANCIAL MANAGMENT TOOL
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon
                style={{
                  color: "#fff",
                }}
              />
            ) : (
              <ChevronLeftIcon
                style={{
                  color: "#fff",
                }}
              />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <NavLink to="/" className={classes.removeUnderLiner}>
            <ListItem button className={classes.button}>
              <ListItemIcon>
                <AppsIcon
                  style={{
                    color: "#ffff",
                  }}
                  fontSize="large"
                />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItem>
          </NavLink>
          <NavLink to="/topUp" className={classes.removeUnderLiner}>
            <ListItem button className={classes.button}>
              <ListItemIcon>
                <MonetizationOnIcon
                  style={{
                    color: "#ffff",
                  }}
                  fontSize="large"
                />
              </ListItemIcon>
              <ListItemText>TopUp Account</ListItemText>
            </ListItem>
          </NavLink>
          <NavLink to="/balance" className={classes.removeUnderLiner}>
            <ListItem button className={classes.button}>
              <ListItemIcon>
                <AccountBalanceWalletIcon
                  style={{
                    color: "#ffff",
                  }}
                  fontSize="large"
                />
              </ListItemIcon>
              <ListItemText>Check Balance</ListItemText>
            </ListItem>
          </NavLink>
          <NavLink to="/mobile" className={classes.removeUnderLiner}>
            <ListItem button className={classes.button}>
              <ListItemIcon>
                <MobileFriendlyIcon
                  style={{
                    color: "#ffff",
                  }}
                  fontSize="large"
                />
              </ListItemIcon>
              <ListItemText>Mobile money</ListItemText>
            </ListItem>
          </NavLink>
          <NavLink to="/history" className={classes.removeUnderLiner}>
            <ListItem button className={classes.button}>
              <ListItemIcon>
                <ReceiptIcon
                  style={{
                    color: " #ffff",
                  }}
                  fontSize="large"
                />
              </ListItemIcon>
              <ListItemText>My transactions</ListItemText>
            </ListItem>
          </NavLink>
          <NavLink to="/about" className={classes.removeUnderLiner}>
            <ListItem button className={classes.button}>
              <ListItemIcon>
                <InfoIcon
                  style={{
                    color: "#ffff",
                  }}
                  fontSize="large"
                />
              </ListItemIcon>
              <ListItemText>About W-deposit</ListItemText>
            </ListItem>
          </NavLink>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <TopUpChart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid>
            {/* Recent Orders */}
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
};
export default TopUp;
