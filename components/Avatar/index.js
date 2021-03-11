import styles from "./styles.module.css"

const Avatar = ({ src, alt, text }) => {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={src} alt={alt} />
      {text && <strong>{text}</strong>}
    </div>
  )
}

export default Avatar
