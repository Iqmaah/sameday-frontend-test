import footer from './../assets/images/footer.png'
import Logo from './../assets/images/wokLogo.png'
import schedule from './../assets/images/schedule.png'
import cart from './../assets/images/cart.png'


const Container = ({children}) => {
    return(
        <>
        <header>
        <div className="bg-[#FBFEFE]">
                <div class="container mx-auto p-6 flex flex-row">
                    <div className="w-1/2 ">
                        <img src={Logo} alt="wok & wakis"></img>
                    </div>

                    <div className="w-1/2 flex justify-end space-x-2">

                        <div className='bg-[#F1F2F4] rounded-full flex'>
                            <div className='rounded-full py-2 px-4 bg-[#F1F2F4]'>Delivery</div>
                            <div className='rounded-full py-2 px-6 bg-[#08090A] text-white'>Pickup</div>
                        </div>
                        <div>
                            <img src={schedule}></img>
                        </div>
                        <div >
                            <button type="button" 
                            className="flex space-x-2 inline-block px-6 py-3 bg-[#08E9E1] uppercase rounded shadow-md hover:bg-[#BEFDFB] hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 
                            active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                <img src={cart}></img> 
                                <p className='font-bold' style={{fontFamily: 'Inter', fontStyle: "normal", fontWeight: "700px",fontSize: "16px", lineHeight: "24px"}}>3</p>
                            </button>
                        </div>
                          
                    </div> 
                </div>
            </div>
        </header>

        <div>
            {children}
        </div>

        <footer>
            <div className="bg-[#FBFEFE]">
                <div class="container mx-auto p-6 flex flex-row">
                    <div className="w-1/2 flex flex-row space-x-2">
                        <p style={{fontFamily: 'Inter', fontStyle: "normal", fontWeight: "500px",fontSize: "14px", lineHeight: "20px"}}>© 2020 Delo</p>
                        <a href="#" className="text-[#06ADA8] underline" style={{fontFamily: 'Inter', fontStyle: "normal", fontWeight: "500px",fontSize: "14px", lineHeight: "20px"}}>Terms of Service</a>
                        <a href="#" className="text-[#06ADA8] underline" style={{fontFamily: 'Inter', fontStyle: "normal", fontWeight: "500px",fontSize: "14px", lineHeight: "20px"}}>Privacy</a>
                    </div>

                    <div className="w-1/2 ">
                        <img src={footer}></img>    
                    </div> 
                </div>
            </div>
        </footer>
        </>
    )
}

export default Container