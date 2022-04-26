const CenterItemPage = ({ children }) => {
    return <div className="center">

        {children}

        <style jsx>{`
            .center {
                display: grid;
                place-items: center;
                min-height: 100vh;
            }
        `}</style>
    </div>
}

export default CenterItemPage
