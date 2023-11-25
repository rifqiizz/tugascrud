import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsDoorOpen } from 'react-icons/bs';

export const Header = () => {
  return (
    <div className='flex justify-between p-4 pl-8 pr-8 bg-slate-200 text-lg'>
        <div className="flex flex-row justify-start items-center">
            <Image
                src="/yoabsen.png"
                width={32}
                height={32}
                alt="Logo YoAbsen"
                />
            <div><b>YO</b>ABSEN</div>
        </div>
        <div></div>
        <div className="flex flex-row justify-end items-center">
            <Image
                src="/happyuser.png"
                width={24}
                height={24}
                alt="Foto User"
                />
            <div className='text-sm font-semibold pl-2 pr-4'>MUH. SAAD</div>
            <BsDoorOpen size={24} />
            <div className='text-sm pl-2'>
            <Link href="/beranda">Log Out</Link></div>
        </div>
    </div>
  )
}
