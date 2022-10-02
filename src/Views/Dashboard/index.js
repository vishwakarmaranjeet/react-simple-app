import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";

const Dashboard = () => {
  let navigate = useNavigate();
  const [secondary, setSecondary] = useState(false);
  useEffect(() => {
    if (
      localStorage.getItem("isLoggedIn") === null ||
      localStorage.getItem("isLoggedIn") === ""
    ) {
      navigate("/login");
    }
  }, [navigate]);

  const logOutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  function generate(element: React.ReactElement) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      })
    );
  }

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
        <Typography component="h1" variant="h4">
          Welcome to dashboard
        </Typography>
        <Grid item xs={12} md={6}>
          {generate(
            <List>
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Single-line item"
                  secondary={secondary ? "Secondary text" : null}
                />
              </ListItem>
            </List>
          )}
        </Grid>

        <Button
          type="button"
          color="error"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={logOutHandler}
        >
          Logout
        </Button>
      </Box>
    </Container>
  );
};

export default Dashboard;
