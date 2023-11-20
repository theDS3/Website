import Image from 'next/image'
import Intro from '../components/intro'
import About from '../components/about'
import Events from '../components/events'
import Sponsors from '../components/sponsors'
import Team from '../components/team'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Intro />
      <About />
      <Sponsors />
      <Team />
      <Events />
    </main>
  )
}
