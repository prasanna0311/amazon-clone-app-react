import React, { useContext } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { ProductContext } from "../Context/ProductContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../index.css";

function ItemComponent() {
    // Context to get all product details
    const context = useContext(ProductContext);
    const params = useParams();
    const currentCategories = params.name;

    const checkdisable = (item) => {
        return context.carditem.includes(item)
    }


    return (
        <Container className="ItemContainer">
            <Row md={4} className="g-4">
                {/* Filter product based on params */}
                {context.ProductItems.filter(value => currentCategories === "" ||
                    currentCategories === "allproduct" ? value : value.categories === currentCategories).map((item, index) => {
                        return (
                            <Col key={index}>
                                <Card>
                                    <Card.Img variant="top" src={item.picture} height={290} width={450} />
                                    <Card.Body>
                                        <Card.Title>{item.product}</Card.Title>
                                        <Card.Text>
                                            {item.rate}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Link to="/ProductDetails"><Button type="button" variant="dark" size="sm" onClick={() => context.HandleBuyNowCard(item)}>ProductDetails</Button></Link>
                                        <Button variant="warning"  size="sm" disabled={checkdisable(item)} onClick={() => context.HandleAddCardFn(item)}>{item.addCard}</Button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        )
                    })}
            </Row>
        </Container>
    )

}

export default ItemComponent;


