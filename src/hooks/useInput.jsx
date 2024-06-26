import { useState} from 'react';
export function useInput (defaultValue) { 
    const [enteredValue, setEnteredValue] = useState(defaultValue);
    const [valueEdidted, setValueEdidted] = useState(false);
    const handleOnChangeValue = (e) => setEnteredValue(e.target.value); 
    const handleOnBlur = () => { 
        setValueEdidted(true)
    }
    return {
        value: enteredValue,
        hasError: valueEdidted && enteredValue?.length === 0,
        handleOnChangeValue,
        handleOnBlur
    }
    
}