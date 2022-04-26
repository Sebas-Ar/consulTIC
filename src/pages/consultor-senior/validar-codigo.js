import ValidateCode from '../../components/register/ValidateCode'
import ConsultorioSeniorWrapper from '../../sessionWrapper/ConsultorioSeniorWrapper'

const ValidarCodigo = () => {
    return <ConsultorioSeniorWrapper>
        <h1>validar codigo</h1>
        <ValidateCode route="consultor-senior"/>
        <style jsx>{`
            
        `}</style>
    </ConsultorioSeniorWrapper>
}

export default ValidarCodigo
