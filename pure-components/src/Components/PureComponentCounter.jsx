import React, { PureComponent } from 'react'
import '../App.css'

export class PureComponentCounter extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            toggle: true,
        }
    }

    countHandler = () => {
if(this.state.toggle){
    this.setState((prevState) => ({
        count: prevState.count + 1,
    }));
}
    }

    toggleHandler = () => {
        this.setState((prevState) => ({
            toggle: !prevState.toggle,
        }));
    }

    render() {

        return (
            <div className='main'>

                <h1 className="head">Pure Component</h1>
                <h1>{this.state.count}</h1>

                <div className="btn-grp">
                    <button onClick={this.toggleHandler}>Toggle</button>
                    <button onClick={this.countHandler}>Count</button>
                </div>

            </div>
        )
    }
}

export default PureComponentCounter