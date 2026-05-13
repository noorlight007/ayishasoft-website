"use client"

import { useEffect, useRef } from "react"

const companies = [
  
  // {
  //   name: "Chef-bot.de",
  //   logo: (
  //     <a href="https://chef-bot.de" target="_blank">
  //     <svg viewBox="0 0 140 40" fill="none" className="w-full h-full">
  //       <text x="5" y="25" className="font-semibold text-[14px]" fill="currentColor">
  //         Chef-bot.de
  //       </text>
  //     </svg>
  //     </a>
  //   ),
  // },
  {
    name: "Aiman Design Ltd",
    logo: (
      <a href="https://aimandesignltd.com" target="_blank">
      <svg viewBox="0 0 140 40" fill="none" className="w-full h-full">
        <text x="5" y="25" className="font-semibold text-[12px]" fill="currentColor">
          Aiman Design Ltd.com
        </text>
      </svg>
      </a>
    ),
  },
  {
    name: "Recruitment Direct",
    logo: (
      <a href="https://rd1.co.uk" target="_blank">
      <svg viewBox="0 0 140 40" fill="none" className="w-full h-full">
        <text x="5" y="25" className="font-semibold text-[14px]" fill="currentColor">
          Recruitment Direct
        </text>
      </svg>
      </a>
    ),
  },
  {
    name: "Afrobeutic",
    logo: (
      <a href="https://www.afrobeutic.com" target="_blank">
      <svg viewBox="0 0 140 40" fill="none" className="w-full h-full">
        <text x="5" y="25" className="font-semibold text-[14px]" fill="currentColor">
          Afrobeutic.com
        </text>
      </svg>
      </a>
    ),
  },
  {
    name: "OtterQ",
    logo: (
      <a href="https://www.otterq.com" target="_blank">
      <svg viewBox="0 0 140 40" fill="none" className="w-full h-full">
        <text x="5" y="25" className="font-semibold text-[14px]" fill="currentColor">
          OtterQ.com
        </text>
      </svg>
      </a>
    ),
  },
  
]

export default function LogoCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = scrollContainer.scrollWidth / 2

    const animate = () => {
      scrollPosition -= 0.7
      if (scrollPosition <= 0) {
        scrollPosition = scrollContainer.scrollWidth / 2
      }
      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="container mx-auto w-full overflow-hidden py-2 xs:py-2 sm:py-3 md:py-3 lg:py-4 xl:py-4 2xl:py-5 relative bg-[#0a2540]">
      <div className="absolute left-0 right-0 top-0 h-12 xs:h-14 sm:h-16 md:h-18 lg:h-20 xl:h-22 bg-gradient-to-b from-black/60 to-transparent z-10 pointer-events-none" />

      <div className="absolute left-0 right-0 bottom-0 h-12 xs:h-14 sm:h-16 md:h-18 lg:h-20 xl:h-22 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none" />

      <div className="absolute left-0 top-0 bottom-0 w-8 xs:w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 bg-gradient-to-r from-[#0a2540] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 xs:w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 bg-gradient-to-l from-[#0a2540] to-transparent z-10 pointer-events-none" />
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div 
        ref={scrollRef} 
        className="flex gap-8 xs:gap-10 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-18 2xl:gap-20 overflow-x-hidden scrollbar-hide" 
        style={{ scrollBehavior: "auto" }}
      >
        {[...companies, ...companies, ...companies].map((company, index) => (
          <div key={`${company.name}-${index}`} className="flex-shrink-0 flex items-center justify-center">
            <div className="w-24 h-10 xs:w-28 xs:h-11 sm:w-32 sm:h-12 md:w-36 md:h-13 lg:w-40 lg:h-16 xl:w-44 xl:h-18 2xl:w-48 2xl:h-20 flex items-center justify-center text-white/80 hover:text-white transition-colors duration-300">
              {company.logo}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}