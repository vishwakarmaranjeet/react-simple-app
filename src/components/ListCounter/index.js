import React, { useState } from "react";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";

const dataList = [
  { id: 1, name: "List 1", isClicked: false },
  { id: 2, name: "List 2", isClicked: false },
  { id: 3, name: "List 3", isClicked: false },
  { id: 4, name: "List 4", isClicked: false },
  { id: 5, name: "List 5", isClicked: false },
  { id: 6, name: "List 6", isClicked: false },
];
const ListCounter = () => {
  const [count, setCount] = useState(0);
  const [buttonList, setButtonList] = useState(dataList);
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
      setCount((prevState) => prevState + 1);
    } else {
      newChecked.splice(currentIndex, 1);
      setCount((prevState) => prevState - 1);
    }
    setChecked(newChecked);
  };

  // const countHandler = (id) => {
  //   const newList = buttonList.map((item) => {
  //     if (item.id === id) {
  //       const updatedItem = {
  //         ...item,
  //         isClicked: !item.isClicked,
  //       };
  //       if (updatedItem.isClicked) {
  //         setCount((prevState) => prevState + 1);
  //       } else {
  //         setCount((prevState) => prevState - 1);
  //       }
  //       return updatedItem;
  //     }
  //     return item;
  //   });
  //   setButtonList(newList);
  // };

  return (
    <Container component="main">
      <h3>Count: {count}</h3>
      {/* {buttonList.map((data) => (
        <div key={data.id}>
          <button
            style={{
              marginBotton: "5px",
              display: "block",
              backgroundColor: data.isClicked ? "red" : "inherit",
            }}
            onClick={() => countHandler(data.id)}
          >
            {data.name}
          </button>
          <br />
        </div> */}
      <List sx={{ width: "100%", maxWidth: 300, bgcolor: "background.paper" }}>
        {buttonList.map((data) => {
          const labelId = `checkbox-list-label-${data.id}`;
          return (
            <ListItem
              key={data.id}
              secondaryAction={
                <IconButton edge="end" aria-label="comments">
                  <CommentIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton
                role={undefined}
                onClick={() => handleToggle(data.id)}
                dense
              >
                <Checkbox
                  checked={checked.indexOf(data.id) !== -1}
                  edge="start"
                  tabIndex={-1}
                  disableRipple
                />
                <ListItemText id={labelId} primary={data.name} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};
export default ListCounter;
