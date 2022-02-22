import InputMask from 'react-input-mask';
import MDInput from "components/MDInput";

export const InputPhone = (props) => (
  <InputMask value={props.value} mask="+7 999 999 99 99" maskChar="" formatChars={{'9' : '[0-9]'}} onChange={props.onChange} disabled={false}>
    {(inputProps) => <MDInput {...inputProps} 
                      fullWidth={props.fullWidth} 
                      type={props.type}
                      label={props.label}
                      name={props.name}
                      required={props.required}
                      value={props.value}
                      />}
  </InputMask>
);