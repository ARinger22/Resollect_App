import React, { useState } from 'react'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import GroupRemoveOutlinedIcon from '@mui/icons-material/GroupRemoveOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CableOutlinedIcon from '@mui/icons-material/CableOutlined';

const Navbar = ({ setPortfolio, setDashboard, setNotification, setNotice, setAuction,
    setDataUpload, setControlPanel, setUserManagement, setPermissions }) => { 

    const [hover, setHover] = useState("portfolio");

    const onPortfolioClick = () => {
        setPortfolio(true);
        setDashboard(false);
        setNotification(false);
        setNotice(false);
        setAuction(false);
        setDataUpload(false);
        setControlPanel(false);
        setUserManagement(false);
        setPermissions(false);
        setHover("portfolio");
    }

    const onDashboardClick = () => {
        setPortfolio(false);
        setDashboard(true);
        setNotification(false);
        setNotice(false);
        setAuction(false);
        setDataUpload(false);
        setControlPanel(false);
        setUserManagement(false);
        setPermissions(false);
        setHover("dashboard");
    }

    const onNotificationClick = () => {
        setPortfolio(false);
        setDashboard(false);
        setNotification(true);
        setNotice(false);
        setAuction(false);
        setDataUpload(false);
        setControlPanel(false);
        setUserManagement(false);
        setPermissions(false);
        setHover("notification");
    }

    const onNoticeClick = () => {
        setPortfolio(false);
        setDashboard(false);
        setNotification(false);
        setNotice(true);
        setAuction(false);
        setDataUpload(false);
        setControlPanel(false);
        setUserManagement(false);
        setPermissions(false);
        setHover("notice");
    }

    const onAuctionClick = () => {
        setPortfolio(false);
        setDashboard(false);
        setNotification(false);
        setNotice(false);
        setAuction(true);
        setDataUpload(false);
        setControlPanel(false);
        setUserManagement(false);
        setPermissions(false);
        setHover("auction");
    }

    const onDataUploadClick = () => {
        setPortfolio(false);
        setDashboard(false);
        setNotification(false);
        setNotice(false);
        setAuction(false);
        setDataUpload(true);
        setControlPanel(false);
        setUserManagement(false);
        setPermissions(false);
        setHover("dataUpload");
    }

    const onControlPanelClick = () => {
        setPortfolio(false);
        setDashboard(false);
        setNotification(false);
        setNotice(false);
        setAuction(false);
        setDataUpload(false);
        setControlPanel(true);
        setUserManagement(false);
        setPermissions(false);
        setHover("controlPanel");
    }

    const onUserManagementClick = () => {
        setPortfolio(false);
        setDashboard(false);
        setNotification(false);
        setNotice(false);
        setAuction(false);
        setDataUpload(false);
        setControlPanel(false);
        setUserManagement(true);
        setPermissions(false);
        setHover("userManagement");
    }

    const onPermissionsClick = () => {
        setPortfolio(false);
        setDashboard(false);
        setNotification(false);
        setNotice(false);
        setAuction(false);
        setDataUpload(false);
        setControlPanel(false);
        setUserManagement(false);
        setPermissions(true);
        setHover("permissions");
    }

    return (
        <nav className="flex justify-between h-full bg-gray-200 text-white p-4 border border-r-gray-300 border-r-2">
            <ul className='text-black text-md p-4 flex flex-col gap-2'>
                <li className={`flex gap-2 cursor-pointer rounded-lg px-1 py-3 ${hover === "dashboard" ? "bg-blue-400" : ""}`} 
                    onClick={onDashboardClick}>
                    <DashboardOutlinedIcon />
                    Dashboard
                </li>
                <li className={`flex gap-2 cursor-pointer rounded-lg px-1 py-3 ${hover === "portfolio" ? "bg-blue-400" : ""}`} 
                    onClick={onPortfolioClick}>
                    <Person2OutlinedIcon />
                    Portfolio
                </li>
                <li className={`flex gap-2 cursor-pointer rounded-lg px-1 py-3 ${hover === "notification" ? "bg-blue-400" : ""}`}
                    onClick={onNotificationClick}>
                    <NotificationsNoneOutlinedIcon />
                    Notifications
                </li>
                <li className={`flex gap-2 cursor-pointer rounded-lg px-1 py-3 ${hover === "notice" ? "bg-blue-400" : ""}`}
                    onClick={onNoticeClick}>
                    <EmailOutlinedIcon />
                    Notices
                </li>
                <li className={`flex gap-2 cursor-pointer rounded-lg px-1 py-3 ${hover === "auction" ? "bg-blue-400" : ""}`}
                    onClick={onAuctionClick}>
                    <ChatBubbleOutlineOutlinedIcon />
                    Auction
                </li>
                <li className={`flex gap-2 cursor-pointer rounded-lg px-1 py-3 ${hover === "dataUpload" ? "bg-blue-400" : ""}`}
                    onClick={onDataUploadClick}>
                    <UploadFileOutlinedIcon />
                    Data Upload
                </li>
                <li className={`flex gap-2 cursor-pointer rounded-lg px-1 py-3 ${hover === "controlPanel" ? "bg-blue-400" : ""}`}
                    onClick={onControlPanelClick}>
                    <CableOutlinedIcon />
                    Control Panel
                </li>
                <li className={`flex gap-2 cursor-pointer rounded-lg whitespace-nowrap px-1 py-3 ${hover === "userManagement" ? "bg-blue-400" : ""}`}
                    onClick={onUserManagementClick}>
                    <GroupRemoveOutlinedIcon />
                    User Management
                </li>
                <li className={`flex gap-2 cursor-pointer rounded-lg px-1 py-3 ${hover === "permissions" ? "bg-blue-400" : ""}`}
                    onClick={onPermissionsClick}>
                    <LockOutlinedIcon />
                    Permissions
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;

