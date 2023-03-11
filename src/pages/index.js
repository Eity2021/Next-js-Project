
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className={styles.container}>
    
      <h1 className={styles.red}>welcome Eity</h1>
      <button>Add Me</button>
    </div>
    </>
  )
}
