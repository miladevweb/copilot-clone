export default function Avatar() {
  return (
    <nav>
      <section className="h-16 flex justify-end items-end">
        <picture className="size-10 mr-2">
          <img
            alt="#"
            src="./avatar.jpg"
            className="rounded-full"
          />
        </picture>
      </section>
    </nav>
  )
}
