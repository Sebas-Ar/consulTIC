import Head from 'next/head'
import Login from '../../components/login/Login'
import Logo from '../../components/logo/Logo'
import CenterItemPage from '../../layouts/CenterItemPage'
import ComiteWrapper from '../../sessionWrapper/ComiteWrapper'

const Index = () => {
    return <ComiteWrapper>

        <Head>
            <title>Comite</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <CenterItemPage>
            <Logo />
            <Login title="comite" route="comite"/>
        </CenterItemPage>

    </ComiteWrapper>
}

export default Index
