import { useForm } from 'react-hook-form'
import { confirmSignUp } from '../../cognito/auth'
import Link from 'next/link'

const ValidateCode = ({ route }) => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = async (data) => {
        const succes = await confirmSignUp(data)
        alert(succes)
    }

    return <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Verficar usuario</h1>

        <label>
            <p>Email:</p>
            <input {...register('email', { required: true })} type="email"/>
            {errors.email && <span>This field is required</span>}
        </label>

        <label>
            <p>Codgo de verificacion:</p>
            <input {...register('code', { required: true })} type="text"/>
            {errors.email && <span>This field is required</span>}
        </label>

        <button>Validar</button>

        <nav>
            <Link href={`/${route}/iniciar-sesion`}>
                <a>
                    volver a login
                </a>
            </Link>
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

export default ValidateCode
