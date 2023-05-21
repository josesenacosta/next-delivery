import styles from './InputField.module.css'
import EyeClosed from './EyeClosed.svg'
import EyeOpened from './EyeOpened.svg'
import { useState } from 'react';

type Props = {
  color: string;
  placeholder: string;
  value: string;
  onChange: (newValue: string) => void;
  isPassword?: boolean;
}

const InputField = ({ color, placeholder, value, onChange, isPassword }: Props) => {

  const [showPassword, setShowPassword] = useState(false)
  const [focused, setFocused] = useState(false);

  return (
    <div className={styles.container} style={{ borderColor: focused ? color : '#f9f9fb', backgroundColor: focused ? '#fff' : "#f9f9f9" }}>
      <input className={styles.input}
        type={isPassword ? (showPassword ? 'text' : 'password') : 'text'}
        color={color}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {isPassword && (
        <div
          className={styles.showPassword}
          onClick={() => setShowPassword(!showPassword)}
        >
          {!showPassword ? <EyeOpened color="#bbb" /> : <EyeClosed color="#bbb" />}
        </div>)}
    </div>
  )
}

export default InputField;
