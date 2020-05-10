import React  from 'react';
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd'


const TodoListUI = (props) => {
    return (  
        <div>
            <div>
                <Input
                    placeholder={props.inputValue}
                    style = {{width:'250px', marginRight:'10px'}}
                    onChange = {props.changeInputValue}
                />
                <Button
                    type='primary'
                    onClick ={props.clickBtn}
                >add</Button>
            </div>
            <div style = {{width:'300px', margin:'10px'}} >
                <List
                    bordered
                    dataSource = {props.list}
                    renderItem = {(item,index)=>(<List.Item onClick={()=>{props.deleteItem(index)}}>{item}</List.Item>)}
                />
            </div>
        </div>
    );
}

export default TodoListUI;

// class TodoListUI extends Component {
    
//     render() { 
//         return (  
//             <div>
//                 <div>
//                     <Input
//                         placeholder={this.props.inputValue}
//                         style = {{width:'250px', marginRight:'10px'}}
//                         onChange = {this.props.changeInputValue}
//                     />
//                     <Button
//                         type='primary'
//                         onClick ={this.props.clickBtn}
//                     >add</Button>
//                 </div>
//                 <div style = {{width:'300px', margin:'10px'}} >
//                     <List
//                         bordered
//                         dataSource = {this.props.list}
//                         renderItem = {(item,index)=>(<List.Item onClick={()=>{this.props.deleteItem(index)}}>{item}</List.Item>)}
//                     />
//                 </div>
//             </div>
//         );
//     }
// }
 
