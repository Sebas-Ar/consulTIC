import ValidateCode from '../../components/register/ValidateCode'
import UsuarioExternoWrapper from '../../sessionWrapper/UsuarioExternoWrapper'

const ValidarCodigo = () => {
    return <UsuarioExternoWrapper>
        <h1>validar codigo</h1>
        <ValidateCode route="usuario-externo"/>
        <style jsx>{`
            
        `}</style>
    </UsuarioExternoWrapper>
}

export default ValidarCodigo
