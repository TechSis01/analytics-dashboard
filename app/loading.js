import Image from 'next/image'
import reload from '../public/reload.gif'
const Loading = () => {
    return (
      <div className='flex justify-center items-center mt-24'>
          <Image src={reload} alt='Loading....' width={300} height={300}></Image>
      </div>
    )
  }
  
  export default Loading