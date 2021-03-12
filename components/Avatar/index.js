import styles from './styles.module.css'

const Avatar = ({ src, alt, text }) => {
  return (
    <div className={styles.container}>
      <img title={alt} alt={alt} className={styles.avatar} src={src} />
      {text && <strong>{text}</strong>}
    </div>
  )
}

export default Avatar
