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
              imgName1="img2"
              imgName2="img3"
              description1="Share your favorite author to get a book"
              description2="Let's co-write a birthday letter"
            >
              <MainBlurCard
                imgName="img1"
                buttonLabel="Play Now"
                secondaryLabel="Today's top stories on Copilot Daily"
                primaryLabel="Minimum wage increases, and more"
              />
            </CardSection>

            {/* Topics Section */}
            <h2 className="h2__class">Topics I thought you'd enjoy</h2>

            <CardSection
              imgName1="img5"
              imgName2="img6"
              description1="Ask me for a week of plant-forward meals"
              description2="Adventure games that teach critical thinking"
            >
              <MainCard
                imgName="img4"
                description="Decompress from your day"
              />
            </CardSection>

            {/* Fresh Section */}
            <h2 className="h2__class">Something fresh</h2>

            <CardSection
              imgName1="img8"
              imgName2="img9"
              description1="How AI is reshaping healthcare today"
              description2="Beat the winter slump by brightening your mood"
            >
              <MainCard
                imgName="img7"
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
