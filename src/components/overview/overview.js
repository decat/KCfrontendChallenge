import Link from "react-router-dom";
import { Button, ListGroup, Card, Spinner, CardGroup } from "react-bootstrap";

export default function ({ products, usage, inventory }) {
  return (
    <CardGroup>
      {products.products.length >= 1 &&
      usage.usage.length >= 1 &&
      inventory.inventory.length >= 1 ? (
        products.products.map((item1) => (
         
            <Card key={item1.id} style={{ width: "18rem" }}>
              <Card.Header>{item1.Product}</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  In stock:{" "}
                  {
                    inventory.inventory.filter((item2) => {
                      if (item1.guid === item2.guid) {
                        return true;
                      }
                    })[0].qty
                  }
                </ListGroup.Item>
                <ListGroup.Item>
                  Daily usage:{" "}
                  {
                    usage.usage.filter((item2) => {
                      if (item1.guid === item2.guid) {
                        return true;
                      }
                    })[0].qty
                  }
                </ListGroup.Item>
              </ListGroup>
            </Card>
        ))
      ) : (
        <Spinner animation="grow" />
      )}
    </CardGroup>
  );
}
