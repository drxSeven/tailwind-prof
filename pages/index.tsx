import type { NextPage } from 'next'
import FrontTitle from './FrontTitle'
import NavBar from './NavBar'

const Home: NextPage = () => {
  return (
    <div className="overflow-x-hidden">
      <div id="" className="h-screen w-screen bg-[#121518]">
          <NavBar />
          <FrontTitle />
      </div>
      <div id="" className="h-screen w-screen bg-[#121518]">

      </div>
    </div>
  )
}

export default Home
