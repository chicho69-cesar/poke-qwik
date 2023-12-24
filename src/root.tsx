import { component$ } from '@builder.io/qwik'
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city'

import { RouterHead } from './components/router-head/router-head'
/* Primera forma de importar archivos css, es usando la importación normal de toda
la vida. */
import './global.css'

export default component$(() => {
  /**
   * El archivo root de un sitio QwikCity siempre comienza con el componente <QwikCityProvider>
   * seguido inmediatamente por las etiquetas del document <head> y <body>
   * No remuevas los elementos <head> y <body>
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet='utf-8' />
        <link rel='manifest' href='/manifest.json' />
        
        <RouterHead />
      </head>

      <body lang='es'>
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  )
})
