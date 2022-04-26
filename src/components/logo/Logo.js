import Link from 'next/link'

const Logo = () => {
    return <div className="logo">
        <Link href="/">
            <a>
                <img src="/img/logo/logo.png" alt="" />
            </a>
        </Link>

        <style jsx>{`
            .logo {
            }

            img {
                height: 10rem;
                cursor: pointer;
            }
        `}</style>
    </div>
}

export default Logo
