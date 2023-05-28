import Cards from '@/components/cards'
import Categories from '@/components/categories'
import DesktopNav from '@/components/desktopnav'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero from '@/components/hero'
import LatestProducts from '@/components/latestprod'
import Logo from '@/components/logo'
import Image from 'next/image'

export default function Home() {
  return (
   <main>
    <Header/>
    <Logo/>
    <DesktopNav/>
    <Hero/>
    <Cards/>
    <Categories/>
    <LatestProducts/>
    <Footer/>

   </main>
  )
}
