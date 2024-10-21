import { useState } from 'react';

const InputField = () => {
    const [value, setValue] = useState<string>('');
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    return <input value={value} onChange={handleChange}/>
}

export default InputField;