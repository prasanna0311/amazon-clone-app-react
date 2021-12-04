import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Cardfn() {
    const API_URL = "https://amazoncloneappnode.herokuapp.com/postproduct";
    const context = useContext(ProductContext);
    const history = useHistory();
    useEffect(() => {
        if (!localStorage.getItem("user")) {
            history.push("/")
        }
    }, [])
    //Remove card item function
    const onDeleteByIndex = async (item) => {
        await context.HandleRemoveCardFn(item);
        try {
            const { id, product, picture, rate } = item;
            const mailid = localStorage.getItem("user");
            const { data } = await axios.post(API_URL, {
                mailid, id, product, picture, rate
            })
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <>
            <Container className="ItemContainer">
                <Row md={4} className="g-4">

                    {
                        context.carditem.length == 0 ? <h1 className="EmptyCard"><i className="fas fa-shopping-cart"></i> Card is Empty</h1> : (
                            context.carditem.map((item, index) => {
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
                                                <Link to={{
                                                    pathname: 'https://rzp.io/l/uVXB2JhLfx',
                                                }} target="_blank"><Button type="button" variant="dark" size="sm" onClick={() => { onDeleteByIndex(item) }}>Buy Now</Button></Link>
                                                <Button variant="warning" size="sm" onClick={() => { onDeleteByIndex(item) }}>Remove To Card</Button>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                )
                            }
                            )
                        )}
                </Row>
            </Container>
        </>
    )
}