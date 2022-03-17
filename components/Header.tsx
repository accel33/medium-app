import Link from 'next/link'

function Header() {
   return (
      <header>
         <div className="">
            <Link href="/">
               <img
                  src="https://links.papareact.com/yvf"
                  alt="medium"
                  className=""
               />
            </Link>
         </div>
         <div className=""></div>
      </header>
   )
}

export default Header
