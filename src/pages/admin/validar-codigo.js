import ValidateCode from '../../components/register/ValidateCode'
import AdminWrapper from '../../sessionWrapper/AdminWrapper'

const ValidarCodigo = () => {
    return <AdminWrapper>
        <h1>validar codigo</h1>
        <ValidateCode route="admin"/>
        <style jsx>{`
            
        `}</style>
    </AdminWrapper>
}

export default ValidarCodigo
