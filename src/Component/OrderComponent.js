import Table from 'react-bootstrap/Table';
import axios from "axios";
import { Component } from 'react';

const API_URL = "https://amazoncloneappnode.herokuapp.com/getproduct";

export default class OrderComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            products : []
        }
}

componentDidMount = async() => {
    if(!localStorage.getItem("user")){
        this.props.history.push("/");
      }  else{
        try{
            const mailid = await localStorage.getItem("user");
            const {data} = await axios.post(API_URL,{
                mailid
            })
            this.setState({products:data})
            console.log(this.state.products);
          }catch(err){
            console.log(err);
          } 
         }
}

render(){
return(
    <div className="buynowDiv">
    <Table striped bordered hover>
    <thead>
    <tr>
      <th>Product</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
      {
          this.state.products.length === 0 ? (<h1 className="EmptyCard"><i className="fas fa-shopping-bag"></i>Order is Empty</h1>) : (
          this.state.products.map((item,index)=>{
                return(
                    <tr key={index}>
                    <td>{item.product}</td>
                    <td>{item.rate}</td>
                </tr>
                )
          }))
      }
  </tbody>
</Table>
    </div>
)}
}