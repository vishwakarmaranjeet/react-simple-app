import React, { useReducer } from "react";
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
import CircularProgress from "@mui/material/CircularProgress";
import { makeStyles } from "@material-ui/styles";

const LINES_TO_SHOW = 2;

// src: https://stackoverflow.com/a/13924997/8062659
const useStyles = makeStyles({
  multiLineEllipsis: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": LINES_TO_SHOW,
    "-webkit-box-orient": "vertical",
  },
});

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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

let initialState = {
  productList: [],
  favouriteList: [],
  isLoader: true,
  value: 0,
};

const actionType = {
  GET_REQUESTED: "GET_REQUESTED",
  GET_SUCCESS: "GET_SUCCESS",
  GET_ERROR: "GET_ERROR",
  ADD_TO_FAVOURITE: "ADD_TO_FAVOURITE",
  REMOVE_TO_FAVOURITE: "REMOVE_TO_FAVOURITE",
  TAB_CHANGES: "TAB_CHANGES",
};

function reducer(state, action) {
  switch (action.type) {
    case actionType.GET_SUCCESS:
      return { ...state, productList: action.payload, isLoader: false };
    case actionType.GET_ERROR:
      return { ...state, isLoader: false };
    case actionType.ADD_TO_FAVOURITE:
      if (!state.favouriteList.includes(action.payload)) {
        return {
          ...state,
          favouriteList: [...state.favouriteList, action.payload],
        };
      } else {
        return { ...state };
      }
    case actionType.REMOVE_TO_FAVOURITE:
      const filteredProduct = state.favouriteList.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, favouriteList: filteredProduct };
    case actionType.TAB_CHANGES:
      return { ...state, value: action.payload };
    default:
      return state;
  }
}

const AddToFavourite = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProduct = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      dispatch({ type: actionType.GET_SUCCESS, payload: data?.products });
    } catch (e) {
      console.log("Error occured", e);
      dispatch({ type: actionType.GET_ERROR });
    }
  };

  const handleChange = (e, newValue) => {
    dispatch({ type: actionType.TAB_CHANGES, payload: newValue });
  };

  // Add to favourite
  const addToFavoriteHandler = (item) => {
    dispatch({
      type: actionType.ADD_TO_FAVOURITE,
      payload: item,
    });
  };
  // Remove to favorite
  const removeFavoriteHandler = (product) => {
    dispatch({
      type: actionType.REMOVE_TO_FAVOURITE,
      payload: product,
    });
  };

  const ifExists = (product) => {
    if (
      state.favouriteList.filter((item) => item.id === product.id).length > 0
    ) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    dispatch({ type: actionType.GET_REQUESTED });
    getProduct();
  }, []);

  const renderCards = (data, isFavourite) => {
    return (
      <>
        {data.length ? (
          data.map((product) => (
            <Card sx={{ maxWidth: 205, margin: "8px" }} key={product.id}>
              <CardMedia
                component="img"
                alt={product.brand}
                height="140"
                image={`${product.thumbnail}`}
              />
              <CardContent>
                <Typography gutterBottom component="div">
                  {product.brand}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className={classes.multiLineEllipsis}
                >
                  {product.description}
                </Typography>
              </CardContent>
              {!isFavourite && (
                <CardActions>
                  <Button
                    type="button"
                    variant="contained"
                    sx={{ mt: 0, mb: 1 }}
                    onClick={() =>
                      ifExists(product)
                        ? removeFavoriteHandler(product)
                        : addToFavoriteHandler(product)
                    }
                  >
                    {ifExists(product) ? "Remove" : "Add"}
                  </Button>
                </CardActions>
              )}
            </Card>
          ))
        ) : (
          <h2>Nothing is in the favourite list</h2>
        )}
      </>
    );
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={state.value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Products" />
          <Tab label="My Favourite" />
        </Tabs>
      </Box>
      <TabPanel value={state.value} index={0}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            {state.isLoader ? (
              <CircularProgress />
            ) : (
              renderCards(state.productList, false)
            )}
          </Grid>
        </Box>
      </TabPanel>
      <TabPanel value={state.value} index={1}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            {renderCards(state.favouriteList, true)}
          </Grid>
        </Box>
      </TabPanel>
    </>
  );
};
export default AddToFavourite;
