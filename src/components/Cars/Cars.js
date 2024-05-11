import React, {Component} from "react";
import Car from "./Car";
import { CardGroup } from "react-bootstrap";

export class Cars extends Component {
    render() {
        return (

            <main>
              <CardGroup>
                {
                  
                    this.props.items.map(el=>(
                    <Car key={el.id} data={el}/>
                ))
                }
                </CardGroup>
            </main>
        )
    }
}


export default Cars