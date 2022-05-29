import { BrowserRouter, Routes, Route , Link} from 'react-router-dom';
import vector from './../../../assets/images/Vector.png'

const Menu = () => {
    return(
        <div className='container mx-auto'>
            <div className=" mt-10 flex flex-row space-x-4">
                <a href='#' className='underline decoration-4 underline-offset-8' style={{fontFamily: 'Inter', fontStyle: "normal", fontWeight: "600px",fontSize: "14px", lineHeight: "20px"}}><img src={vector}></img></a>
                <a href='#' className='hover:underline hover:decoration-4 hover:underline-offset-8' style={{fontFamily: 'Inter', fontStyle: "normal", fontWeight: "600px",fontSize: "14px", lineHeight: "20px"}}>Popular Items</a>
                <a href='#' className='hover:underline hover:decoration-4 hover:underline-offset-8' style={{fontFamily: 'Inter', fontStyle: "normal", fontWeight: "600px",fontSize: "14px", lineHeight: "20px"}}>Wings & Tenders</a>
                <a href='#' className='hover:underline hover:decoration-4 hover:underline-offset-8' style={{fontFamily: 'Inter', fontStyle: "normal", fontWeight: "600px",fontSize: "14px", lineHeight: "20px"}}>Popcorn Chicken</a>
                <a href='#' className='hover:underline hover:decoration-4 hover:underline-offset-8' style={{fontFamily: 'Inter', fontStyle: "normal", fontWeight: "600px",fontSize: "14px", lineHeight: "20px"}}>Mix & Match Combos</a>
                <a href='#' className='hover:underline hover:decoration-4 hover:underline-offset-8' style={{fontFamily: 'Inter', fontStyle: "normal", fontWeight: "600px",fontSize: "14px", lineHeight: "20px"}}>Fish and Shrimp</a>
                <a href='#' className='hover:underline hover:decoration-4 hover:underline-offset-8' style={{fontFamily: 'Inter', fontStyle: "normal", fontWeight: "600px",fontSize: "14px", lineHeight: "20px"}}>Sandwiches</a>
                <a href='#' className='hover:underline hover:decoration-4 hover:underline-offset-8' style={{fontFamily: 'Inter', fontStyle: "normal", fontWeight: "600px",fontSize: "14px", lineHeight: "20px"}}>Drinks</a>
                <a href='#' className='hover:underline hover:decoration-4 hover:underline-offset-8' style={{fontFamily: 'Inter', fontStyle: "normal", fontWeight: "600px",fontSize: "14px", lineHeight: "20px"}}>Party Trays</a>
                <a href='#' className='hover:underline hover:decoration-4 hover:underline-offset-8' style={{fontFamily: 'Inter', fontStyle: "normal", fontWeight: "600px",fontSize: "14px", lineHeight: "20px"}}>Kid's Menu</a>
                <a href='#'className='hover:underline hover:decoration-4 hover:underline-offset-8' style={{fontFamily: 'Inter', fontStyle: "normal", fontWeight: "600px",fontSize: "14px", lineHeight: "20px"}}>Sides</a>
            </div>
            <hr className="container mx-auto mt-2" style={{width:"100%", margin: "center"}}/>
        </div>
        
        
    )
}


export default Menu