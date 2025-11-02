import Hero from '@/components/hero/Hero'
import NewCollection from '@/components/new-collection/NewCollection'
import NewArrival from '@/components/new-arrival/NewArrival'
import Feature from '@/components/feature/Feature'
import Furniture from '@/components/furniture/Furniture'
import BestSeller from '@/components/best-seller/BestSeller'
import GetInTouch from '@/components/get-in-touch/GetInTouch'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <NewCollection />
      <NewArrival />
      <Feature />
      <Furniture />
      <BestSeller />
      <GetInTouch />
    </main>
  )
}