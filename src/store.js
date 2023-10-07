import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer'; // Import reducer chính của bạn

const store = createStore(rootReducer);

export default store;