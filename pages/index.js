import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Domain owned by Matyi Kari</title>
      </Head>
      <h1>Domain owned by Matyi Kari</h1>
      <p>
        This is a domain owned by <a href='https://matyi.pro'>Matyi Kari</a>.
        Email <a href='mailto:matykari@gmail.com'>matykari@gmail.com</a> to
        purchase.
      </p>
      <hr />
      <span>Domains available for purchase:</span>
      <ul>
        <li>communism.life</li>
        <li>edh.center</li>
        <li>endthe.world</li>
        <li>greg2024.org</li>
        <li>hsd3.fun</li>
        <li>nancy-pelosi.org</li>
        <li>unbloc.net</li>
      </ul>
      <hr />
      <span>Or check out one of my websites:</span>
      <ul>
        <li>
          <a href='https://clashstats.xyz'>clashstats.xyz</a>
        </li>

        <li>
          <a href='https://codedrop.pro'>codedrop.pro</a>
        </li>
      </ul>
      <div className='watermark-container'>
        <Image
          src='/sss-watermark.jpg'
          alt='Sussy Scorpian Squad'
          title='Sussy Scorpian Squad'
          width='48'
          height='48'
        />
      </div>
    </>
  )
}
