type Props = {
  imgUrl: string
  description: string
}

export default function MainCard({ description, imgUrl }: Props) {
  return (
    <div className="aspect-square w-full rounded-[10%] overflow-clip relative flex flex-col p-3 bg-white/[0.075]">
      <picture className="h-fit max-h-[85%] aspect-square">
        <img
          alt="#"
          src={imgUrl}
          className="rounded-t-[10%] rounded-b-[7%]"
        />
      </picture>

      <h3 className="h-max flex-1 flex items-center p-3 px-5 h3__class text-[#F2DDCC]">{description}</h3>
    </div>
  )
}
