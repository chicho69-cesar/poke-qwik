import { component$, Slot, useStyles$ } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'

import Header from '~/components/header/header'
import Footer from '~/components/footer/footer'

/* Importamos los estilos del archivo styles.css en forma de estilos en linea,
es decir, comprimidos. */
import styles from './styles.css?inline'

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  }
})

export default component$(() => {
  /* Hacemos uso de los estilos que importamos para este componente mediante el
  hook useStyles$. */
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
