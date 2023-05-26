import styles from './Button.module.css'

type Props = {
  color: string;
  label: string;
  onClick: () => void;
  fill?: boolean
}

const Button = ({ color, label, onClick, fill }: Props) => {
  return (
    <div className={styles.container}
      onClick={onClick}
      style={{
        color: fill ? "#fff" : color,
        borderColor: color,
        backgroundColor: fill ? color : "transparent"
      }}
    >
      {label}
    </div>
  )
}

export default Button
