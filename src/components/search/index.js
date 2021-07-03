import { useState } from "react";
import { useDispatch } from "react-redux";

import * as actions from "../../redux/actions";
import { SearchBox, Btn, Input } from "./styles";

function Search() {
  const dispatch = useDispatch();
  const [val, setVal] = useState("");

  const handleChange = (e) => setVal(e.target.value);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(actions.search(val.trim()));
  };

  return (
    <SearchBox>
      <form onSubmit={(e) => handleSearch(e)}>
        <Input
          type="text"
          className="input"
          name=""
          onChange={handleChange}
          placeholder="search ..."
          value={val}
        />
        <Btn type="submit">Search</Btn>
      </form>
    </SearchBox>
  );
}

export default Search;
