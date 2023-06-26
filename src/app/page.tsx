'use client'

import Image from 'next/image'
import Header from '@/components/Header'
import amazonia from '../../public/amazonia.jpeg'
import desmatamento from '../../public/desmatamento.jpeg'
import programador from '../../public/programador.png'
import oceanos from '../../public/oceanos.jpg'
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
            <h1 className='text-4xl font-medium text-white'>Conhecendo a Amazônia</h1>
            <p className='text-sm font-normal text-white'>
            Sendo uma das maiores florestas tropicais, localiza-se no norte da América do Sul
            cobrindo regiões não só brasileiras,mas também países como: Peru, Bolívia,
            Venezuela, Colômbia e outros. Possui um clima equatorial e solo seco. Sua fauna e
            flora são de extrema importância, visto que a floresta Amazônica tem uma vasta
            biodiversidade. Sua conservação é necessária devido aos efeitos positivos sobre
            recursos naturais encontrados na sua área, além de contribuir para o equilíbrio
            climático do mundo.
            </p>
            <div className='w-full flex'>
              <Image src={amazonia} alt='Nota 5' width={500} className='border' />
            </div>

          </div>
        </div>
      </div>

      <div className='items-center justify-center flex flex-wrap bg-gray-900 w-full p-4 gap-2'>
        <div className="flex justify-between items-center p-12 gap-8 w-full max-w-6xl 2xl:flex-row-reverse flex-col">
          <div className='flex flex-col gap-8'>
            <div>
              <h1 className='text-4xl font-medium text-white'>Uma de suas ameaças; o desmatamento</h1>
              <p className='text-sm font-normal text-white'>
              O desmatamento ocorre devido o desflorestamento de um determinado local, ou
              seja, a derrubada de árvores. No caso da floresta Amazônica, o desmatamento
              ocorre em decorrência da exploração de recursos encontrados na floresta, muitas
              vezes esse desmatamento ocorre de forma ilegal, sendo assim, não possui
              nenhuma autorização de órgãos responsáveis. Suas causas princípais então entre a
              exploração florestal, o agronégocio, o garimpo ilegal e a grilagem e seus impactos
              negativos são diversos para o meio ambiente como o aumento de gases do efeito
              estufa, mudanças climáticas, além da perda da biodiversidade.
              </p>
            </div>

            <div className='flex items-center gap-8 flex-col sm:flex-row justify-around sm:justify-start'>
              <Image src={desmatamento} alt='Rocket' width={300} />
            </div>
          </div>
        </div>
      </div>

      <div className='items-center justify-center flex flex-wrap bg-green-600 w-full p-4 gap-2'>
        <div className="flex justify-between items-center p-12 w-full max-w-6xl 2xl:flex-row flex-col">
          <div className='flex flex-col gap-4'>
            <h1 className='text-4xl font-medium text-white'>Como podemos contribuir para a conservação da floresta amazônica</h1>
            <p className='text-sm font-normal text-white'>
            A conscientização ambiental de qualquer pessoa pode ajudar na preservação da
            floresta Amazônica, tomando para si atitudes que não gerem consequências para o
            coletivo, mas sim atitudes positivas que visem o futuro mais sustentável para futuras
            gerações. Atitudes como;
            O consumo consciente: Ter conhecimento da fabricação do produto, dando
            preferência para matérias que sejam frutos de um processo livre de impactos
            negativos para o meio ambiente.
            Contribuições com ONGs: Muitas ongs não tem um apoio governamental,
            sendo assim, é importante ter conhecimento sobre essas ongs que precisam
            de ajuda para seu funcionamento. Ajudando através de doações para
            contribuir com as atividades do grupo.
            Apoiando as lutas dos povos tradicionais: Entender e valorizar o
            conhecimento dos povos e comunidades tradicionais, como da população
            indígena. Apoiando lutas e ações promovidas pelos povos tradicionais.
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
              <h1 className='text-4xl font-medium text-gray-900'>Curiosidade!</h1>
              <p className='text-sm font-normal text-gray-900'>
              Muitos dizem que a floresta Amazônia é o pulmão do mundo, mas na verdade o real
              pulmão do mundo são os oceanos, devido às algas marinhas. Visto que as algas
              produzem mais oxigênio para a fotossíntese do que precisam, e desse excesso
              ocorre a liberação para o ambiente. Mas ainda assim, a floresta Amazônica é
              essencial para o equilíbrio climático, evitando assim, possíveis danos irreversíveis
              para o meio ambiente.
              </p>
            </div>

            <div className='flex items-center gap-8 flex-col sm:flex-row justify-around sm:justify-start'>
              <Image src={oceanos} alt='Rocket' width={400} />
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
              <a href='https://www.instagram.com/salveamazonia_/' target='_blank' className='text-sm text-white'>@salveamazonia_</a>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  )
}
