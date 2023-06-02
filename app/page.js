import Image from 'next/image'
import styles from './page.module.css'

export default async function Page() {
  const data = await getData();
 
  return <main>
    {/* 获取用户名 */}
    <html>
    <form action="/send-data-here" method="post">
      <label for="first">First name:</label>
      <input type="text" id="first" name="first" />
      <label for="last">Last name:</label>
      <input type="text" id="last" name="last" />
      <button type="submit">Submit</button>
    </form>
    {/* 显示当前用户名 */}
    </html>
  </main>;
}