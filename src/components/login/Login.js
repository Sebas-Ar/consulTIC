import { useForm } from 'react-hook-form'
import { authSignIn } from '../../cognito/auth'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Login = ({ title, route }) => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const router = useRouter()

    const onSubmit = async (data) => {
        try {
            await authSignIn(data)
            router.push(`/${route}`)
        } catch (error) {
            console.log(error)
        }
    }

    return <form onSubmit={handleSubmit(onSubmit)}>
        <h1>{title} Login</h1>

        <label>
            <p>Email:</p>
            <input {...register('email', { required: true })} type="email"/>
            {errors.email && <span>This field is required</span>}
        </label>
        <label>
            <p>Contraseña:</p>
            <input {...register('password', { required: true })} type="password"/>
            {errors.password && <span>This field is required</span>}
        </label>

        <button>Login</button>

        <nav>
            <a>
                <Link href={`/${route}/validar-codigo`}>No has validad tu usuario?</Link>
            </a>
        </nav>

        <style jsx>{`
            form {
                background-color: var(--green);
                margin: auto;
                width: 20rem;
                padding: 2rem;
                display: grid;
                gap: 2rem;
            }

            h1 {
                text-transform: capitalize;
                color: var(--white);
                font-size: 1.5rem;
                text-align: center;
            }

            p {
                color: var(--white);
            }

            label {
                display: grid;
                gap: .5rem;
                position: relative;
            }

            span {
                width: 100%;
                text-align: center;
                position: absolute;
                color: var(--red);
                font-size: .7rem;
                bottom: -1rem;
            }

            input {
                padding: .5rem;
            }

            button {
                justify-self: center;
                padding: .5rem 2rem;
                background-color: var(--orange);
                color: white;
            }

            a {
                text-decoration: underline;
                color: var(--yellow);
                font-size: .9rem;
            }
        `}</style>

    </form>
}

export default Login
