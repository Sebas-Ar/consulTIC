import Link from 'next/link'

const Logo = () => {
    return <div className="logo">
        <a>
            <Link href="/">
                <img src="/img/logo/logo.png" alt="" />
            </Link>
        </a>

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
