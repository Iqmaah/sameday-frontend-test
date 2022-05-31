import Accordion from 'accordion-js';
import { useState, useEffect } from 'react'
import 'accordion-js/dist/accordion.min.css';
import modal from './../../../assets/images/modal.png'



const Foodmodal = () => {
    const [showModal, setshowModal] = useState(false)
    const closeModalClick = () => {
        setshowModal(false)
    }

    useEffect(() => { 
        new Accordion('.accordion-container');
    }, [])

    return(
        <div className="modal fixed inset-0 bg-wb-overlay flex justify-center ml-10 modal-active" style={{width:"560px"}}>
            
            <div className="auth-modal flex flex-col items-center bg-white rounded-lg fadeIn login-fieldset border border-gray-200 rounded">
                <div className='mb-6' style={{ backgroundImage: `url(${modal})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "300px", width:"560px" }}>
                     <div className='flex justify-start bg-white' >
                        <button type="button" onClick={closeModalClick} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 mr-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                        </button>
                        <h1 className='mr-auto font-bold' style={{fontFamily: 'Inter', fontStyle: "normal", fontWeight: "600px",fontSize: "20px", lineHeight: "32px"}}>Double Down Breakfast</h1>
                     </div>
                </div>
                <div className='mb-6'>
                    <h2 className="pl-2 text-[#07121D] font-bold" style={{fontFamily: 'Inter', fontStyle: "normal", fontWeight: "500px",fontSize: "24px", lineHeight: "32px"}}>Double Down Breakfast</h2>
                    <p className="pl-2" style={{fontFamily: 'Inter', fontStyle: "normal", fontWeight: "400px",fontSize: "14px", lineHeight: "20px"}}>Light and airy with a touch of sweetness, deep fried to perfection and tossed with Kosher salt. Served with cheddar cheese sauce.</p>
                </div>
                <div className='accordion-container container mx-auto  bg-[#F0F4F8] p-4'>
                    <div className="ac">
                        <h2 className="ac-header bg-[#F0F4F8]">
                             <button type="button" className="ac-trigger w-50 p-10">
                                <p  style={{fontFamily: 'Inter', fontStyle: "normal", fontWeight: "500px",fontSize: "18px", lineHeight: "28px"}}>Egg Style <span className='bg-yellow-400 ml-2 p-1 rounded-full' style={{fontFamily: 'Inter', fontStyle: "normal", fontWeight: "600px",fontSize: "11px", lineHeight: "13px"}}>Required</span></p>
                                <p  style={{fontFamily: 'Inter', fontStyle: "normal", fontWeight: "500px",fontSize: "14px", lineHeight: "20px"}}>Select 1</p>
                             </button>
                        </h2>
                        <div className="ac-panel">
                            
                        </div>
                    </div>
                   

                </div>


            </div>

        </div>
    )
}


export default Foodmodal