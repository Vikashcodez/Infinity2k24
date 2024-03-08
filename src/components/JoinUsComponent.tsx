import { BackgroundBeams } from "./ui/BackgroundBeams"
import { PinContainer } from "./ui/ThreeDPin"

function JoinUsComponent() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="py-10 mx-4">
        <div className="h-[40vh] w-full flex items-center justify-center ">
            <PinContainer
                title="📃 22nd & 23rd March"
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-slate-100 text-3xl">
                    INFINITY 2K24
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500 text-xl">
                    COME JOIN US ON
                    </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                </div>
            </PinContainer>
        </div>
    </div>
      <BackgroundBeams />
    </div>
  )
}

export default JoinUsComponent
