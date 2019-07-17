import { takeEvery ,put }  from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import { getInitListAction } from './actionCreators';
import axios from 'axios';

function* getInitList() {
	try {
		const res = yield axios.get('/list.json');
		const action = getInitListAction(res.data);
		yield put(action);
	}catch(e){
		console.log('list.json网络请求失败');
	}
}

//generator 函数
function* mySaga() {
  yield takeEvery(GET_INIT_LIST,getInitList);
}

export default mySaga;