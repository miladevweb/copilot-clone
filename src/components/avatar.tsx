import { getImage } from '@/utils/get-image'

export default function Avatar() {
  return (
    <nav>
      <section className="h-16 flex justify-end items-end">
        <picture className="size-10 mr-2 cursor-pointer">
          <img
            alt="#"
            src={getImage('avatar')}
            className="rounded-full"
          />
        </picture>
      </section>
    </nav>
  )
}
