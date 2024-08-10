"use client";

import React, { useState } from "react";
import { Box, Stack, Button, TextField, Typography } from "@mui/material";
import Login from './Login';
import Signup from './Signup';

const initialUsers = [];

export default function Home() {
  const [users, setUsers] = useState(initialUsers);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  const handleSignup = (newUser) => {
    setUsers([...users, newUser]);
    setShowLogin(true); // Switch to login after signup
  };

  const handleLogin = (credentials) => {
    const user = users.find(user => user.email === credentials.email && user.password === credentials.password);
    if (user) {
      setIsAuthenticated(true);
    } else {
      alert('Invalid email or password');
    }
  };

  const [items, setItems] = useState([
    'Tomato',
    'Potato',
    'Onion',
    'Garlic',
    'Ginger',
    'Carrot',
  ]);

  const [newItem, setNewItem] = useState('');
  const [updateIndex, setUpdateIndex] = useState(null);
  const [updateItem, setUpdateItem] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const startUpdateItem = (index) => {
    setUpdateIndex(index);
    setUpdateItem(items[index]);
  };

  const handleUpdateItem = () => {
    if (updateItem.trim() !== '' && updateIndex !== null) {
      const newItems = items.map((item, index) =>
        index === updateIndex ? updateItem : item
      );
      setItems(newItems);
      setUpdateIndex(null);
      setUpdateItem('');
    }
  };

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!isAuthenticated) {
    return showLogin ? (
      <Login onLogin={handleLogin} switchToSignup={() => setShowLogin(false)} />
    ) : (
      <Signup onSignup={handleSignup} switchToLogin={() => setShowLogin(true)} />
    );
  }

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap={4}
      padding={3}
      sx={{
        backgroundImage: 'url(/pngtree-march-vegetable-and-fruit-season-cartoon-loquat-promotion-banner-picture-image_1079427.j',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Typography variant="h3" gutterBottom color="primary" sx={{ fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
        Item List
      </Typography>

      <TextField
        label="Search Items"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        variant="outlined"
        fullWidth
        style={{ marginBottom: 16 }}
        InputProps={{
          style: { borderRadius: 8, padding: '8px 12px', backgroundColor: 'white' },
        }}
      />

      <Stack
        width="100%"
        maxWidth="800px"
        spacing={2}
        overflow="auto"
        sx={{
          padding: 2,
          borderRadius: 8,
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          bgcolor: '#ffffff',
        }}
      >
        {filteredItems.map((item, index) => (
          <Box
            key={index}
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            bgcolor="#e0f7fa"
            padding={2}
            borderRadius={8}
            boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
          >
            <Typography variant="h6" sx={{ fontWeight: '500' }}>{item}</Typography>
            <Box>
              <Button
                onClick={() => removeItem(index)}
                variant="contained"
                color="error"
                sx={{ marginRight: 1, borderRadius: 8 }}
              >
                Remove
              </Button>
              <Button
                onClick={() => startUpdateItem(index)}
                variant="contained"
                color="primary"
                sx={{ borderRadius: 8 }}
              >
                Update
              </Button>
            </Box>
          </Box>
        ))}
      </Stack>

      <Box
        display="flex"
        gap={2}
        marginTop={3}
        maxWidth="800px"
        width="100%"
      >
        <TextField
          label="New Item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          variant="outlined"
          fullWidth
          InputProps={{
            style: { borderRadius: 8, padding: '8px 12px', backgroundColor: 'white' },
          }}
        />
        <Button
          onClick={addItem}
          variant="contained"
          color="success"
          sx={{ borderRadius: 8 }}
        >
          Add Item
        </Button>
      </Box>

      {updateIndex !== null && (
        <Box
          display="flex"
          gap={2}
          marginTop={3}
          maxWidth="800px"
          width="100%"
        >
          <TextField
            label="Update Item"
            value={updateItem}
            onChange={(e) => setUpdateItem(e.target.value)}
            variant="outlined"
            fullWidth
            InputProps={{
              style: { borderRadius: 8, padding: '8px 12px', backgroundColor: 'white' },
            }}
          />
          <Button
            onClick={handleUpdateItem}
            variant="contained"
            color="primary"
            sx={{ borderRadius: 8 }}
          >
            Update
          </Button>
        </Box>
      )}
    </Box>
  );
}
