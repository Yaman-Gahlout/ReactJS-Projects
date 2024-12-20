function HeroSection() {
    return (
        <div className="mt-[50px] flex w-[1300px] gap-[100px]">
            <div className="flex flex-col gap-[20px] w-[50%]">
                <div className="text-9xl font-extrabold uppercase">
                    <h1>Your feet deserve the best</h1>
                </div>
                <div className="text-xl">
                    <p>Your feet deserve the best and we're here to you with our shoes. Your feet deserve the best and we're here to you with our shoes.</p>
                </div>
                <div className="flex gap-[30px] mt-[30px]">
                    <button className="px-[25px] py-[8px] bg-[#d01c28] text-xl text-white uppercase">Shop now</button>
                    <button className="px-[25px] py-[8px] text-black text-xl border-[1px] border-black uppercase">Add to cart</button>
                </div>
            </div>
            <div>
                <div className="mt-[40px]">
                    <img src="/images/hero-image.png" alt="" />
                </div>
            </div>
        </div>
    )
}
export default HeroSection;