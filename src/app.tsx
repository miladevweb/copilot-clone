import { Avatar, CardSection, InputSection, MainBlurCard, MainCard } from './components'

export default function App() {
  return (
    <>
      <div className="background"></div>

      <main>
        <Avatar />

        <div className="flex justify-center">
          <section className="px-6 pt-8 max-w-[875px]">
            <h1 className="header">Mila, it&apos;s great to see you</h1>

            <CardSection
              imgUrl1="/img2.jfif"
              imgUrl2="/img3.jfif"
              description1="Share your favorite author to get a book"
              description2="Let's co-write a birthday letter"
            >
              <MainBlurCard
                imgUrl="/img1.jfif"
                buttonLabel="Play Now"
                secondaryLabel="Today's top stories on Copilot Daily"
                primaryLabel="Minimum wage increases, and more"
              />
            </CardSection>

            {/* Topics Section */}
            <h2 className="h2__class">Topics I thought you'd enjoy</h2>

            <CardSection
              imgUrl1="/img5.jfif"
              imgUrl2="/img6.jfif"
              description1="Ask me for a week of plant-forward meals"
              description2="Adventure games that teach critical thinking"
            >
              <MainCard
                imgUrl="/img4.jfif"
                description="Decompress from your day"
              />
            </CardSection>

            {/* Fresh Section */}
            <h2 className="h2__class">Something fresh</h2>

            <CardSection
              imgUrl1="/img8.jfif"
              imgUrl2="/img9.jfif"
              description1="How AI is reshaping healthcare today"
              description2="Beat the winter slump by brightening your mood"
            >
              <MainCard
                imgUrl="/img7.png"
                description="Decompress from your day"
              />
            </CardSection>

            <InputSection />
          </section>
        </div>

        <div className="mb-20"></div>
      </main>
    </>
  )
}
