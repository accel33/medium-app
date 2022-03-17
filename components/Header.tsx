import Link from 'next/link'

function Header() {
   return (
      <header>
         <div className="icono-y-navbar flex items-center space-x-5">
            <Link href="/">
               <img
                  src="https://links.papareact.com/yvf"
                  alt="medium"
                  className="w-44 object-contain cursor-pointer"
               />
            </Link>
            <div className='hidden md:inline-flex items-center space-x-5'>
               <h3>About</h3>
               <h3>Contact</h3>
               <h3 className='bg-green-600 px-4 py-1 rounded-full'>Follow</h3>
            </div>
         </div>
         <div className=""></div>
      </header>
   )
}

export default Header
