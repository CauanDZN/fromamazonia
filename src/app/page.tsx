'use client'

import Image from 'next/image'
import Header from '@/components/Header'
import amazonia from '../../public/amazonia.jpeg'
import analista from '../../public/analista.png'
import programador from '../../public/programador.png'
import qualidade from '../../public/qualidade.png'
import { At, InstagramLogo, MapPin, WhatsappLogo } from '@phosphor-icons/react'
import { Suspense } from 'react'
import Loading from './loading'
import { Counter } from '@/components/Counter'

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <div className='items-center justify-center flex flex-wrap bg-green-600 w-full p-4'>
        <h1 className='text-white text-center'>Somos uma equipe da EEEP Leonel de Moura Brizola. 🌳</h1>
        <div className="flex justify-center items-center">
            
        </div>
      </div>

      <div className='items-center justify-center flex flex-wrap bg-white w-full gap-2'>
        <div className="flex justify-around items-center gap-4 p-6 max-w-6xl 2xl:flex-row flex-col">
          <div className={`flex flex-col sm:flex-row 2xl:flex-col gap-2 my-2 sm:w-auto`}>
            <Counter />
          </div>
          <div className={`flex flex-col sm:flex-row 2xl:flex-col gap-2 my-4 w-full sm:w-auto`}>
            <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full'>Saiba Mais</button>
          </div>
        </div>
      </div>

      <div className='items-center justify-center flex flex-wrap bg-green-600 w-full p-4 gap-2'>
        <div className="flex justify-between items-center p-12 w-full max-w-6xl 2xl:flex-row flex-col">
          <div className='flex flex-col gap-4'>
            <h1 className='text-4xl font-medium text-white'>Lorem ipsum</h1>
            <p className='text-sm font-normal text-white'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className='w-full flex'>
              <Image src={amazonia} alt='Nota 5' width={500} className='border' />
            </div>

          </div>
        </div>
      </div>

      <div className='items-center justify-center flex flex-wrap bg-white-600 w-full p-4 gap-2'>
        <div className="flex justify-between items-center p-12 gap-8 w-full max-w-6xl 2xl:flex-row-reverse flex-col">
          <div className='flex flex-col gap-8'>
            <div>
              <h1 className='text-4xl font-medium text-gray-900'>Lorem ipsum</h1>
              <p className='text-sm font-normal text-gray-900'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            <div className='flex items-center gap-8 flex-col sm:flex-row justify-around sm:justify-start'>
              <Image src={analista} alt='Rocket' width={300} />
            </div>
          </div>
        </div>
      </div>

      <div className='items-center justify-center flex flex-wrap bg-green-600 w-full p-4 gap-2'>
        <div className="flex justify-between items-center p-12 w-full max-w-6xl 2xl:flex-row flex-col">
          <div className='flex flex-col gap-4'>
            <h1 className='text-4xl font-medium text-white'>Lorem ipsum</h1>
            <p className='text-sm font-normal text-white'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className='w-full flex'>
              <Image src={programador} alt='Nota 5' width={500} className='border' />
            </div>

          </div>
        </div>
      </div>

      <div className='items-center justify-center flex flex-wrap bg-white-600 w-full p-4 gap-2'>
        <div className="flex justify-between items-center p-12 gap-8 w-full max-w-6xl 2xl:flex-row-reverse flex-col">
          <div className='flex flex-col gap-8'>
            <div>
              <h1 className='text-4xl font-medium text-gray-900'>Lorem ipsum</h1>
              <p className='text-sm font-normal text-gray-900'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            <div className='flex items-center gap-8 flex-col sm:flex-row justify-around sm:justify-start'>
              <Image src={qualidade} alt='Rocket' width={600} />
            </div>
          </div>
        </div>
      </div>

      <form className='items-center justify-center flex flex-wrap bg-green-600 w-full p-4'>
      <div className="max-w-xs my-2 overflow-hidden rounded shadow-lg">
        <div className="px-4 py-6">
          <div className="mb-2 text-xl text-white font-bold">Newsletter</div>
          <form className="flex flex-col">
            <label htmlFor="name" className="mb-2 text-white">Nome</label>
            <input
              className="mb-4 border-b-2 p-4"
              id="name"
              name="name"
              type="text"
              required
            />
            <label htmlFor="email" className="mb-2 text-white">E-mail</label>
            <input
              className="mb-4 border-b-2 p-4"
              id="email"
              name="email"
              type="email"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 font-bold text-white bg-green-500 rounded-full hover:bg-green-700"
            >
              Participar
            </button>
          </form>
        </div>
      </div>
      </form>

      <div className='items-center justify-center flex flex-wrap bg-green-600 w-full p-4 gap-2'>
        <div className='flex flex-col p-12 w-full max-w-6xl gap-8'>
          <div>
            <h1 className='text-4xl font-medium text-white'>Contatos</h1>
            <p className='text-sm font-normal text-white'>
              Transforme! Ajude!
            </p>
          </div>

          <div className='flex flex-col 2xl:flex-row gap-6 items-center sm:items-start'>
            <div className='flex flex-row gap-2 items-center'>
              <InstagramLogo size={24} color='#FFFFFF' weight='fill' />
              <p className='text-sm text-white'>@fromamazonia</p>
            </div>
            <div className='flex flex-row gap-2 items-center'>
              <At size={24} color='#FFFFFF' weight='regular' />
              <p className='text-sm text-white'>fromamazonia@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  )
}
