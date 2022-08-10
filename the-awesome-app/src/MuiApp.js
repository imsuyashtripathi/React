import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import { appRoutes } from "./routes/routes";
import ProtectedRoute from "./components/ProtectedRoute";

const drawerWidth = 240;

function DrawerItems(props) {
  const navigate = useNavigate();

  function navigateToRoute(routeItem) {
    navigate(routeItem.path);
    if(props.onClose){
        props.onClose();
    }
  }

  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {appRoutes
          .filter((item) => item.isMenuItem)
          .map((item, index) => {
            return (
              <ListItem
                key={item.path}
                disablePadding
                onClick={() => navigateToRoute(item)}
              >
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            );
          })}
      </List>
    </div>
  );
}

function MuiApp() {
  const [open, setOpen] = React.useState(false);

  function openDrawer() {
    setOpen(true);
  }

  function navigateToRoute(routeItem) {
    //navigate(routeItem.path);
  }

  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={openDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              React
            </Typography>
            <Button color="secondary" variant="contained">
              Login
            </Button>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            variant="temporary"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open={open}
            onClose={() => setOpen(false)}
          >
            <DrawerItems onClose={() => setOpen(false)}/>
          </Drawer>
        </Box>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <React.Suspense>
          <Routes>
            {appRoutes.map((item, index) => {
              const Component = item.component;

              if (item.secure) {
                return (
                  <Route
                    key={item.path}
                    path={item.path}
                    element={<ProtectedRoute>{item.component}</ProtectedRoute>}
                  />
                );
              } else {
                return (
                  <Route
                    key={item.path}
                    path={item.path}
                    element={item.component}
                  />
                );
              }
            })}
          </Routes>
        </React.Suspense>
      </Box>
    </Router>
  );
}

export default MuiApp;