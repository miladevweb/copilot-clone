type Props = {
  imageUrl: string
  description: string
}

export default function MiniCard({ imageUrl, description }: Props) {
  return (
    <div className="bg-white/[0.075] rounded-[2rem] flex gap-x-5 p-3 overflow-clip">
      <picture className="flex-1 aspect-square">
        <img
          alt="#"
          src={imageUrl}
          className="rounded-3xl"
        />
      </picture>

      <h4 className="text-xl min-[350px]:text-2xl font-medium text-[#F2DDCC] leading-none min-[350px]:leading-none flex-[5] flex items-end">{description}</h4>
    </div>
  )
}
