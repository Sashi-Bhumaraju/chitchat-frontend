import { useState } from "react";

function UseInputState ( intialValue ) {
    const [value,setValue] = useState(intialValue);
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const reset = () => {
        setValue("");
    }
    return [value, handleChange, reset];
}

export default UseInputState;