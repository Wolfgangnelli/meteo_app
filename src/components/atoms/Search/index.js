import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./_search.scss";

const Search = () => {
  const [citySearched, setCitySearched] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(
      `Sorry, but ${citySearched} is not available. This is a demo app and it only shows 3 cities!`
    );
    setCitySearched("");
  };
  return (
    <Form onSubmit={handleSearch}>
      <Form.Label>Search</Form.Label>
      <Form.Group className="position-relative search-item">
        <Form.Control
          type="text"
          size="lg"
          placeholder="ex: Miami"
          value={citySearched}
          onChange={(e) => setCitySearched(e.target.value)}
        ></Form.Control>
        <Button
          className="position-absolute top-0 bg-btn-search"
          style={{ right: 0 }}
          type="submit"
        >
          <i className="fa-solid fa-magnifying-glass fa-lg"></i>
        </Button>
      </Form.Group>
    </Form>
  );
};

export default Search;
