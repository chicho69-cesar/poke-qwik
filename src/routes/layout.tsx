import { component$, Slot, useStyles$ } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'

import Header from '~/components/header/header'
import Footer from '~/components/footer/footer'

import styles from './styles.css?inline'

/* NOTE: Con el hook de routeLoader$, podemos obtener el tiempo del servidor
cada que este layout se renderiza. */
export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  }
})

export default component$(() => {
  useStyles$(styles)

  return (
    <>
      <Header />
      
      <main>
        <Slot />
      </main>

      <Footer />
    </>
  )
})
