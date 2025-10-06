import styles from './Hero.module.scss'

export const Hero = () => {
  console.log(styles)
  return (
  <section className={styles.Hero}>
    <h1>Future world</h1>
    <h2 className="my-world">Empowering Your Tomorrow, Today!</h2>
  </section>
  )
}
