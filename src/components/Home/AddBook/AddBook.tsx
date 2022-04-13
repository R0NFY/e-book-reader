import styles from './AddBook.module.css'

const AddBook = () => (
  <label htmlFor="add-book" className={styles.container}>
    <img src="plus-icon.svg" alt="plus icon" />
    <p>Add New</p>
    <input className={styles.hidden} type="file" accept=".epub" name="Add Book" id="add-book" />
  </label>
)

export default AddBook
