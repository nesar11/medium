
import Link from 'next/link';

function Header() {
  return (
    <header className='flex justify-between mx-auto max-w-7xl' >
        
        <div className='flex items-center space-x-5'>
            <Link href="/"> 
            <img className='object-contain w-44 curson-pinter'
            src="https://seekvectorlogo.com/wp-content/uploads/2021/12/medium-vector-logo-2021.png" alt="" /> 
            </Link>

        <div className='items-center hidden space-x-5 md:inline-flex'>
            <h3> About</h3>
            <h3> Contact</h3>
            <h3 className='px-4 py-1 text-white bg-green-600 rounded-full'>Follow</h3>
            </div>
        </div>
        <div className='flex items-center space-x-5 text-green-600'>
            <h3> Sign in</h3>
            <h3 className='px-4 border border-green-600 rounded-full'> Get Start</h3>
        </div>



    </header>
  )
}

export default Header
