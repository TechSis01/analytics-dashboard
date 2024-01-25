import barblue from '../../public/barblue.png'
import barlightblue from '../../public/barlightblue.png'
import bargold from '../../public/bargold.png'
import bared from '../../public/bared.png'
import Image from 'next/image'
const TopPlatform = () => {
  return (
    <section className='flex flex-col justify-around mt-3 tablets:mt-0 mx-3 bg-white  dark:bg-coolors-gray rounded-md fold:p-1 mtablets:p-5 '>
         <div >
            <p className='fold:text-sm mobile:text-base mtablets:text-lg font-semibold py-2'>Top Platform</p>
        </div>
        <div className='my-2'>
            <h2 className='fold:text-sm mobile:text-base mtablets:text-lg font-semibold my-2'>Book Bazaar</h2>
            <Image src={barblue} alt='book bazaar' width={500} height={20}></Image>
            <p className='mt-2 fold:text-xs mobile:text-base mtablets:text-lg'>$2,500,500</p>
        </div>
        <div className='my-2'>
        <h2 className='fold:text-sm mobile:text-base mtablets:text-lg font-semibold my-2'>Artisan Aisle</h2>
            <Image src={barlightblue} alt='Artisan Aisle' width={500} height={20}></Image>
            <p className='mt-2 fold:text-xs  mobile:text-base mtablets:text-lg'>$1,800,500</p>
        </div>
        <div className='my-2'>
        <h2 className='fold:text-sm mobile:text-base mtablets:text-lg font-semibold my-2'>Toy Troop</h2>
            <Image src={bargold} alt='Toy Troop' width={500} height={20}></Image>
            <p className='mt-2 fold:text-xs mobile:text-base mtablets:text-lg'>$1,200,500</p>
        </div>
        <div className='my-2'>
        <h2 className='fold:text-sm mobile:text-base my-2 mtablets:text-lg font-semibold'>XStore</h2>
            <Image src={bared} alt='Toy Troop' width={500} height={20}></Image>
        </div>
    </section>
  )
}

export default TopPlatform