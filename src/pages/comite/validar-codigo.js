import ValidateCode from '../../components/register/ValidateCode'
import ComiteWrapper from '../../sessionWrapper/ComiteWrapper'

const ValidarCodigo = () => {
    return <ComiteWrapper>
        <h1>validar codigo</h1>
        <ValidateCode route="comite"/>
        <style jsx>{`
            
        `}</style>
    </ComiteWrapper>
}

export default ValidarCodigo
