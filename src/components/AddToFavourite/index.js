import React, { useState } from "react";
import { useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const API_URL = `https://dummyjson.com/products`;

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const AddToFavourite = () => {
  const [productList, setProductList] = useState([]);
  const [favouriteList, setFavoriteList] = useState([]);
  const [value, setValue] = useState(0);

  const getProduct = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setProductList(data?.products);
    } catch (e) {
      console.log("Error occured", e);
    }
  };

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  // Add to favourite
  const addToFavoriteHandler = (item) => {
    if (!favouriteList.includes(item)) {
      setFavoriteList([...favouriteList, item]);
    }
  };
  // Remove to favorite
  const removeFavoriteHandler = (product) => {
    const filteredProduct = favouriteList.filter(
      (item) => item.id !== product.id
    );
    setFavoriteList(filteredProduct);
  };

  const ifExists = (product) => {
    if (favouriteList.filter((item) => item.id === product.id).length > 0) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Products" />
          <Tab label="My Favourite" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            {productList.map((product) => (
              <Card sx={{ maxWidth: 345, margin: "10px" }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={`${product.thumbnail}`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.brand}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    type="button"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={() =>
                      ifExists(product)
                        ? removeFavoriteHandler(product)
                        : addToFavoriteHandler(product)
                    }
                  >
                    {ifExists(product)
                      ? "Remove to Favourite"
                      : "Add to Favourite"}
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Grid>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            {favouriteList.length ? (
              favouriteList.map((product) => (
                <Card sx={{ maxWidth: 345, margin: "10px" }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={`${product.thumbnail}`}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.brand}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p>Noting is in favourite</p>
            )}
          </Grid>
        </Box>
      </TabPanel>
    </>
  );
};
export default AddToFavourite;
