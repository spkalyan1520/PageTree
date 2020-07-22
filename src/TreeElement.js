import React, { useState } from 'react';

const TreeElement = (props)=> {
    let [showChildren, setShowChildren] = useState(true);
    const toggleChildren = ()=>{
        setShowChildren(!showChildren);
    }
    return (
        <div>
            {props.name && (
                <div>
                    {props.children && (
                        <span onClick={toggleChildren}>
                            ▼
                        </span>
                    )}
                    {props.name}
                </div>
            )}
            {props.children && showChildren && (
                    <div>
                        {props.children.map(child => (
                            <TreeElement key={child.id} name={child.name} children = {child.children}/>
                        ))}
                    </div>
                )
            }
        </div>
    )
}

export default TreeElement;