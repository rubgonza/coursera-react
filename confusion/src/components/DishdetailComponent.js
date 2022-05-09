import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, List } from "reactstrap";

//Functional component no esta en una clase ni extiende de component!
function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle tag="h5">{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  } else {
    return <div></div>;
  }
}

function RenderComments({ dish }) {
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

const DishDetail = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <RenderComments dish={props.dish} />
        </div>
      </div>
    </div>
  );
};

export default DishDetail;
