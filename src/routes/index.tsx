import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <>
      <h1>Hello World!!!</h1>
    </>
  )
})

export const head: DocumentHead = {
  title: 'Pokedex | The best pokemon game',
  meta: [
    {
      name: 'description',
      content: 'Pokedex Aplication to play with pokemons.',
    },
  ],
}
