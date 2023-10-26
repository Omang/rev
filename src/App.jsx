import { useState } from 'react'


import ohplogo from './assets/ohplogo.png'
import web from './assets/web.png'
import Drben from './assets/Drben.jpg'
import omang from './assets/omang.jpg'
import victor from './assets/victor.png'
import manpage from './assets/manpage.jpg'
import manp from './assets/manp.jpg'
import family from './assets/family.jpg'
import atwork from './assets/atwork.jpg'
import ministry from './assets/ministry.jpg'
import manc from './assets/manc.jpg'
import {FaElementor} from 'react-icons/fa'


function App() {

  const [menux, setMenux] = useState(false);
  const [btn, setBtn] = useState(true);
 

  return (
    <div className="bg-gray-50">
      <nav className="sticky top-0 bottom-0 bg-white z-50 px-1 container  mx-auto ">
          <div className="flex items-center justify-between">
            <div className="pt-2">
               REV
            </div>
            <div className="hidden md:flex space-x-6">
               <a className='hover:text-yellow-500 text-blue-500 hover:underline transition' href='#home'>Home</a>
               <a className='hover:text-yellow-500 text-blue-500 hover:underline transition ' href='#portfolio'>Portfolio</a>
               <a className='hover:text-yellow-500 text-blue-500 hover:underline transition' href='#about'>About</a>
               <a className='hover:text-yellow-500 text-blue-500 hover:underline transition' href='#contacts'>Contacts</a>
              

            </div>
            <a href='#portfolio' className='hidden md:block p-3 my-2 px-6 pt-2 text-white bg-yellow-500 rounded-full
             baseline hover:bg-blue-500'>Rev Ministry</a>
            {btn? <button onClick={btn=>setBtn(false)} className="block md:hidden focus:outline-none"><FaElementor /></button>:
            <button onClick={btn=>setBtn(true)} className="block md:hidden focus:outline-none">X</button>}
          </div>
          {btn == false && (
            <div className="sticky top-0 bottom-0 bg-white z-50  flex flex-col
            items-center self-end md:hidden py-8 mt-10 mb-10
             space-y-6 font-bold sm:w-auto
              sm:self-center left-6 
              right-6 drop-shadow-md">
 
               <a className='hover:text-yellow-500 text-blue-500 hover:underline transition' onClick={btn=>setBtn(true)} href='#home'>Home</a>
               <a className='hover:text-yellow-500 text-blue-500 hover:underline transition' onClick={btn=>setBtn(true)} href='#portfolio'>Portfolio</a>
               <a className='hover:text-yellow-500 text-blue-500 hover:underline transition' onClick={btn=>setBtn(true)} href='#about'>About</a>
               <a className='hover:text-yellow-500 text-blue-500 hover:underline transition' onClick={btn=>setBtn(true)} href='#contacts'>Contacts</a>
 
           </div>
          )}

        </nav>
        <section id='home'>
          <div className='container top-80 flex flex-col-reverse md:flex-row
          items-center px-6 mx-auto pt-16  space-y-0 md:space-y-0'>
          
          <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>

            <h1 className="max-w-md border-b border-yellow-500 text-4xl font-bold text-center md:text-left md:text-5xl">
            Rev Radihephi
            </h1>
             <p className="max-w-sm text-center pr-2 text-darkGrayishBlue md:text-left">
             I was born in 1979 and married to Golesego Radihephi 
             and a father of 3, Tumo (boy), 
             Yaone and Bakang (both girls).
              I am a Motswana, born in Serowe and grew up in Nata.
               I started attending Church as a small boy at the age of 6.
                My aunt who was my guardian was married to an Evangelist and 
                leader of the Nata Branch of Eleven Apostles Healing Spirit
             Church. As a teenager and young man I joined the church choir, 
             where together with other youth we praised God in the church and
              elsewhere 

             </p>
             <div className="flex justify-center md:justify-start">
             <a href='#portfolio' className='p-3 px-6 pt-2 text-white bg-yellow-500 rounded-full
             baseline hover:cursor-pointer hover:bg-blue-500'>Rev Ministry</a>
             </div>
          </div>
            
           <div className='md:w-1/2'>
           <img className='opacity-80 ' src={`${manp}`} />
           </div>

          </div>
        </section>

        <section id='portfolio'>
         <div className="container flex 
         flex-col px-4 mx-auto mt-10 
         space-y-12 md:space-y-0 md:flex-row pt-32">
          <div className='flex flex-col space-y-12 md:w-1/2'>
             <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
             PERSONAL STATEMENT
             </h2>
             <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
             I was born in 1979 and married to Golesego Radihephi 
             and a father of 3, Tumo (boy), 
             Yaone and Bakang (both girls).
              I am a Motswana, born in Serowe and grew up in Nata.
               I started attending Church as a small boy at the age of 6.
                My aunt who was my guardian was married to an Evangelist and 
                leader of the Nata Branch of Eleven Apostles Healing Spirit
             Church. As a teenager and young man I joined the church choir, 
             where together with other youth we praised God in the church and
              elsewhere

             </p>
          </div>
          <div className='flex flex-col space-y-8 md:w-1/2'>
             <div className="flex flex-col 
             space-y-3 md:space-y-0 
             md:space-x-6 md:flex-row">

                <div className="rounded-l-full bg-yellow-500 md:bg-transparent">
                  <div className='flex items-center space-x-2'>
                    <div className='px-4 py-2 text-white rounded-full m:py-1 bg-yellow-500'>
                      2019
                    </div>
                     <h3 className="text-base font-bold md:mb-4 md:hidden">
                        Appointment Time
                     </h3>


                  </div>
                </div>

                <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                Appointment Time
                </h3>
                <p className="text-darkGrayishBlue">
                I was appointed and ordained as Minister at New Temple 
                of the New Jerusalem, a church that I served as Deputy Bishop.
                 As a Minister of the Gospel, I planted the Church in Rakops, 
                Boteti District, where I also served as Chairperson of Minister 
              Fraternal for more than 7 years. During which time I initiated and 
              led efforts to reconcile two factions of some local Churches. 
              I am a practitioner of peace and strong believer in peaceful resolution of
               conflicts 
                having been trained in the field in 2003
                </p>
                </div>
                  
              </div>  

              <div className="flex flex-col 
             space-y-3 md:space-y-0 
             md:space-x-6 md:flex-row">

                <div className="rounded-l-full bg-yellow-500 md:bg-transparent">
                  <div className='flex items-center space-x-2'>
                    <div className='px-4 py-2 text-white rounded-full m:py-1 bg-yellow-500'>
                      2011
                    </div>
                     <h3 className="text-base font-bold md:mb-4 md:hidden">
                     Marriage officer 
                     </h3>


                  </div>
                </div>

                <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                Marriage officer 
                </h3>
                <p className="text-darkGrayishBlue">
                I was appointed marriage officer in 
                terms of the laws of the Republic. 
                In the field of marriage I continue to provide pre and post-marital counselling. I have assisted some couples to solve their marital problems even where they believed divorce is the only solution.
                Above all, I am clear communicator, 
                goal driven and creative leader who is 
                always willing to learn and ready to take on new challenges. 
                I consider myself a well-rounded person and tolerant
                 individual who will be prepared to accept others and
                  their views without defending my upheld ideas unnecessarily.

                </p>
                </div>
                  
              </div> 
              <div className="flex flex-col 
             space-y-3 md:space-y-0 
             md:space-x-6 md:flex-row">

                <div className="rounded-l-full bg-yellow-500 md:bg-transparent">
                  <div className='flex items-center space-x-2'>
                    <div className='px-4 py-2 text-white rounded-full m:py-1 bg-yellow-500'>
                      2021
                    </div>
                     <h3 className="text-base font-bold md:mb-4 md:hidden">
                         Call to serve 
                     </h3>


                  </div>
                </div>

                <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                Call to serve
                </h3>
                <p className="text-darkGrayishBlue">
                July 2021, Golesego, and I, were delighted to 
                accept the call to serve God as founder and leader of a church.
                 We started conducting midweek and Sunday services at Matobo in 
                 Tutume District. This is a young, healthy, vibrant, 
                 growing church, with tremendous potential to impact 
                 the whole area for Christ. It is great fun watching the Lord drawing new people, building our fantastic team and taking the next steps on our journey together. I'm looking forward with eager anticipation and confident expectation to the great things
               the Lord has planned for His church.
                </p>
                </div>
                  
              </div> 
              
          </div>
         </div>
        </section>
       <section id="about">
        <div className="max-w-6xl px-5 mx-auto mt-32 text-center pt-32">
          <h2 className="text-3xl font-bold text-center">
          Whom shall I send, and who will go for us? Then said I, 
            Here am I; send me

          </h2>
          <div className="flex flex-col mt-32 md:flex-row md:space-x-6">
            <div className="flex flex-col items-center
             p-6 space-y-6 rounded-lg bg-yellow-300 md:w-1/3">
              
              <img src={`${family}`} className='rounded-full w-32 -mt-14' />
              <h5 className='text-lg font-bold'>I and my Wife</h5>
              <p className="text-sm text-darkGrayishBlue">
              We meet in 2004, got married in 2006 in our twenties.
              God has blessed us with 3 lovely children, Tumo, Yaone
              and Bakang. God coutinues to use us in his work as 
              evangelists.
              </p>
            </div>
            <div className="hidden md:flex flex-col items-center
             p-6 space-y-6 rounded-lg bg-yellow-300 md:w-1/3">
              
              <img src={`${atwork}`} className='rounded-full w-32 -mt-14' />
              <h5 className='text-lg font-bold'>At the ministry</h5>
              <p className="text-sm text-darkGrayishBlue">
              As a minister of the gospel my work includes planting the church
              in all places that i have lived across the country. I have so far
              planted the church in Rakops, Goshwe and Matobo.
              </p>
            </div>
            <div className="hidden md:flex flex-col items-center
             p-6 space-y-6 rounded-lg bg-yellow-300 md:w-1/3">
              
              <img src={`${manc}`} className='rounded-full w-32 -mt-14' />
              <h5 className='text-lg font-bold'>Church members</h5>
              <p className="text-sm text-darkGrayishBlue">
              We have wonderful people who have now become part of our family
               through ministry work. We enjoy each day with the family members
               whom god endowed with many gifts that helps us in his service.
              </p>
            </div>
          </div>
          

        </div>
        </section> 

        <section id='contacts' className='bg-blue-200 mt-4'>
           <div className="container flex flex-col items-center pt-32 justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
            <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
              GOD SAVES Pray With me AT: +267 73860143
              </h2>  
              <div className="w-auto">
                <p className='p-3 px-6 pt-2 text-white bg-yellow-500 rounded-full
             baseline'>mradihephi@gmail.com</p>
                </div>          
           </div>
        </section>
        <section className='bg-yellow-500'>
         <div className="container flex flex-col-reverse
          justify-between px-6 py-10 
          mx-auto space-x-2 space-y-8 md:flex-row md:space-y-0">
          
          <div className="flex flex-col-reverse
           items-center 
           justify-between space-y-12
            md:flex-col md:space-y-0 md:items-start">

              <div className="mx-auto my-6 text-center text-white md:hidden">
                Copyright: 2023, All rights Reserved.
              </div>

              <div>
                <div className='h-8 w-16'><h1 className="text-white text-4xl font-bold">REV </h1></div>
              </div>
             
          </div>
          
          <div className='flex flex-col justify-between'>
            
            <div className="hidden text-white md:block">
              Copyright: 2023, All Rights Reserved.
            </div>


          </div>
         </div>
        </section>

    </div>
  )
}

export default App
