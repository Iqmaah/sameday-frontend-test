import { BrowserRouter, Routes, Route , Link} from 'react-router-dom';
import './App.css';
import bgImg from './assets/images/bg.png'
import Nav from './components/pages/Nav/Nav'
import Menu from './components/pages/Menu/Menu'
import Wings from './components/pages/Wings/Wings';
import PopularItemsCard from './components/pages/PopularItems/PopularItemsCard';
import PartyTrays from './components/pages/PartyTrays/PartyTrays';
import Container from './components/Container';
import img1 from './assets/images/img1.png'
import img2 from './assets/images/img2.png'
import img3 from './assets/images/img3.png'
import img4 from './assets/images/img4.png'
import img5 from './assets/images/img5.png'
import img6 from './assets/images/img6.png'
import img7 from './assets/images/img7.png'
import img8 from './assets/images/img8.png'

import img10 from './assets/images/img10.png'
import img11 from './assets/images/img11.png'
import img12 from './assets/images/img12.png' 

const App = () => {


          const datas = [
            {
              "id" : "001",
              "name": "Hat Trick Breakfast",
              "details": "Three eggs any style, three strips of bacon or three sausage links and ...",
              "amount": "$18.69",
              "img": [img1]
              
            },

            {
              "id" : "002",
              "name": "Double Down Breakfast",
              "details": "Two eggs any style, two strips of bacon or two sausage links, toast ...",
              "amount": "$19.85",
              "img": [img2]
            },

            {
              "id" : "003",
              "name": "Egg Bagel Sandwich",
              "details": "Fried egg, American chees and diced ham, baconn strips or a sausage patty ... ",
              "amount": "$15.75",
              "img": [img3]
            },

            {
              "id" : "004",
              "name": "Wings & Fries",
              "details": "Comes with fries",
              "amount": "$18.46",
              "img": [img4]
              
            },

            {
              "id" : "005",
              "name": "Pick 2 & Fries",
              "details": "Comes with fries and any sauce you want",
              "amount": "$8.50",
              "img": [img5]
            },

            {
              "id" : "006",
              "name": "Hush Puppies",
              "details": "",
              "amount": "$13.97",
              "img": [img6]
            },

            {
              "id" : "007",
              "name": "Mozarella Sticks",
              "details": "Comes with Marinara Sauce",
              "amount": "$14.09",
              "img": [img7]
            },

            {
              "id" : "008",
              "name": "Shrimp & Fries",
              "details": "Comes with Fries",
              "amount": "$5.02",
              "img": [img8]
            },
          ]

          const trays = [
            {
              "id" : "010",
              "name": "Fish Tray",
              "details": "Comes with 6 free Sauces",
              "amount": "$18.00",
              "img": [img10]
              
            },

            {
              "id" : "011",
              "name": "Tender Tray",
              "details": "Comes with 6 free Sauces",
              "amount": "$35.00",
              "img": [img11]
            },

            {
              "id" : "012",
              "name": "Wings Tray",
              "details": "Comes with 6 free Sauces",
              "amount": "$22",
              "img": [img12]
            },

          ]


  return(
    <Container>
        <div className=''>
          
          

          <div className='relative' style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "360px" }}>
            <div className="absolute bottom-0 left-6 flex">
                <div className="block p-2 bg-white max-w-sm">
                  <h5 className="mb-2" style={{fontFamily: 'Inter', fontStyle: "normal", fontWeight: "700px",fontSize: "24px", lineHeight: "32px"}}>Kings Family Restaurant - Butler</h5>
                  <p className=" mb-4" style={{fontFamily: 'Inter', fontStyle: "normal", fontWeight: "500px",fontSize: "14px", lineHeight: "20px"}}>1322 Lazy Alley, Philadelphia, CA 30203, USA <a href="#"className='underline'>More info</a>  </p>
                  <p className='text-gray-300' style={{fontFamily: 'Inter', fontStyle: "normal", fontWeight: "500px",fontSize: "14px", lineHeight: "20px"}}>Bakery - Breakfast & Brunch - Cafe - Coffees</p>
                  <p style={{fontFamily: 'Inter', fontStyle: "normal", fontWeight: "500px",fontSize: "14px", lineHeight: "20px"}}>Open Hours: 8:30 AM - 7:00 PM &nbsp; &nbsp;
                      <button type="button" style={{fontFamily: 'Inter', fontStyle: "normal", fontWeight: "500px",fontSize: "13px", lineHeight: "13px"}}
                      className=" inline-block px-6 py-2.5 bg-[#BEFDFB] uppercase rounded shadow-md hover:bg-[#BEFDFB] hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">OPEN</button>
                  </p>
                </div>
            </div>
          </div>

          <Menu/><br/>

          <div className='container mx-auto'>
            <h className="mb-4 font-bold" style={{fontFamily: 'Inter', fontStyle: "normal", fontWeight: "600px",fontSize: "20px", lineHeight: "32px"}}>Popular Items</h>
            <p className='mb-10' style={{fontFamily: 'Inter', fontStyle: "normal", fontWeight: "500px",fontSize: "14px", lineHeight: "20px"}}>The most commonly ordered items and dishes from this store</p>
          </div>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
                      {
                      
                        datas.map((data,i) => <PopularItemsCard key={data.id} popular={data}/>)
                      
                      
                      } 
            </div><br/><br/>

            <div className='container mx-auto'>
              <h className="mb-4 font-bold" style={{fontFamily: 'Inter', fontStyle: "normal", fontWeight: "600px",fontSize: "20px", lineHeight: "32px"}}>Wings & Tenders</h>
              <p className='mb-10' style={{fontFamily: 'Inter', fontStyle: "normal", fontWeight: "500px",fontSize: "14px", lineHeight: "20px"}}>Comes with fries</p>
            </div>
            <Wings/><br/><br/>


           <div className='container mx-auto'>
              <h className="mb-4 font-bold" style={{fontFamily: 'Inter', fontStyle: "normal", fontWeight: "600px",fontSize: "20px", lineHeight: "32px"}}>Party Trays</h>
              <p className='mb-10' style={{fontFamily: 'Inter', fontStyle: "normal", fontWeight: "500px",fontSize: "14px", lineHeight: "20px"}}></p>
           </div>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
                      {
                      
                        trays.map((tray,i) => <PartyTrays key={tray.id} party={tray}/>)
                      
                      
                      } 
            </div><br/>

            
          

        </div>
    </Container>
  )
}

export default App