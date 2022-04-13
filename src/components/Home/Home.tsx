import styles from './Home.module.css'
import AddBook from './AddBook/AddBook'

const Home = () => (
  <div className={styles.container}>
    <div>Home</div>
    <AddBook />
  </div>
)

export default Home
