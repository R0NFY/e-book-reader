import { useState } from 'react'
import { uid } from 'uid'
import styles from './Home.module.css'
import AddBook from './AddBook/AddBook'
import Book from './Book/Book'

const Home = () => {
  const [books, setBooks] = useState('')

  const renderedBooks = books && books.map((book) => <Book bookPath={book} key={uid()} />)

  return (
    (
      <div className={styles.container}>
        <AddBook books={books} updateBooks={setBooks} />
        {renderedBooks}
      </div>
    )
  )
}

export default Home
