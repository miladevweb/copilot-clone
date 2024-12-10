import { MiniCard } from './index'

type Props = {
  imgUrl1: string
  imgUrl2: string
  description1: string
  description2: string
  children: React.ReactNode
}

export default function CardSection({ imgUrl1, imgUrl2, description1, description2, children }: Props) {
  return (
    <div className="grid grid-cols-1 gap-5 py-10">
      {/* Main Card */}
      {children}

      <div className="grid grid-cols-1 gap-y-5">
        <MiniCard
          description={description1}
          imageUrl={imgUrl1}
        />

        <MiniCard
          imageUrl={imgUrl2}
          description={description2}
        />
      </div>
    </div>
  )
}
