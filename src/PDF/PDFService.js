import React from 'react';
import PDF from "./PDF";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PostService from "../API/PostService";
class PDFServise extends React.Component {
    constructor(props){
      super (props)
      PostService.getAll('car').then((res)=>{
        this.setState({cars: res.data})
        })
      this.state = {
        cars: []
      }
    }
    render(){
      return (
        <div >
          <PDFDownloadLink document={<PDF items = {this.state.cars}/>} fileName="myfirstpdf.pdf">
        {({ loading, url, error, blob }) =>
          loading ? (
            <button>Create PDF</button>
          ) : (
            <button>Create PDF</button>
          )
        }
      </PDFDownloadLink>
        </div>
      );
  
    }
  }
// function PDFServise() {
//   return (
//     <div>
//       <PDFDownloadLink document={<PDF />} fileName="myfirstpdf.pdf">
//         {({ loading, url, error, blob }) =>
//           loading ? (
//             <button>Create PDF</button>
//           ) : (
//             <button>Create PDF</button>
//           )
//         }
//       </PDFDownloadLink>
//     </div>
//   );
// }

export default PDFServise;