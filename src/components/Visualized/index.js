import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import { List } from "react-virtualized";
import Container from "@mui/material/Container";

const Visualized = () => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    setPeople(
      [...Array(500000).keys()].map((key) => {
        return {
          id: key,
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        };
      })
    );
  }, []);

  console.log(people);

  const Row = ({ key, index, style }) => {
    const person = people[index];
    return (
      <div style={style} key={key}>
        <p>{person.name}</p>
      </div>
    );
  };

  return (
    <Container component="main">
      <List
        width={500}
        height={500}
        rowHeight={50}
        rowCount={people.length}
        rowRenderer={Row}
      ></List>
    </Container>
  );
};
export default Visualized;
