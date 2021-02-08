import React, { Component } from "react";
import {  Form } from "react-bootstrap";

class SearchBar extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (

          <Form onSubmit={this.handleSubmit} inline>
            <Form.Group controlId="formBasicEmail" className="w-100">
              <Form.Control
                onChange={this.props.searchMovie}
                type="text"
                placeholder="Search"
                className="w-100"
              />
            </Form.Group>
          </Form>
    
    );
  }
}

export default SearchBar;
