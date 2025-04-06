# Redux

# Redux store
- big object, it is keep in a  global central place

# slices
- parts of redux store
- ex cart slice, user slice etc

# dispatch action
- dispatches an action -> which calls a reducer function-> which updates the slice of a redux store

# reducer function

# selector
- subscribing to the store / sync with the store

# set up
- install @reduxjs/toolkit and react-redux

- build store

 import {configureStore} from '@reactjs/toolkit';
 
 const appStore=configureStore();

- connect out store to our app

import {Provider} from 'react-redux';

<Provider store={appStore}>
<App/>
</Provider>


- create slice
import {createSlice} from '@reacctjs/toolkit;

const slice=createSlice({
    name:'slice-name',
    initialState:{
        data:[]
    },
    reducers:{
        add:(state,acton)=>{}
    }
})

- dispatch(action)
- selector