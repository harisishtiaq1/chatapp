import {
  Box,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";

function Messages() {
  return (
    <Paper sx={{ ml: 33, height: "500px" }}>
      <>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <Box
            sx={{
              borderRadius: "10px 10px 10px 10px",
              display: "flex",
              flexDirection: "row",
              margin: "5px",
              backgroundColor: "blueViolet",
              width: "fit-content",
              justifyContent: "flex-end",
              color: "white",
            }}
          >
            <Typography
              variant="h6"
              component="h6"
              sx={{
                ml: 1,
                mr: 1,
                mt: 2,
                fontSize: "16px",
                textTransform: "capitalize",
                height: "40px",
                fontWeight: "400",
                width: "fit-content",
              }}
            >
              text here
            </Typography>

            <Typography sx={{ mt: 4, height: "20px", width: 100 }}>
              Time here
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              borderRadius: "10px 10px 10px 10px",
              display: "flex",
              flexDirection: "row",
              margin: "10px",
              backgroundColor: "black",
              color: "white",
              width: "fit-content",
              justifyContent: "flex-end",
              position: "relative",
            }}
          >
            <Typography
              variant="h6"
              component="h6"
              sx={{
                fontSize: "16px",
                ml: 1,
                mr: 1,
                mt: 2,
                textTransform: "capitalize",
                height: "40px",
                fontWeight: "400",
                width: "fit-content",
              }}
            >
              Text here
            </Typography>

            <Typography sx={{ mt: 4, height: "20px", width: 90 }}>
              Hello
            </Typography>
          </Box>
        </Box>
      </>
      <Stack
        direction="row"
        sx={{ bottom: 0, width: "80%", position: "fixed" }}
      >
        <Paper
          sx={{
            width: "100%",
            display: "flex",
            backgroundColor: "grey",
            color: "white",
            borderRadius: "0px",
            padding:1
          }}
        >
          <IconButton sx={{ color: "white" }}>
            <EmojiEmotionsIcon />
          </IconButton>
          <InputBase
            sx={{ border: "none", borderRadius: 0, color: "white" }}
            type="text"
            fullWidth
            placeholder="Type Something"
            autoComplete="off"
          />
          <IconButton sx={{ color: "white" }}>
            <CameraAltIcon />
          </IconButton>
          <IconButton sx={{ color: "white" }}>
            <AttachFileIcon />
          </IconButton>
          <IconButton
            sx={{
            //   padding: 2,
              borderRadius: "10px",
              color: "white",
            }}
            variant="contained"
            type="submit"
          >
            <KeyboardVoiceIcon />
          </IconButton>
          <IconButton
            sx={{
            //   padding: 2,
              borderRadius: "10px",
              color: "white",
            }}
            variant="contained"
            type="submit"
          >
            <SendIcon />
          </IconButton>
        </Paper>
      </Stack>
    </Paper>
  );
}

export default Messages;
