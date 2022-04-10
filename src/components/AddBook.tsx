import styles from './AddBook.module.css'

const AddBook = () => {
    return (
        <>
        <label htmlFor="add-book" className={styles.container}>
            <img src="plus-icon.svg" alt="plus icon" />
            <p>Add New</p>  
        </label>
        <input className={styles.hidden} type="file" accept=".pdf, .epub, .mobi" name="Add Book" id="add-book" />
        </>
    )
}

export default AddBook