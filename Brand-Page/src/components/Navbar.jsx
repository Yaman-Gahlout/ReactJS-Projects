function Navbar(){
    return(
        <div className="max-w-[1300px] w-[1300px] flex justify-between items-center py-[15px]">
            <div>
                <img src="/images/brand_logo.png" alt=""/>
            </div>
            <div className="flex gap-[40px] text-xl font-semibold text-gray-800 uppercase">
                <a href="/menu">Menu</a>
                <a href="/location">Location</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </div>
            <div>
                <button className="px-[25px] py-[8px] bg-[#d01c28] text-xl text-white uppercase">Log in</button>
            </div>
        </div>
    )
}
export default Navbar;