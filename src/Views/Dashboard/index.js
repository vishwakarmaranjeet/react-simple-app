import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddToFavourite from "../../components/AddToFavourite";

const Dashboard = () => {
  let { state } = useLocation();
  let navigate = useNavigate();

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

  // function generate(element) {
  //   return [0, 1, 2].map((value) =>
  //     React.cloneElement(element, {
  //       key: value,
  //     })
  //   );
  // }

  return (
    <Container component="main">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4">
          Welcome to {state?.username}
        </Typography>

        {/* <Grid item xs={12} md={6}>
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
        </Grid> */}

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
      <AddToFavourite />
    </Container>
  );
};

export default Dashboard;
