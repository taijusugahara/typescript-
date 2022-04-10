import React from 'react';
// import Counter from './Counter'
import CounterReducer from './CounterReducer ';

interface AppProps{
  message?:string;
}
const App:React.FC<AppProps> = ({message}) => {
  return (
    <div>
      {/* <Counter /> */}
      <CounterReducer />
    </div>
  );
}

App.defaultProps ={
  message: "Hello defaultProps",
}

export default App;
