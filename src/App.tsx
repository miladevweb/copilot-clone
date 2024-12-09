import { Avatar } from './components'
import type { FormEvent } from 'react'

interface IFormEvent extends FormEvent<HTMLFormElement> {
  target: EventTarget & { [key: number]: HTMLElement }
}

export default function App() {
  const handleSubmit = (e: IFormEvent) => {
    console.log(e.target[1])
  }

  return (
    <>
      <div className="background"></div>

      <main>
        <Avatar />

        <form onSubmit={handleSubmit}></form>

        <section className="px-5 py-8">
          <h1 className="header">Mila, it&apos;s great to see you</h1>

          <div className="grid grid-cols-1 py-10">
            <div className="bg-blue-500 aspect-square w-full rounded-[13%]"></div>
            <div className="bg-orange-500 h-44"></div>
            <div className="bg-indigo-500 h-44"></div>
          </div>
        </section>
      </main>
    </>
  )
}
