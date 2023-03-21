import { useEffect, useState } from "react";


export default function useValidation(value, validations) {
    const [isEmpty, setEmpty] = useState(true)
    const [minLengthError, setMinLengthError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [inputValid, setInputValid] = useState(false)

    useEffect(() => {
        for (const validation in validations) {
            switch(validation){
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break;
                case 'isEmply':
                    value ? setEmpty(false) : setEmpty(true)
                    break;
                case 'isEmail' :
                    String(value)
                    .toLowerCase()
                    .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
                    ? setEmailError(false) : setEmailError(true)
                    break
                default: 
                    return {isEmpty, minLengthError, emailError, inputValid}   
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    useEffect(() => {
        if (emailError || minLengthError || isEmpty){
            setInputValid(false) 
        } else {
            setInputValid(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [emailError, minLengthError, isEmpty])

    return {isEmpty, minLengthError, emailError, inputValid}
}