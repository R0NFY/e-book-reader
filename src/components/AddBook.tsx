import styles from './AddBook.module.css'

const AddBook = () => {
    return (
        <button className={styles.container}>
            <img src="plus-icon.svg" alt="plus icon" />
            <p>Add New</p>  
        </button>
    )
}

export default AddBook