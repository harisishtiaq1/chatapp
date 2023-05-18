import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Input } from "@mui/material";
import { useNavigate } from "react-router-dom";
const theme = createTheme();

export default function SignUp() {
  const naviagte = useNavigate();
  const [err, SetErr] = React.useState(false);
  const [displayName, setDisplayName] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [image, setImage] = React.useState();
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(image, "image");
    console.log(email, "image");
    console.log(password, "password");
    console.log(displayName, "image");
    console.log("data");
    console.log("data");
    console.log("data");

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log("res", res);
      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        (error) => {
          SetErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            naviagte("/");
          });
        }
      );
    } catch (err) {
      SetErr(true);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            {err && (
              <Typography
                sx={{ fontWeight: "600", color: "red", fontSize: "20px" }}
              >
                Something went Wrong
              </Typography>
            )}
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  // autoComplete="given-name"
                  type="text"
                  required
                  label="Name"
                  sx={{
                    width: 400,
                  }}
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  type="email"
                  required
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  sx={{
                    width: 400,
                  }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  sx={{
                    width: 400,
                  }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  required
                  sx={{
                    width: 400,
                  }}
                  onChange={handleFileChange}
                  name="image"
                  type="file"
                  id="image"
                />
              </Grid>
            </Grid>
            <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
