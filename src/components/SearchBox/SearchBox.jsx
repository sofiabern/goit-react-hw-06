import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

import css from "./SearchBox.module.css";

function SearchBox() {
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectNameFilter);

  const handleChange = (evt) => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={nameFilter}
        onChange={handleChange}
      />
    </>
  );
}

export default SearchBox;
