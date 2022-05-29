import img9 from './../../../assets/images/img9.png'

const Wings = () => {
    return(
        <div className='container mx-auto'>
           
            <a href="#" className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                
                <div className="w-9/12 flex flex-col justify-between">
                    <h2 className="pl-2 text-[#07121D] font-bold" style={{fontFamily: 'Inter', fontStyle: "normal", fontWeight: "700px",fontSize: "16px", lineHeight: "24px"}}>Wings and Fries</h2>
                    <p className="pl-2" style={{fontFamily: 'Inter', fontStyle: "normal", fontWeight: "400px",fontSize: "14px", lineHeight: "20px"}}>Comes with Fries</p>
                    <p className='pl-2 pt-6' style={{fontFamily: 'Inter', fontStyle: "normal", fontWeight: "400px",fontSize: "14px", lineHeight: "20px"}}>$12.00</p>
                </div>
                <div className='w-3/12 '>
                    <img src={img9}  alt="" className=" object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"></img>
                </div>
            </a>
        </div>
    )
}


export default Wings