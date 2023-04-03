import { useRouter } from 'next/router';
import {TbArrowLeftCircle} from 'react-icons/tb'

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between h-20">
        <span onClick={()=>router.back()} className='cursor-pointer duration-200 hover:scale-110 hover:text-purple-500'>
            <TbArrowLeftCircle size={45}/>
        </span>
        <h1 className='text-xl font-bold select-none '>Bank of Abid</h1>
    </div>
  );
};

export default Navbar;
