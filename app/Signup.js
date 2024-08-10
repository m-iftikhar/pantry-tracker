"use client";

import React, { useState } from "react";
import { Box, Button, TextField, Typography, Link, Paper } from "@mui/material";

export default function Signup({ onSignup, switchToLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    onSignup({ email, password });
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
          Signup
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
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          variant="outlined"
          fullWidth
          InputProps={{
            style: { borderRadius: 8, padding: '8px 12px' },
          }}
          sx={{ marginBottom: 3 }}
        />
        <Button
          onClick={handleSignup}
          variant="contained"
          color="primary"
          fullWidth
          sx={{ borderRadius: 8, padding: '10px 0', marginBottom: 2, backgroundColor: '#ff5722', '&:hover': { backgroundColor: '#e64a19' } }}
        >
          Signup
        </Button>
        <Link component="button" variant="body2" onClick={switchToLogin} sx={{ textDecoration: 'none', color: '#ff5722', '&:hover': { color: '#e64a19' } }}>
          Already have an account? Login
        </Link>
      </Paper>
    </Box>
  );
}
