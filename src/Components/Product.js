import Card from 'react-bootstrap/Card';
import {React,Component} from "react"
import { Button } from 'react-bootstrap';


export default class Product extends Component{

    constructor(props){
        super(props)
        this.state=props;


    }

    handleBuyClick = (e) => {
        e.preventDefault();
        this.setState((oldState) => ({
            product:{...oldState.product,quantity:oldState.product.quantity -1,updated:oldState.product.updated -1  },
            showAlert: true,
            
        }));
        setTimeout(() => {
            this.setState({ showAlert: false });
        }, 2000);
    }

    

    LikeProduct=(e)=>{
        e.preventDefault();
        this.setState((oldState)=>({
            product:{...oldState.product,like:oldState.product.like +1,updated:oldState.product.updated +1
        }}));
        console.log(this.state.product.like)
    }

        render(){
            return( 
                 <Card style={{ width: "17rem" }} className="m-2">
                        <Card.Img
                        variant="top"
                        src={require("../assets/images/" + this.state.product.img)}
                        width="100%"
                        height="200px"
                        />
                        <Card.Body>
                            <Card.Title>{this.state.product.name}</Card.Title>
                            <Card.Text>
                                {this.state.product.description}
                            </Card.Text>
                            <Card.Text>Price : {this.state.product.price} DT</Card.Text>
                            <Card.Text>Like : {this.state.product.like}</Card.Text>
                            <Card.Text>Quantity : {this.state.product.quantity}</Card.Text>
                            <Button variant="primary" style={{ marginRight:"50px"}} onClick={this.LikeProduct} >Like</Button>
                            <Button variant="info" style={{ marginLeft:"50px"}} onClick={this.handleBuyClick} disabled={this.state.product.quantity === 0}>
                                Buy
                            </Button>
                                
                        </Card.Body>
                            
                    </Card>

             
            )
        }
}
   