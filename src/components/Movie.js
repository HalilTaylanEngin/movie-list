import React, { Component } from "react";
import { Card, Col, Row, Button, Badge } from "react-bootstrap";
import createUID from 'create-unique-id';

class Movie extends Component {

  render() {
 
    return (
      <Row className="mt-4">
        {this.props.movieList.map((movie) => (
          <Col key={createUID(10)} sm="6" md="4" lg="3">
            <Card>
              <Card.Img
                variant="top"
                alt="fdsf"
                src={movie.poster_path}
              />
              <Card.Body>
                <Card.Title>{movie.title} </Card.Title>
                <Card.Text>{movie.overview}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button onClick={()=>this.props.deleteMovie(movie)} variant="danger">Delete</Button>
                <Badge pill variant="info" className="p-2 float-right">
                  {" "}
                  {movie.vote_average}
                </Badge>{" "}
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}

export default Movie;
