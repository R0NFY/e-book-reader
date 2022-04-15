import styles from './AddBook.module.css'

const AddBook = ({ updateBooks, books }) => {
  const readBook = (el) => {
    const reader = new FileReader()

    reader.addEventListener('load', (e) => {
      const book = e.target.result
      updateBooks([...books, book])
    })

    reader.readAsArrayBuffer(el.target.files[0])
  }
  return (
    <label htmlFor="add-book" className={styles.container}>
      <img src="plus-icon.svg" alt="plus icon" />
      <p>Add New</p>
      <input onChange={(el) => readBook(el)} className={styles.hidden} type="file" accept=".epub" name="Add Book" id="add-book" />
    </label>
  )
}

export default AddBook
