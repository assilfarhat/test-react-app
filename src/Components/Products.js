import {React,Component} from "react"
import Product from "./Product";
import   products  from "../products.json"
import { Row } from "react-bootstrap";



export default class Products extends Component{
    
    

   
    

   
    render()
    {
        
        return(

                <Row >
                    {products.map((product,index)=>
                    (<Product
                    key={index}
                    product={product}
                   
                    ></Product>
                    ))}
            
                </Row>   

        );
    }

}

