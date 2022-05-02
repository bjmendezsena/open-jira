import { useContext } from "react";
import {
  Drawer,
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";

import InboxIcon from "@mui/icons-material/Inbox";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { UIContext } from "../../context/ui";

const menuItems = ["Inbox", "Starred", "Sent Mail", "Drafts"];

export const Sidebar = () => {
  const { sideMenu, closeSideMenu } = useContext(UIContext);

  return (
    <Drawer anchor="left" open={sideMenu} onClose={closeSideMenu}>
      <Box sx={{ width: 250 }}>
        <Box
          sx={{
            padding: "5px 10px",
          }}
        >
          <Typography variant="h4">Menú</Typography>
          <List>
            {menuItems.map((item, index) => (
              <ListItem button key={index}>
                <ListItemIcon>
                  {index % 2 ? <InboxIcon /> : <MailOutlineIcon />}
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {menuItems.map((item, index) => (
              <ListItem button key={index}>
                <ListItemIcon>
                  {index % 2 ? <InboxIcon /> : <MailOutlineIcon />}
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Drawer>
  );
};
