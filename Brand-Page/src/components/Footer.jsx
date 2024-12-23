function Footer(){
    return(
        <div className=" w-[1300px] max-w-[1300px] mt-[20px] flex-col mb-[100px]">
            
            <p className="text-xl">Also available on</p>
            
            <div className="flex gap-[20px] mt-[20px] cursor-pointer">
                <img src="/images/amazon.png" alt="" className="mt-[5px]"/>
                <img src="/images/flipkart.png" alt=""/>
            </div>
        </div>
    )
}
export default Footer;