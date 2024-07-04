import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Viktor är ännu bättre <code>pages/index.js</code>
        </p>
    
    <h1>Välkommen till min GPT Hemsida</h1>
    <p>Detta är startsidan.</p>
    <a href="GPT01.js">Läs mer om oss</a>

    
      </main>

      <Footer />
    </div>
  )
}
