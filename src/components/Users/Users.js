import React, {Component} from "react";
import Car from "./User";
import { CardGroup } from "react-bootstrap";

export class Users extends Component {
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


export default Users