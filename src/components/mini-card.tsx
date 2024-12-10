type Props = {
  imageUrl: string
  description: string
}

export default function MiniCard({ imageUrl, description }: Props) {
  return (
    <div className="bg-white/[0.075] rounded-[2rem] flex gap-x-5 p-4 overflow-clip">
      <picture className="min-[440px]:h-40 h-32  flex-1 aspect-square">
        <img
          alt="#"
          src={imageUrl}
          className="rounded-3xl"
        />
      </picture>

      <h4 className="min-[440px]:text-2xl text-lg leading-none flex-[5] flex items-end">{description}</h4>
    </div>
  )
}
