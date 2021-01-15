import React, { Component, useState } from 'react'
import { Nav, Jumbotron, Navbar, Figure, NavDropdown, Button, Carousel, Collapse, Breadcrumb, Accordion, Card } from 'react-bootstrap';
class Submit extends React.Component {
    constructor(props) {
        super(props)
 
        this.state = { count: 0 }
        this.handleClick = this.handleClick.bind(this)
    }
 
    increment() {
        this.setState({
            count: this.state.count + 1 
        });
    };
    handleClick() {
        this.setState({ count: this.state.count + 1 }) 
    }
 
    onClickme = () => { 
        this.setState({
            count: this.state.count + 1,
 
        })
    }
 
    onClickremove = () => {  
        this.setState({
            count: this.state.count - 1,
        })
    }
    render() {
        var {username}=this.props.match.params
        return (
            
            <div className="jumbo">
                Welcome {username}
                <Jumbotron>
                    <h1>Star Sports </h1>
 
                </Jumbotron>
                <h1>Total Items: {this.state.count}</h1>
                <div className="shop">
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71M7Xo3OTKL.jpg" />
                        <Card.Body>
                            <Card.Title>Bat</Card.Title>
                            <Card.Text>
                            A cricket bat is a specialised piece of equipment used by batsmen in the sport of cricket to hit the ball, typically consisting of a cane handle attached to a flat-fronted willow-wood blade.<br></br>
                                Cost: $130
                        </Card.Text>
 
                            <button className='btn btn-success' onClick={this.onClickme}>Add to Cart</button><br /><br />
 
                            <button className='btn btn-info' onClick={this.onClickremove}>Remove from Cart</button><br /><br />
                           
 
                        </Card.Body>



 
                    </Card>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" src="https://www.nordicsemi.com/-/media/Images/News/2019/Q4/SPORTCOR-1_WEB.jpg" width="5%"/>
                        <Card.Body>
                            <Card.Title>Ball</Card.Title>
                            <Card.Text>
                            A cricket ball is a hard, solid ball used to play cricket. A cricket ball consists of a cork core wound with string then a leather cover stitched on, and manufacture is regulated by cricket law at first-class level.
                                Cost: $25
                        </Card.Text>
 
                            <button className='btn btn-success' onClick={this.onClickme}>Add to Cart</button><br /><br />
 
                            <button className='btn btn-info' onClick={this.onClickremove}>Remove from Cart</button><br /><br />
                            
 
                        </Card.Body>



 
                    </Card>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 
                    
                </div>


 
               { <footer>
    <p>Owner: Sandeep Negi<br></br>
    <a href="mailto:sandeep@sports.com">sandeep@sports.com</a></p>
</footer>
    } 
 
            </div>
        )
    }
}
export default Submit