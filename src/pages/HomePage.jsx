import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ApartmentIcon from "@mui/icons-material/Apartment";
import DescriptionIcon from "@mui/icons-material/Description";
import CreditScoreIcon from "@mui/icons-material/CreditScore";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
            <div><h1>HELLO</h1></div>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Toolbar />
          <Divider />
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  {" "}
                  <DashboardIcon />{" "}
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  {" "}
                  <ApartmentIcon />{" "}
                </ListItemIcon>
                <ListItemText primary="Customer" />
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  {" "}
                  <DescriptionIcon />{" "}
                </ListItemIcon>
                <ListItemText primary="Jobs" />
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  {" "}
                  <CreditScoreIcon />{" "}
                </ListItemIcon>
                <ListItemText primary="Interviewer's Billing" />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <Toolbar />
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  {" "}
                  <DashboardIcon />{" "}
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  {" "}
                  <ApartmentIcon />{" "}
                </ListItemIcon>
                <ListItemText primary="Customer" />
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  {" "}
                  <DescriptionIcon />{" "}
                </ListItemIcon>
                <ListItemText primary="Jobs" />
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  {" "}
                  <CreditScoreIcon />{" "}
                </ListItemIcon>
                <ListItemText primary="Interviewer's Billing" />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
