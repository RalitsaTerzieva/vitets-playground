import { useState } from 'react';

const Counter = () => {
const [count, setCount] = useState<number>(0);

const setCountHandler = () => {
    setCount(count + 2);
}

return (
    <div>
        <p>Count: {count}</p>
        <button onClick={setCountHandler}>
            Increment
        </button>
    </div>
)
}

export default Counter;