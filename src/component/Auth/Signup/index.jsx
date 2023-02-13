import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const SignUp = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const changeEmail = (e) => {
    console.log("Email", e.target.value);
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    console.log("Password", e.target.value);
    setPassword(e.target.value);
  };

  const changeRePassword = (e) => {
    console.log("Re-Password", e.target.value);
    setRePassword(e.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
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
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={changeEmail}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={changePassword}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Re-Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={changeRePassword}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Бүртгүүлэх
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Button
                onClick={() => {
                  props.seto(true);
                }}
                variant="text"
              >
                Нэвтрэх
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
