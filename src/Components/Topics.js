import React from 'react'
import { Route, Link} from 'react-router-dom'
import Topic from './Topic'
// const Topic = ({match}) => (
//     <div>
//         <h3>{match.param.topicId}</h3>
//     </div>
// );
const Topics = ({match}) => {
    return (
        <div>
            <h1>React Topics</h1>
            <ul>
              <li><Link to={`${match.url}/rendering`}>Rendering with React</Link></li>
              <li><Link to={`${match.url}/component`}>Component</Link></li>
              <li><Link to={`${match.url}/propsState`}>Props vs State</Link></li>  
            </ul>
            <Route path={`${match.url}/:topicId`} component={Topic}></Route>
            <Route path={match.url} exact render={() =><h3>Please select any topic</h3>}></Route>
        </div>
    )
}

export default Topics
