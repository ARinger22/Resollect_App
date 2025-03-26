import React, { useEffect, useState } from 'react'
import Images from '../Constants/Images';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonIcon from '@mui/icons-material/Person';

import Navbar from './Navbar';
import Portfolio from './Protfolio';
import Dashboard from './Dashboard';
import Notifications from './Notifications';
import Notices from './Notices';
import Auction from './Auction';
import DataUpload from './DataUpload';
import ControlPanel from './ControlPanel';
import Management from './Management';
import Permission from './Permission';

const Heading = () => {
    const [portfolio, setPortfolio] = useState(true);
    const [dashboard, setDashboard] = useState(false);
    const [notification, setNotification] = useState(false);
    const [notice, setNotice] = useState(false);
    const [auction, setAuction] = useState(false);
    const [dataUpload, setDataUpload] = useState(false);
    const [controlPanel, setControlPanel] = useState(false);
    const [userManagement, setUserManagement] = useState(false);
    const [permissions, setPermissions] = useState(false);

    return (
        <div className='flex flex-col w-full h-full'>
            <div className="flex w-full h-20 text-black justify-between p-4 border border-b-gray-300 border-b-2">
                <div className='w-full items-center flex h-full text-xl text-blue-500'>
                    <div className='flex gap-1 font-serif'>
                        <p className='rounded-full w-8 h-8 flex flex-col items-center justify-end bg-blue-600 text-3xl text-white font-semibold'>r</p>
                        esollect
                    </div>
                </div>
                <div className='flex w-full gap-3 justify-end'>
                    <div className='rounded-full bg-gray-200 w-12  border border-black flex items-end justify-center'>
                        <PersonIcon className='text-orange-500' fontSize='large'/>
                    </div>
                    <div>
                        <h1>Tushar</h1>
                        <p>tushar@resollect.com</p>
                    </div>
                    <div className='h-full items-center flex'>
                        <KeyboardArrowDownIcon />
                    </div>
                </div>
            </div>
            <div className='flex w-full h-full'>
                <Navbar setPortfolio={setPortfolio} 
                    setDashboard={setDashboard}
                    setNotification={setNotification}
                    setNotice={setNotice}
                    setAuction={setAuction}
                    setDataUpload={setDataUpload}
                    setControlPanel={setControlPanel}
                    setUserManagement={setUserManagement}
                    setPermissions={setPermissions}
                />
                {portfolio && <Portfolio /> }
                {dashboard && <Dashboard /> }
                {notification && <Notifications /> }
                {notice && <Notices /> }
                {auction && <Auction /> }
                {dataUpload && <DataUpload /> }
                {controlPanel && <ControlPanel /> }
                {userManagement && <Management /> }
                {permissions && <Permission /> }
            </div>
        </div>
    )
}

export default Heading;