"use client"

interface Props {
  message?: string
}

const Banner = ({ message }: Props) => {
  const displayMessage = message || "Information may change as we update and refine content."

  return (
    <div className="w-full bg-[#FFF3CD] flex justify-center text-[#664D03] px-4 py-3 mt-16 mb-4">
      <div className="flex flex-col gap-1">
        <div className="text-sm">{displayMessage}</div>
      </div>
    </div>
  )
}

export { Banner }
