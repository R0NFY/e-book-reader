import Epub from 'epubjs/lib/index'
import { useState, useEffect } from 'react'
import styles from './Book.module.css'

const Book = ({ bookPath }: ArrayBuffer) => {
  const [bookData, setBookData] = useState(null)

  const getBook = async () => {
    const book = bookPath ? await Epub(bookPath) : ''

    const ready = await book.ready

    if (ready) {
      console.log(ready)
      const cover = await book.coverUrl()
      setBookData({ cover, author: ready[2].creator, title: ready[2].title })
    }
  }

  useEffect(() => {
    getBook()
  }, [])

  return (
    <div className={styles.container}>
      <img src={bookData?.cover} alt="book cover" />
      <p>{bookData?.author}</p>
      <p>{bookData?.title}</p>
    </div>
  )
}

export default Book
