import { useState } from "react";
import useValidation from "./useValidation";


export default function useInput(initialValue, validations) {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validations)
     
    const onChange = (e) => {
        setValue(e.target.value)
    }

    const clearValue = () => {
        setValue('')
    }
    const onBlur = (e) => {
        setDirty(true)
    }

    return {value, clearValue, onChange, onBlur, isDirty, ...valid}
}