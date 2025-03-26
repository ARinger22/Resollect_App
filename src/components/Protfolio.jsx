import React, { useEffect, useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SwapVertOutlinedIcon from '@mui/icons-material/SwapVertOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import UploadDoc from './UploadDoc';

const Portfolio = () => {
    const [allData, setAllData] = useState([
        {
            'Loan No.' : 'Loan No.',
            'Loan Type' : 'Loan Type',
            'Borrower' : 'Borrower',
            'Borrower Address' : 'Borrower Address',
            'Co Borrower 1 Name' : "Co Borrower 1 Name",
            'Co Borrower 1 Address' : 'Co Borrower 1 Address',
            'Current DPD' : 'Current DPD',
            'Sanction Amount' : 'Sanction Amount',
            'Region' : 'Region',
            'checker' : false
        },
        {
            'Loan No.' : '123456',
            'Loan Type' : 'Home Loan',
            'Borrower' : 'Tushar',
            'Borrower Address' : 'Pune',
            'Co Borrower 1 Name' : "Tushar",
            'Co Borrower 1 Address' : '24/543, Acharya Path Ongole-052360',
            'Current DPD' : '30',
            'Sanction Amount' : '100000',
            'Region' : 'West',
            'checker' : false
        },
        {
            'Loan No.' : '123456',
            'Loan Type' : 'Car Loan',
            'Borrower' : 'Tushar',
            'Borrower Address' : 'Pune',
            'Co Borrower 1 Name' : "Tushar",
            'Co Borrower 1 Address' : '24/543, Acharya Path Ongole-052360',
            'Current DPD' : '30',
            'Sanction Amount' : '100000',
            'Region' : 'West',
            'checker' : false
        },
        {
            'Loan No.' : '123456',
            'Loan Type' : 'Car Loan',
            'Borrower' : 'Tushar',
            'Borrower Address' : 'Pune',
            'Co Borrower 1 Name' : "Tushar",
            'Co Borrower 1 Address' : '24/543, Acharya Path Ongole-052360',
            'Current DPD' : '30',
            'Sanction Amount' : '100000',
            'Region' : 'West',
            'checker' : false
        },
        {
            'Loan No.' : '123456',
            'Loan Type' : 'Home Loan',
            'Borrower' : 'Tushar',
            'Borrower Address' : 'Pune',
            'Co Borrower 1 Name' : "Tushar",
            'Co Borrower 1 Address' : '24/543, Acharya Path Ongole-052360',
            'Current DPD' : '30',
            'Sanction Amount' : '100000',
            'Region' : 'West',
            'checker' : false
        },
        {
            'Loan No.' : '123456',
            'Loan Type' : 'Home Loan',
            'Borrower' : 'Tushar',
            'Borrower Address' : 'Pune',
            'Co Borrower 1 Name' : "Tushar",
            'Co Borrower 1 Address' : '24/543, Acharya Path Ongole-052360',
            'Current DPD' : '30',
            'Sanction Amount' : '100000',
            'Region' : 'West',
            'checker' : false
        },
        {
            'Loan No.' : '123456',
            'Loan Type' : 'personal Loan',
            'Borrower' : 'Tushar',
            'Borrower Address' : 'Pune',
            'Co Borrower 1 Name' : "Tushar",
            'Co Borrower 1 Address' : '24/543, Acharya Path Ongole-052360',
            'Current DPD' : '30',
            'Sanction Amount' : '100000',
            'Region' : 'West',
            'checker' : false
        },
        {
            'Loan No.' : '123456',
            'Loan Type' : 'Car Loan',
            'Borrower' : 'Tushar',
            'Borrower Address' : 'Pune',
            'Co Borrower 1 Name' : "Tushar",
            'Co Borrower 1 Address' : '24/543, Acharya Path Ongole-052360',
            'Current DPD' : '30',
            'Sanction Amount' : '100000',
            'Region' : 'West',
            'checker' : false
        },
        {
            'Loan No.' : '123456',
            'Loan Type' : 'Personal Loan',
            'Borrower' : 'Tushar',
            'Borrower Address' : 'Pune',
            'Co Borrower 1 Name' : "Tushar",
            'Co Borrower 1 Address' : '24/543, Acharya Path Ongole-052360',
            'Current DPD' : '30',
            'Sanction Amount' : '100000',
            'Region' : 'West',
            'checker' : false
        },
        {
            'Loan No.' : '123456',
            'Loan Type' : 'Personal Loan',
            'Borrower' : 'Tushar',
            'Borrower Address' : 'Pune',
            'Co Borrower 1 Name' : "Tushar",
            'Co Borrower 1 Address' : '24/543, Acharya Path Ongole-052360',
            'Current DPD' : '30',
            'Sanction Amount' : '100000',
            'Region' : 'West',
            'checker' : false
        },
    ]);

    const [all, setAll] = useState(true);
    const [preSarfaesi, setPreSarfaesi] = useState(false);
    const [npa, setNpa] = useState(false);
    const [response, setResponse] = useState(false);
    const [symbolicPossession, setSymbolicPossession] = useState(false);
    const [dmOrder, setDmOrder] = useState(false);
    const [physicalPossession, setPhysicalPossession] = useState(false);
    const [auction, setAuction] = useState(false);
    const [openUpload , setOpenUpload] = useState(false);
    const [openfilter, setOpenfilter] = useState(false);
    const [selectFilter, setSelectFilter] = useState("");

    const onAllClick = () => {
        setAll(true);
        setPreSarfaesi(false);
        setNpa(false);
        setResponse(false);
        setSymbolicPossession(false);
        setDmOrder(false);
        setPhysicalPossession(false);
        setAuction(false);
    }

    const onPreSarfaesiClick = () => {
        setAll(false);
        setPreSarfaesi(true);
        setNpa(false);
        setResponse(false);
        setSymbolicPossession(false);
        setDmOrder(false);
        setPhysicalPossession(false);
        setAuction(false);
    }

    const onNpaClick = () => {
        setAll(false);
        setPreSarfaesi(false);
        setNpa(true);
        setResponse(false);
        setSymbolicPossession(false);
        setDmOrder(false);
        setPhysicalPossession(false);
        setAuction(false);
    }

    const onResponseClick = () => {
        setAll(false);
        setPreSarfaesi(false);
        setNpa(false);
        setResponse(true);
        setSymbolicPossession(false);
        setDmOrder(false);
        setPhysicalPossession(false);
        setAuction(false);
    }

    const onSymbolicPossessionClick = () => {
        setAll(false);
        setPreSarfaesi(false);
        setNpa(false);
        setResponse(false);
        setSymbolicPossession(true);
        setDmOrder(false);
        setPhysicalPossession(false);
        setAuction(false);
    }

    const onDmOrderClick = () => {
        setAll(false);
        setPreSarfaesi(false);
        setNpa(false);
        setResponse(false);
        setSymbolicPossession(false);
        setDmOrder(true);
        setPhysicalPossession(false);
        setAuction(false);
    }

    const onPhysicalPossessionClick = () => {
        setAll(false);
        setPreSarfaesi(false);
        setNpa(false);
        setResponse(false);
        setSymbolicPossession(false);
        setDmOrder(false);
        setPhysicalPossession(true);
        setAuction(false);
    }

    const onAuctionClick = () => {
        setAll(false);
        setPreSarfaesi(false);
        setNpa(false);
        setResponse(false);
        setSymbolicPossession(false);
        setDmOrder(false);
        setPhysicalPossession(false);
        setAuction(true);
    }

    const onBoxClick = (index) => {
        const updatedData = [...allData];
        updatedData[index]['checker'] = !updatedData[index]['checker'];
        setAllData(updatedData);

        if(index === 0){
            if(updatedData[0]['checker']){
                updatedData.map((data) => {
                    data['checker'] = true;
                });
            }else{
                updatedData.map((data) => {
                    data['checker'] = false;
                });
            }
            setAllData(updatedData);
        }
    };
    
    const onFilterClick = () => {
        // setOpenUpload(true);
        setOpenfilter(!openfilter);
    }

    const onFileUploadClick = () =>{
        setOpenUpload(true);
    }

    const onHomeLoadClick = () => {
        setSelectFilter("Home Loan");
    }

    const onCarLoanClick = () => {
        setSelectFilter("Car Loan");
    }

    const onPersonalLoanClick = () => {
        setSelectFilter("Personal Loan");
    }

    const onAllFilterClick = () => {
        setSelectFilter("");
    }

    return (
        <div className='flex w-full text-black p-2 flex-col gap-4' >
            <h1 className='text-2xl font-bold'>Portfolio</h1>
            <div className='flex gap-4 w-full'>
                <ul className='flex gap-4 w-full flex-wrap'>
                    <li className={`px-4 py-2 border border-gray-300 rounded-lg cursor-pointer ${all?"bg-blue-400":""} `} 
                        onClick={onAllClick}
                    >All</li>
                    <li className={`px-4 py-2 border border-gray-300 rounded-lg cursor-pointer ${preSarfaesi?"bg-blue-400":""}`}
                        onClick={onPreSarfaesiClick}
                    >Pre Sarfaesi</li>
                    <li className={`px-4 py-2 border border-gray-300 rounded-lg cursor-pointer ${npa?"bg-blue-400":""}`}  
                        onClick={onNpaClick}
                    >NPA</li>
                    <li className={`px-4 py-2 border border-gray-300 rounded-lg cursor-pointer ${response?"bg-blue-400":""}`} 
                        onClick={onResponseClick}
                    >13(3) Responses</li>
                    <li className={`px-4 py-2 border border-gray-300 rounded-lg cursor-pointer ${symbolicPossession?"bg-blue-400":""}`} 
                        onClick={onSymbolicPossessionClick}
                    >Symbolic Possession</li>
                    <li className={`px-4 py-2 border border-gray-300 rounded-lg cursor-pointer ${dmOrder?"bg-blue-400":""}`} 
                        onClick={onDmOrderClick}
                    >DM Order</li>
                    <li className={`px-4 py-2 border border-gray-300 rounded-lg cursor-pointer ${physicalPossession?"bg-blue-400":""}`} 
                        onClick={onPhysicalPossessionClick}
                    >Physical Possessions</li>
                    <li className={`px-4 py-2 border border-gray-300 rounded-lg cursor-pointer ${auction?"bg-blue-400":""}`} 
                        onClick={onAuctionClick}
                    >Auctions</li>
                </ul>
            </div>
            <div className='flex w-full justify-between flex-wrap gap-2'>
                <div className="relative max-w-lg w-full">
                    <input type="search" id="default-search" className="block w-full p-3 text-sm text-black border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search Loan Number" required />
                </div>
                <div className='flex gap-4 justify-end relative'>
                    <div className='px-2 py-2 rounded-lg border border-gray-300'> Selects Columns <KeyboardArrowDownIcon /> </div>
                    <div className='px-2 py-2 rounded-lg border border-gray-300 bg-blue-500 cursor-pointer' onClick={onFilterClick} > <FilterAltOutlinedIcon /> More Filters </div>
                    {openfilter && 
                    <div className='absolute flex flex-col items-center justify-center max-w-md w-full border border-gray-300 z-10 bg-slate-400 top-12
                        rounded-lg' >
                            <p className='p-2 border border-gray-300 w-full' onClick={onAllFilterClick} >All</p>
                            <p className='p-2 border border-gray-300 w-full' onClick={onHomeLoadClick} >Home Loan</p>
                            <p className='p-2 w-full border border-gray-300 ' onClick={onCarLoanClick}>Car Loan</p>
                            <p className='p-2 w-full border border-gray-300 ' onClick={onPersonalLoanClick}>Personal Loan</p>
                            <p className='p-2 w-full border border-gray-300 ' onClick={onFileUploadClick}  >File Upload</p>
                        </div>
                    }
                </div>
            </div>
            <div className='w-full flex p-2 border border-gray-300 rounded-lg'> 0 loans selected</div>
            <div className='w-full h-full flex flex-col '>
                {allData.map((data, index) => (
                    (selectFilter == "" || selectFilter == data['Loan Type']) &&
                    <ul key={index} className='flex w-full gap-1 md:gap-3 border border-gray-300 rounded-sm items-center py-1'>
                        <li className='flex gap-2 cursor-pointer' onClick={() => onBoxClick(index)} >{data['checker']?<CheckBoxOutlinedIcon/> :<CheckBoxOutlineBlankOutlinedIcon />}</li>
                        <li className='w-full flex gap-2'> {data['Loan No.']} {index == 0 && <SwapVertOutlinedIcon/>}</li>
                        <li className='w-full flex gap-2'>{data['Loan Type']} {index == 0 && <SwapVertOutlinedIcon/>}</li>
                        <li className='w-full flex gap-2'>{data['Borrower']} {index == 0 && <SwapVertOutlinedIcon/>}</li>
                        <li className={`w-full flex gap-2 ${index==0? "2xl:whitespace-nowrap":""}`}>{data['Borrower Address']} {index == 0 && <SwapVertOutlinedIcon/>}</li>
                        <li className={`w-full flex gap-2 ${index==0? "2xl:whitespace-nowrap":""}`}>{data['Co Borrower 1 Name']} {index == 0 && <SwapVertOutlinedIcon/>}</li>
                        <li className={`w-full flex gap-2 ${index==0? "2xl:whitespace-nowrap":""}`}>{data['Co Borrower 1 Address']} {index == 0 && <SwapVertOutlinedIcon/>}</li>
                        <li className='w-full flex gap-2 justify-center'>{data['Current DPD']} {index == 0 && <SwapVertOutlinedIcon/>}</li>
                        <li className={`w-full flex gap-2 justify-center ${index==0? "2xl:whitespace-nowrap":""}`}> 
                            <div>
                                {index != 0 && <CurrencyRupeeOutlinedIcon fontSize='small' />} {data['Sanction Amount']}
                                {index == 0 && <SwapVertOutlinedIcon/>}
                            </div> 
                        </li>
                        <li className='w-full flex gap-2 justify-start'>{data['Region']} {index == 0 && <SwapVertOutlinedIcon/>}</li>
                    </ul>
                ))}
            </div>
            {openUpload && <UploadDoc  setOpenUpload={setOpenUpload} />}
        </div>
    )
}

export default Portfolio;
