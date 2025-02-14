const ReuseSubHeader = ({ title, subtitle }) => {
    return (
        <div style={{ height: '270px', width: '100%' }} className="bg-gradient-to-r from-[#F1FBFF] to-[#F8DAB0] text-center py-16 ">
            <h1
                className="text-center"
                style={{
                    fontFamily: 'Geist',
                    fontWeight: 700,
                    fontSize: '72px',
                    lineHeight: '95.04px',
                    letterSpacing: '-1%',
                    textAlign: 'center'
                }}
            >
                {title}
            </h1>
            <p className="text-gray-600 mt-2">{subtitle}</p>
        </div>
    );
};

export default ReuseSubHeader;
