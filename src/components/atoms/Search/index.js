import React from "react";
import { Form, Button } from "react-bootstrap";
import "./_search.scss";

const Search = () => {
  return (
    <Form>
      <Form.Label>Search</Form.Label>
      <Form.Group className="position-relative search-item">
        <Form.Control
          type="text"
          size="lg"
          placeholder="ex: Miami"
        ></Form.Control>
        <Button
          className="position-absolute top-0 bg-btn-search"
          style={{ right: 0 }}
          type="submit"
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </Button>
      </Form.Group>
    </Form>
  );
};

export default Search;
