import { History, Microphone, Plus } from './svg'

export default function InputSection() {
  return (
    <div className="bg-[#1a223a] w-[90%] md:w-[700px] left-1/2  fixed sm:bottom-10 bottom-5 py-2 px-4 outline outline-1 outline-white/20 rounded-full flex items-center gap-x-4 shadow-2xl input__class">
      <div className="flex items-center gap-4">
        <History />
        <Plus />
      </div>

      <input
        type="text"
        placeholder="Message Copilot"
        className="bg-[#0f1421] h-[2.75rem] px-4 rounded-full flex-1 min-w-[40%] outline-0"
      />

      <Microphone />
    </div>
  )
}
