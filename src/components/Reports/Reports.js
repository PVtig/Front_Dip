import React, {Component} from "react";
import Report from "./Report";
import { CardGroup } from "react-bootstrap";

export class Reports extends Component {
    render() {
        return (

            <main>
              <CardGroup>
                {
                  
                    this.props.items.map(el=>(
                    <Report key={el.id} data={el}/>
                ))
                }
                </CardGroup>
            </main>
        )
    }
}


export default Reports