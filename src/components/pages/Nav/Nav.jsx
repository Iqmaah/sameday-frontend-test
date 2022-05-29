import Logo from './../../../assets/images/wokLogo.png'

const Nav =() => {
    return(
        <div className="container mx-auto">
            <div><img src ={Logo} alt="wok & wakis"></img></div>
            <div className='flex justify-end'>
                <div className='rounded-full py-2 px-4 bg-[#F1F2F4]'>Delivery</div>
                <div className='rounded-full py-2 px-4 bg-[#08090A]'>Pickup</div>
            </div>
        </div>

        
    )
}


export default Nav