import * as React from "react";
import { useAutocomplete } from "@mui/base/AutocompleteUnstyled";
import { styled } from "@mui/system";
import { List } from "react-virtualized";

const Label = styled("label")({
  display: "block",
});

const Input = styled("input")(({ theme }) => ({
  width: 200,
  backgroundColor: theme.palette.mode === "light" ? "#fff" : "#000",
  color: theme.palette.mode === "light" ? "#000" : "#fff",
}));

const Listbox = styled("ul")(({ theme }) => ({
  width: 200,
  margin: 0,
  padding: 0,
  zIndex: 1,
  position: "absolute",
  listStyle: "none",
  backgroundColor: theme.palette.mode === "light" ? "#fff" : "#000",
  overflow: "auto",
  maxHeight: 200,
  border: "1px solid rgba(0,0,0,.25)",
  "& li.Mui-focused": {
    backgroundColor: "#4a8df6",
    color: "white",
    cursor: "pointer",
  },
  "& li:active": {
    backgroundColor: "#2977f5",
    color: "white",
  },
}));

export default function UseAutocomplete({ data }) {
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: "use-autocomplete-demo",
    options: data,
    getOptionLabel: (option) => option.label,
  });

  {
    /* <List
        width={500}
        height={500}
        rowHeight={50}
        rowCount={people.length}
        rowRenderer={Row}
      ></List> */
  }

  const Item = ({ index, style }) => {
    if (!groupedOptions || index >= groupedOptions.length) {
      return <li style={style} />;
    } else {
      const option = groupedOptions[index];
      const name = option.label || "no name";
      return (
        <ul {...getListboxProps()}>
          <li style={style} {...getOptionProps({ option, index })}>
            {name}
          </li>
        </ul>
      );
    }
  };

  return (
    <div>
      <div {...getRootProps()}>
        <Label {...getInputLabelProps()}>useAutocomplete</Label>
        <Input {...getInputProps()} />
      </div>
      {groupedOptions.length > 0 ? (
        <List
          height={150}
          itemCount={groupedOptions.length}
          itemSize={30}
          width={200}
          rowCount={groupedOptions.length}
          rowHeight={50}
          rowRenderer={Item}
        />
      ) : null}
    </div>
  );
}
