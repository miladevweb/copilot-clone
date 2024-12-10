import { Avatar } from './components'

export default function App() {
  return (
    <>
      <div className="background"></div>

      <main>
        <Avatar />

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
