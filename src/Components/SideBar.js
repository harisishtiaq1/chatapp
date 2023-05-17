import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Link,
  Drawer,
  Divider,
} from "@mui/material";
import React from "react";
function SideBar() {
  const drawerWidth = 300;
  return (
    <>
      <AppBar>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontWeight: "500", fontSize: "20px" }}>
            ChatApp
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link
              href="/"
              sx={{
                mr: 3,
                my: 2,
                fontSize: "17px",
                cursor: "pointer",
                color: "whiteSmoke",
                textDecoration: "none",
                fontFamily: " Poppins, sans-serif",
                fontWeight: "500",
                "&:active": {
                  color: "red",
                },
              }}
            >
              Home
            </Link>
            <Link
              href="/details"
              sx={{
                mr: 3,
                my: 2,
                fontSize: "17px",
                cursor: "pointer",
                color: "whiteSmoke",
                textDecoration: "none",
                fontFamily: " Poppins, sans-serif",
                fontWeight: "500",
              }}
            >
              Chat{" "}
            </Link>
            <Link
              href="/orders"
              sx={{
                mr: 3,
                my: 2,
                fontSize: "17px",
                cursor: "pointer",
                color: "whiteSmoke",
                textDecoration: "none",
                fontFamily: " Poppins, sans-serif",
                fontWeight: "500",
              }}
            >
              Contacts
            </Link>
            <Link
              href="/cart"
              sx={{
                mr: 3,
                my: 2,
                fontSize: "17px",
                cursor: "pointer",
                color: "whiteSmoke",
                textDecoration: "none",
                fontFamily: " Poppins, sans-serif",
                fontWeight: "500",
              }}
            >
              About Us
            </Link>
            <Link
              href="/checkout"
              sx={{
                mr: 3,
                my: 2,
                fontSize: "17px",
                cursor: "pointer",
                color: "whiteSmoke",
                textDecoration: "none",
                fontFamily: " Poppins, sans-serif",
                fontWeight: "500",
              }}
            >
              FAQS
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#1976D2",
            width: drawerWidth,
            flexShrink: 0,
            mt: 8,
            display: { xs: "none", sm: "block" },
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
      </Drawer>
    </>
  );
}

export default SideBar;
