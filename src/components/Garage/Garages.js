import React, {Component} from "react";
import Garage from "./Garage";
import { CardGroup } from "react-bootstrap";

export class Garages extends Component {
    render() {
        return (

            <main>
              <CardGroup>
                {
                  
                    this.props.items.map(el=>(
                    <Garage key={el.id} data={el}/>
                ))
                }
                </CardGroup>
            </main>
        )
    }
}


export default Garages