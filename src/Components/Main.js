import { IconButton, Paper, Stack, Typography } from "@mui/material";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import React from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import MenuIcon from "@mui/icons-material/Menu";
import Messages from "./Messages";
function Main() {
  return (
    <>
    <Paper
      sx={{
        ml: 33,
        mt: 8,
        background: "blueViolet",
        height: "30px",
        padding: 1,
        display: "flex",
        borderRadius:'0px 0px 0px 0px',
        justifyContent: "space-between",
      }}
      fullWidth
    >
      <Typography sx={{ color: "white", fontWeight: "500" }}>
        Haris here
      </Typography>
      <Stack direction="row">
        <IconButton sx={{ color: "white" }}>
          <VideoCallIcon fontSize="medium" />
        </IconButton>
        <IconButton sx={{ color: "white" }}>
          <PersonAddIcon fontSize="medium" />
        </IconButton>
        <IconButton sx={{ color: "white" }}>
          <MenuIcon fontSize="medium" />
        </IconButton>
      </Stack>
    </Paper>
    <Messages/>
        </>
  );
}

export default Main;
