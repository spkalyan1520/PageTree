import React from 'react';
import fetchData from './service/data';
import TreeElement from './TreeElement';
import './App.css';

export default class NestedTree extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        fetchData().then(data => {
            console.log(data);
            this.setState({data});
        })
    }

    render(){
        return (<div>
            Nested Tree Comp
            {this.state.data && (
                <div>
                    <div>
                        {this.state.data.map(el=> (
                            <div key={el.id}>
                                <TreeElement name = {el.name} children={el.children}></TreeElement>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>)
    }
}