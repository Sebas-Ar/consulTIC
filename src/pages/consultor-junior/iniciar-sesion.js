import Head from 'next/head'
import Login from '../../components/login/Login'
import Logo from '../../components/logo/Logo'
import CenterItemPage from '../../layouts/CenterItemPage'
import ConsultorioJuniorWrapper from '../../sessionWrapper/ConsultorioJuniorWrapper'

const Index = () => {
    return <ConsultorioJuniorWrapper>

        <Head>
            <title>Comite</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <CenterItemPage>
            <Logo />
            <Login title="consultor junio" route="consultor-junior"/>
        </CenterItemPage>

    </ConsultorioJuniorWrapper>
}

export default Index
