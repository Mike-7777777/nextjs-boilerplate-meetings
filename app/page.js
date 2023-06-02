import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    fetch('/some-api', { method: form.method, body: formData });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.js</code>
        </p>
      </div>
      {/* TODO 显示当前时间表（从服务器获取） */}

      <div className={styles.center}>
      
      {/* 新用户的时间表提交到服务器 */}
      <form action="/send-data-here" method="post">
        {/* name */}
        <label for="name">
          Your name: <input type="text" id="first" name="name" />
        </label>
        {/* time slot,  7 x 7 = 49 */}
        <label for="slot">
          Time Slot: 
          <input type="checkbox" name="slot_1_8" /> 8-12
          <input type="checkbox" name="slot_1_8" /> 12-14
          <input type="checkbox" name="slot_1_8" /> 14-16
          <input type="checkbox" name="slot_1_8" /> 16-18
          <input type="checkbox" name="slot_1_8" /> 18-20
          <input type="checkbox" name="slot_1_8" /> 20-22
          <input type="checkbox" name="slot_1_8" /> 22-24
        </label>

        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}

