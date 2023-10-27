import Cards from "./components/Cards"
import Hero from "./components/Hero"
import LastSec from "./components/LastSec"

export default function Home() {
  return (
    <section className="flex flex-col w-full justify-center  items-center">
      <Hero/>
      <Cards/>
      <LastSec/>
    </section>
  )
}
