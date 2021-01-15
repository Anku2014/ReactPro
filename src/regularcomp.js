import React,{Component} from 'react';

class RegularComp extends Component {
    render() {
        console.log('Regular component rendering')
        return (
            <div>
                <h4>Regular Component Name {this.props.name}</h4>
            </div>
        )
    }
}
 
export default RegularComp