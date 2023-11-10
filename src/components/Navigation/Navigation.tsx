import { Box, Drawer, IconButton } from "@mui/material";
import { FC } from "react";
import NavItems from "./NavItems";
import {
  CloseOutlined,
  Menu,
} from "@mui/icons-material";
import styles from "./Navigation.module.css";

type NavigationProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const Navigation: FC<NavigationProps> = ({ open, setOpen }) => {
  const drawerWidth = 280;

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="end"
        onClick={handleDrawerToggle}
      >
        <Menu color="secondary" />
      </IconButton>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={open}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              padding: "20px",
            },
          }}
        >
          <div className={styles.title}>
            <h3>Currency app</h3>
            <IconButton onClick={() => setOpen(false)}>
              <CloseOutlined />
            </IconButton>
          </div>
          <NavItems />
        </Drawer>
      </Box>
    </>
  );
};

export default Navigation;
