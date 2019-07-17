import React from 'react';
import { Input , Button , List  } from 'antd';

//无状态组件：当一个组件只含有render函数时，可以考虑使用无状态组件；
//无状态组件的性能要优于普通组件
const  TodoListUI = (props) => {

	return (
			<div style={{marginTop:'10px',marginLeft:'10px'}}>
				<div>
					<Input 
					 	value={props.inputValue} 
					 	placeholder="todo info"  
					 	style={{width:'300px',marginRight:'10px'}}
					 	onChange={props.handleInputChange}
					 	/>
					<Button type="primary" onClick={props.handleBtnClick}>提交</Button>
				</div>

				<List 
					style={{width:'300px', marginTop:'10px'}}
					bordered
				    dataSource={props.list}
				    renderItem={(item,index) => (<List.Item onClick={ () => {props.handleItemDelete(index)}} key={item} >{item}</List.Item>)}
			  	/>

			</div>
		)
}

export default TodoListUI;