import Image from "next/image"

const ProductDisplay = () => {
  return (
    <section>
        <div className='bg-yellow-50 py-32 md:py-36 lg:py-40 pt-12 pb-8 md:pt-14 lg:pt-16 md:pb-10 lg:pb-12'>
            <div className='w-[90vw] md:w-[85vw] xl:w-[80vw] mx-auto grid gap-6 text-center justify-items-center max-w-xl'>
                <a href="https://www.producthunt.com/posts/laserfocus?utm_source=badge-featured&amp;utm_medium=badge&amp;utm_souce=badge-laserfocus" target="_blank" rel="noreferrer">
                    <Image src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=351212&amp;theme=light" alt="Laserfocus - Beautiful UX for Salesforce users | Product Hunt" style="width:250px;height:54px" width={250} height={54}  />
                </a>
                <h2 className="font-libre font-bold text-[2rem] leading-[1.1] md:text-[2.3rem]">Beautiful, fast, simple to use</h2>
                <p className="font-inter text-[1.2rem] leading-normal">Organize your tasks, emails, events, notes, and Salesforce updates within one interface. Reduce jumping between different tabs and tools to increase your efficiency and focus.</p>
            </div>

            <div></div>
        </div>  
    </section>
  )
}

export default ProductDisplay