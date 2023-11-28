import SponsorsCard from "./SponsorsCard"
import { sponsors, type Sponsors } from './sponsors-config'

export default function Sponsors() {
  return (
    <section id="sponsors" className="flex flex-col items-center justify-center">
        <h2 className='text-gray-300/60 text-5xl font-bold tracking-wide pb-8 text-center'>Our Sponsors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-20">
          {sponsors.map(({ name, logo, link }: Sponsors, id) => (
            <SponsorsCard
              key={id}
              name={name}
              logo={logo}
              link={link}
            />
          ))}
        </div>
    </section>
  )
}
