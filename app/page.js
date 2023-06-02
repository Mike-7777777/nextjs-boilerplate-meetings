import Image from 'next/image'
import styles from './page.module.css'
import App from './App'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* // TODO 显示当前时间表（从服务器获取） */}
      {/* 上传表单 */}
      {/* <div className={styles.center}> */}
      <App />
      {/* </div> */}
    </main>
  )
}
