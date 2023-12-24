import { component$ } from '@builder.io/qwik'

import { useServerTimeLoader } from '~/routes/layout'
import styles from './footer.module.css'

export default component$(() => {
  const serverTime = useServerTimeLoader()

  return (
    <footer class={styles.footer}>
      <div class='container'>
        <a
          href='https://www.github.com/chicho69-cesar'
          target='_blank'
          class={styles.anchor}
        >
          <span>Made with ♡ by Cesar Villalobos Olmos</span>
          <span class={styles.spacer}>|</span>
          <span>{serverTime.value.date}</span>
        </a>
      </div>
    </footer>
  )
})
