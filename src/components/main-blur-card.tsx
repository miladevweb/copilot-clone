type Props = {
  imgUrl: string
  primaryLabel: string
  secondaryLabel: string
  buttonLabel: string
}

export default function MainBlurCard({ imgUrl, primaryLabel, secondaryLabel, buttonLabel }: Props) {
  return (
    <div className="aspect-square w-full rounded-[10%] overflow-clip relative flex flex-col justify-end">
      <picture className="absolute top-0 left-0">
        <img
          alt="#"
          src={imgUrl}
          className="object-[60%_0%]"
        />
      </picture>

      <div className="pb-6 px-7 bg-[#483D4E] flex flex-col justify-end gap-y-3 relative blur__class">
        <div className="text-[#E1BBA8]">
          <h5 className="opacity-80">{secondaryLabel}</h5>

          <h3 className="h3__class">{primaryLabel}</h3>
        </div>

        <button className="bg-[#E1BBA8] text-[#483D4E] block w-full h-12 rounded-[1.25rem]">{buttonLabel}</button>
      </div>
    </div>
  )
}
