import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

export const page = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4 bg-gradient-to-b from-gray-100 to-green-200">
        <div className="max-w-md w-full border py-8 px-6 rounded border-gray-300 bg-white">
            <div className='flex flex-row justify-center items-center p-4 mb-6'>
            <Image
                src="/yoabsen.png"
                width={48}
                height={48}
                alt="Logo YoAbsen"
                />
                <div className="text-center text-2xl"><b>YO</b>ABSEN</div>
                </div>
          <h2 className="text-center text-sm">
            Selamat Datang. Silahkan langsung login tanpa validasi untuk Demo CRUD & Routing Next JS ❤️ Devscale Indonesia.
          </h2>
          <form className="mt-10 space-y-4">
            <div>
              <input name="email" type="email" autocomplete="email" required className="w-full text-sm px-4 py-3 rounded outline-none border-2 focus:border-blue-500" placeholder="Email address" />
            </div>
            <div>
              <input name="password" type="password" autocomplete="current-password" required className="w-full text-sm px-4 py-3 rounded outline-none border-2 focus:border-blue-500" placeholder="Password" />
            </div>
            
            <div className="!mt-10">
              <button type="button" className="w-full py-2.5 px-4 text-sm rounded text-white bg-green-600 hover:bg-green-700 focus:outline-none">
              <Link href="/">Log in</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default page;