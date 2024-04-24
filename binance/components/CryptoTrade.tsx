const CryptoTrade = (data: any) => {

    console.log(data.data);
    
    return(
        <div>
            <h1>{data.data}</h1>
        </div>
    )
};

export default CryptoTrade;