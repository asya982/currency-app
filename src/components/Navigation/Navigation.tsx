import { Box, Drawer, IconButton } from "@mui/material";
import { FC } from "react";
import NavItems from "./NavItems";
import { CloseOutlined, Menu } from "@mui/icons-material";
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
    <div className={styles.navigation}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="end"
        onClick={handleDrawerToggle}
      >
        <Menu color="inherit" />
      </IconButton>
      <Drawer
        variant="temporary"
        open={open}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: false,
        }}
        sx={{
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
        <Box
          component="nav"
          onClick={handleDrawerToggle}
        >
          <div className={styles.title}>
            <h3>Currency app</h3>
            <IconButton
              onClick={() => setOpen(false)}
              aria-label="close drawer"
            >
              <CloseOutlined />
            </IconButton>
          </div>
          <NavItems />
        </Box>
      </Drawer>
    </div>
  );
};

export default Navigation;
