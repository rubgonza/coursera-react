import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, List } from "reactstrap";

class DishDetail extends Component {
  renderDish(selectedDish) {
    if (selectedDish != null) {
      return (
        <Card>
          <CardImg top src={selectedDish.image} alt={selectedDish.name} />
          <CardBody>
            <CardTitle tag="h5">{selectedDish.name}</CardTitle>
            <CardText>{selectedDish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }

  renderComments(dish) {
    if (dish != null) {
      // Date format options
      let options = {
        year: "numeric",
        month: "long",
        day: "2-digit",
      };

      return dish.comments.map((comment) => {
        return (
          <List key={comment.id} type="unstyled">
            <li>{comment.comment}</li>
            <li>
              -- {comment.author},{" "}
              {new Date(comment.date).toLocaleDateString("en-US", options)}
            </li>
          </List>
        );
      });
    } else {
      return <div></div>;
    }
  }

  render() {
    const dishDetail = this.renderDish(this.props.dish);

    const comments = this.renderComments(this.props.dish);

    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">{dishDetail}</div>
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            {comments}
          </div>
        </div>
      </div>
    );
  }
}

export default DishDetail;
