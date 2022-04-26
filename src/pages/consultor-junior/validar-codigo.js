import ValidateCode from '../../components/register/ValidateCode'
import ConsultorioJuniorWrapper from '../../sessionWrapper/ConsultorioJuniorWrapper'

const ValidarCodigo = () => {
    return <ConsultorioJuniorWrapper>
        <h1>validar codigo</h1>
        <ValidateCode route="consultor-junior"/>
        <style jsx>{`
            
        `}</style>
    </ConsultorioJuniorWrapper>
}

export default ValidarCodigo
