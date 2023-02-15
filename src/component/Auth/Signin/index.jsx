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
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setIsToast] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const onClose = () => {
    setIsToast(false);
  };
  const changeEmail = (e) => {
    console.log("Email", e.target.value);
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    console.log("Password", e.target.value);
    setPassword(e.target.value);
  };

  const signin = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:8030/signin", {
        email,
        password,
      });
      localStorage.setItem("user", JSON.stringify(res.data.user));
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  const Login = () => {
    if (email === "" || password === "") {
      setIsToast(true);
    } else {
      signin(email, password);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
          Sign in
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />

          <div>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={Login}
            >
              Нэвтрэх
            </Button>
          </div>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Button
                onClick={() => {
                  props.seto(false);
                }}
                variant="text"
              >
                Бүртгүүлэх
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Snackbar
        open={toast}
        onClose={onClose}
        autoHideDuration={3000}
        message="Нэвтрэх Хэсэг"
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity="error">FORM Хоосон байна!</Alert>
      </Snackbar>
    </Container>
  );
};

export default SignUp;
