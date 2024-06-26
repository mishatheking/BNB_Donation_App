import React from 'react'
import { Route, Routes } from 'react-router-dom';

import { Sidebar, Navbar } from './compnents'
import { useParams } from 'react-router-dom';

import { CreateCampaign, CampaignDetails, Home, Profile, Creator } from './pages';

const App = () => {
  // const { addr } = useParams();
  return (
    <div className='relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row'>

      <div className='sm:flex hidden mr-10 relative'>
        <Sidebar />
      </div>

      <div className='flex-1 max-sm:w-full max-w-[1280] mx-auto sm:pr-5'>
        <Navbar />
        {/* <StateContextProvider addr={addr}> */}


          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Creator/:addr" element={<Creator />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create-campaign" element={<CreateCampaign />} />
            <Route path='/campaign-details/:id' element ={<CampaignDetails />} />
          </Routes>
        {/* </StateContextProvider> */}

      </div>
    </div>
  )
}

export default App