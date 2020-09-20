import React, { Component } from 'react'

import { connect } from 'react-redux'

const TodoListReactRedux = (props) => {
    let { inputValue, inputChange, clickSubmit, list } = props

    return (
        <div>
            <div>
                <input value={inputValue}
                    onChange={inputChange}></input>
                <button onClick={clickSubmit}>提交</button>
            </div>
            <div>
                <ul>
                    {
                        list.map((item, index) => {
                            return (
                                <li key={index}>{item}</li>
                            )
                        })
                    }
                </ul>

            </div>
        </div>
    );
}
// class TodoListReactRedux extends Component {

//     render() {
//         let { inputValue, inputChange, clickSubmit, list } = this.props

//         return (
//             <div>
//                 <div>
//                     <input value={inputValue}
//                         onChange={inputChange}></input>
//                     <button onClick={clickSubmit}>提交</button>
//                 </div>
//                 <div>
//                     <ul>
//                         {
//                             list.map((item, index) => {
//                                 return (
//                                     <li key={index}>{item}</li>
//                                 )
//                             })
//                         }
//                     </ul>

//                 </div>
//             </div>
//         );
//     }

// }
const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const dispatchToProps = (dispatch) => {
    return {
        inputChange(e) {
            let action = {
                type: 'changeInputValue',
                value: e.target.value
            }
            dispatch(action)
        },
        clickSubmit() {
            let action = {
                type: 'additem'
            }
            dispatch(action)
        }
    }
}
export default connect(stateToProps, dispatchToProps)(TodoListReactRedux);