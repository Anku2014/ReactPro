import React,{PureComponent} from 'react';

class PureComp extends PureComponent {
    render() {
        console.log('Pure component rendering')
        return (
            <div>
                <h4>Pure Component Name {this.props.name}</h4>
            </div>
        )
    }
}
 
export default PureComp