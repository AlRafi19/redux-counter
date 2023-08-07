import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/state/counter/CounterSlice";
const Counter = () => {

    const count = useSelector((state)=>state.counter.value)
    const dispatch= useDispatch()
    {
        /*
        The useSelector hook is used to extract data from the Redux store state 
        for use in a React component. The useSelector hook takes
         a selector function as its argument. 
         The selector function is a function that takes the Redux store state 
         as its input and returns the value that you want to extract from the state.

        In the code const count = useSelector((state)=>state.counter.value), 
        the selector function is a simple function that takes the Redux store state 
        as its input and returns the value of the counter.value property from the state. 
        The counter.value property is the current value of the counter.

        The state parameter is used to pass the Redux store state to the selector function.
        The selector function can then use the state parameter to access the data 
        that it needs from the store.

        In this case, the state parameter is used to access the counter.
        value property from the store. The counter.value property is the current value
        of the counter.
        The selector function then returns the value of the counter.value property.

        The useSelector hook will subscribe to the Redux store and runs whenever an action is dispatched. This means that the count variable will always be up-to-date with the current value of the counter. */
    }
    return (
        <div className='card'>
            <div className='card-header bg-primary'>
                <h4 className='text-white'>My Counter App</h4>
            </div>
            <div className='card-body'>
                <h2>{count}</h2>
                <div className='my-4'>
                    <button onClick={()=>{dispatch(increment())}} className='btn btn-success'>Increase</button>
                    <button onClick={()=>{dispatch(decrement())}} className='btn mx-2 btn-danger'>Decrease</button>
                </div>
            </div>

        </div>
       
    );
};

export default Counter;