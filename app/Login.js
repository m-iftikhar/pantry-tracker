"use client";

import React, { useState } from "react";
import { Box, Button, TextField, Typography, Link, Paper } from "@mui/material";

export default function Login({ onLogin, switchToSignup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onLogin({ email, password });
  };

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundImage: 'url(/pngtree-march-vegetable-and-fruit-season-cartoon-loquat-promotion-banner-picture-image_1079427.j',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Paper
        elevation={10}
        sx={{
          padding: 4,
          borderRadius: 4,
          width: '100%',
          maxWidth: 400,
          textAlign: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', marginBottom: 3 }}>
          Login
        </Typography>
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          fullWidth
          InputProps={{
            style: { borderRadius: 8, padding: '8px 12px' },
          }}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          fullWidth
          InputProps={{
            style: { borderRadius: 8, padding: '8px 12px' },
          }}
          sx={{ marginBottom: 3 }}
        />
        <Button
          onClick={handleLogin}
          variant="contained"
          color="primary"
          fullWidth
          sx={{ borderRadius: 8, padding: '10px 0', marginBottom: 2, backgroundColor: '#ff5722', '&:hover': { backgroundColor: '#e64a19' } }}
        >
          Login
        </Button>
        <Link component="button" variant="body2" onClick={switchToSignup} sx={{ textDecoration: 'none', color: '#ff5722', '&:hover': { color: '#e64a19' } }}>
          Don't have an account? Sign up
        </Link>
      </Paper>
    </Box>
  );
}
