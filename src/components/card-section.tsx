import { MiniCard } from './index'

type Props = {
  imgName1: string
  imgName2: string
  description1: string
  description2: string
  children: React.ReactNode
}

export default function CardSection({ imgName1, imgName2, description1, description2, children }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 py-10">
      {/* Main Card */}
      {children}

      <div className="grid grid-rows-2 gap-y-5 h-80 sm:h-full">
        <MiniCard
          imageName={imgName1}
          description={description1}
        />

        <MiniCard
          imageName={imgName2}
          description={description2}
        />
      </div>
    </div>
  )
}
