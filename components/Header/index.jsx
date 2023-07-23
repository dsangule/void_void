import Link from 'next/link'

function Header() {
  return (
    <nav className="bg-[#001219] flex justify-between">
        <Link href='/' className="my-auto text-white pl-12 text-2xl">
          <h2>Void</h2>
        </Link>

        <div className='flex'>
            <Link href='/' className='p-4 text-white hover:bg-[#005F73]'>Home</Link>
            <Link href='/members' className='p-4 text-white hover:bg-[#005F73]'>Members</Link>
            <Link href='/moments' className='p-4 text-white hover:bg-[#005F73]'>Moments</Link>
            <Link href='/bucket-list' className='p-4 text-white hover:bg-[#005F73]'>Bucket List</Link>
            <Link href='/login' className='p-4 text-white hover:bg-[#005F73]'>Login</Link>
            <Link href='/register' className='p-4 text-white hover:bg-[#005F73]'>Register</Link>
        </div>
    </nav>
  )
}

export default Header