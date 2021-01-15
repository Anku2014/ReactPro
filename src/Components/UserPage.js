import React, { Component } from 'react'
import { Table} from 'react-bootstrap';
 
class UserPage extends Component {
    constructor(props) {
        super(props)
 
        this.state = {
            bookDetails:[]
        }
    }
    componentDidMount(){
        fetch("http://localhost:3000/books").then(
      res => {
        res.json()
          .then(endRes => this.setState({ bookDetails: endRes })).catch(err => console.log(err))
      })
      .catch(err => console.log(err))
 
    }
    
    render() {
       let result=[];
       const{bookDetails}=this.state
        for (let i = 0; i < bookDetails.length; i++) {
            result.push(
                <tr>
                    <td>{bookDetails[i].id}</td>
                    <td>{bookDetails[i].title}</td>
                    <td>{bookDetails[i].author}</td>
                    <td>{bookDetails[i].subject}</td>
                    <td><button>Reserve</button>&nbsp;&nbsp;&nbsp;<button>check out</button></td>
                </tr>
            
           )
 
        }
        console.log("bookDetails",bookDetails);
        return (
 
            <div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Subject</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                       
                        {result}
                    </tbody>
                </Table>
            </div>
        )
    }
}
 
export default UserPage