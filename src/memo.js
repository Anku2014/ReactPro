import React from 'react'

function MemoComp({name}) {
    console.log('Rendering memo component')
    return (
        <div>
            <h4>Memo Component Name {name}</h4>
        </div>
    )
}
 
export default React.memo(MemoComp)