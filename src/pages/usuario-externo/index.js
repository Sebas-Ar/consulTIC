import UsuarioExternoWrapper from '../../sessionWrapper/UsuarioExternoWrapper'
import Head from 'next/head'

const Index = () => {
    return <UsuarioExternoWrapper verify>

        <Head>
            <title>Admin</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1>pagina privada</h1>

        <style jsx>{`
            
        `}</style>
    </UsuarioExternoWrapper>
}

export default Index