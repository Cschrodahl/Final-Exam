import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
let inputEmpty = true;
function SearchField({ handleSearch, results }) {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  async function onSubmit(data) {
    history.push("/booking");
  }

  return (
    <>
      <form
        className="introBanner__searchField search"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="search__input"
          name="value"
          placeholder="Establishments, hotels"
          onChange={(event) => {
            handleSearch(event);
            inputEmpty = false;
          }}
          ref={register}
        />
        <button className="search__button" type="submit">
          <img
            className="search__icon"
            src={require("../../images/Icons/search.png")}
            alt="Search icon"
          />
        </button>
      </form>
      {inputEmpty === false ? (
        <div className={results.length > 0 ? "search__result" : null}>
          {results.map((result, index) => {
            return (
              <Link
                className="search__links"
                to={`/booking/${result.id}`}
                key={index}
              >
                {result.name}
              </Link>
            );
          })}
        </div>
      ) : null}
    </>
  );
}
export default SearchField;
