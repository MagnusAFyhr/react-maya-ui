import React from 'react'

import { useWeb3 } from '@openzeppelin/network/react';
import Web3Data from '../components/web3/Web3Data';

const infuraProjectId = '710145b40ac740ca9102a06126946539';

function Dashboard(props) {

    const web3Context = useWeb3(`wss://mainnet.infura.io/ws/v3/${infuraProjectId}`);
    const { networkId, networkName, providerName } = web3Context;

    return (
        <>
            <div className='dashboard'>
                <div>
                    <h1>Infura React Dapp with Components!</h1>
                    <Web3Data title="Web3 Data" web3Context={web3Context} />                
                </div>
            </div>
        </>
    )
}

export default Dashboard
