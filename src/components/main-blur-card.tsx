type Props = {
  imgUrl: string
  primaryLabel: string
  secondaryLabel: string
  buttonLabel: string
}

export default function MainBlurCard({ imgUrl, primaryLabel, secondaryLabel, buttonLabel }: Props) {
  return (
    <div className="bg-[#483D4E] aspect-square w-full rounded-[12%]  overflow-clip grid grid-rows-[15%_85%] min-[360px]:grid-rows-[45%_55%] min-[490px]:grid-rows-[55%_45%] min-[532px]:grid-rows-[65%_35%]">
      <picture>
        <img
          alt="#"
          src={imgUrl}
        />
      </picture>

      <div className="pb-6 px-7 flex flex-col justify-end gap-y-3 relative blur__class">
        <div>
          <h5>{secondaryLabel}</h5>

          <h3 className="font-medium text-[1.55rem] leading-tight">{primaryLabel}</h3>
        </div>

        <button className="bg-[#E1BBA8] text-[#483D4E] block w-full h-12 rounded-[1.25rem]">{buttonLabel}</button>
      </div>
    </div>
  )
}
