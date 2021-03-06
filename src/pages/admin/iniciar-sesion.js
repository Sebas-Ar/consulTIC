import Head from 'next/head'
import Login from '../../components/login/Login'
import Logo from '../../components/logo/Logo'
import CenterItemPage from '../../layouts/CenterItemPage'
import AdminWrapper from '../../sessionWrapper/AdminWrapper'

const Index = () => {
    return <AdminWrapper>

        <Head>
            <title>Admin</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <CenterItemPage>
            <Logo />
            <Login title="admin" route="admin"/>
        </CenterItemPage>

    </AdminWrapper>
}

export default Index
