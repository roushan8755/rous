import { createStore } from 'redux';
import data from './reducer'

const store = createStore(data);
export default store;