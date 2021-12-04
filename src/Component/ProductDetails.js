import { ProductContext } from "../Context/ProductContext";
import React, { useContext, useEffect } from "react";
import { Container, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ProductDetails() {
  const API_URL = "https://amazoncloneappnode.herokuapp.com/postproduct";

  // context for product details
  const context = useContext(ProductContext);

  const addBuynowProducts = async () => {
    try {
      const { buyNowItem: { id, product, picture, rate } } = context;
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
      <Container>
        <Table responsive="lg">
          <tr>
            <td> <div><img variant="top" src={context.buyNowItem.picture} alt="pic" height={330} width={330} />
              <Link to={{
                pathname: 'https://rzp.io/l/mDTny3AaX',
              }} target="_blank"><Button type="button"  variant="success" size="sm" className="buynowBtn" onClick={addBuynowProducts}>Buy Now</Button></Link>
            </div></td>
            <td> <h1 className="mt-2">{context.buyNowItem.product}</h1>
             
              <div className="d-flex">
                <p>Price : {context.buyNowItem.rate} </p>
              </div>
              <div>
              
                <h4>Customer Review</h4>
                <p>
                 <ul>
                   <div> 1. Its value for money and good , I  use it around 6 months...

                   </div>
                   <div> 2.  I Recommended this product to everyone .. its really good..

                   </div>
                 </ul>
                </p>
              </div>
            </td>
          </tr>

        </Table>
      </Container>

    </>
  )
}