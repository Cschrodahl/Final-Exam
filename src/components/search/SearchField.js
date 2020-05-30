import React from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
function SearchField({ handleSearch, result }) {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  async function onSubmit(data) {
    history.push("/booking");
  }

  return (
    <form
      className="introBanner__searchField search"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="search__input"
        name="value"
        placeholder="Establishments, hotels"
        onChange={(event) => handleSearch(event)}
        ref={register}
      />
      <button className="search__button" type="submit">
        <img
          className="search__icon"
          src={require("../../images/Icons/search.png")}
          alt="Search icon"
        />
      </button>
      <div className={result.length > 0 ? "search__result" : null}>
        {result.map((Result, index) => {
          return (
            <NavLink
              className="search__links"
              to={`booking/${Result.id}`}
              key={index}
            >
              {Result.name}
            </NavLink>
          );
        })}
      </div>
    </form>
  );
}
export default SearchField;
