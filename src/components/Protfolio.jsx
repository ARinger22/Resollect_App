import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SwapVertOutlinedIcon from '@mui/icons-material/SwapVertOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';

const Portfolio = () => {
    const allData = [
        {
            'Loan No.' : 'Loan No.',
            'Loan Type' : 'Loan Type',
            'Borrower' : 'Borrower',
            'Borrower Address' : 'Borrower Address',
            'Co Borrower 1 Name' : "Co Borrower 1 Name",
            'Co Borrower 1 Address' : 'Co Borrower 1 Address',
            'Current DPD' : 'Current DPD',
            'Sanction Amount' : 'Sanction Amount',
            'Region' : 'Region'
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
            'Region' : 'West'
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
            'Region' : 'West'
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
            'Region' : 'West'
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
            'Region' : 'West'
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
            'Region' : 'West'
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
            'Region' : 'West'
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
            'Region' : 'West'
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
            'Region' : 'West'
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
            'Region' : 'West'
        },
    ]

    return (
        <div className='flex w-full text-black p-2 flex-col gap-4' >
            <h1 className='text-2xl font-bold'>Portfolio</h1>
            <div className='flex gap-4 w-full'>
                <ul className='flex gap-4 w-full flex-wrap'>
                    <li className='px-4 py-2 border border-gray- rounded-lg' >All</li>
                    <li className='px-4 py-2 border border-gray- rounded-lg' >Pre Sarfaesi</li>
                    <li className='px-4 py-2 border border-gray- rounded-lg'  >NPA</li>
                    <li className='px-4 py-2 border border-gray- rounded-lg' >13(3) Responses</li>
                    <li className='px-4 py-2 border border-gray- rounded-lg' >Symbolic Possession</li>
                    <li className='px-4 py-2 border border-gray- rounded-lg' >DM Order</li>
                    <li className='px-4 py-2 border border-gray- rounded-lg' >Physical Possessions</li>
                    <li className='px-4 py-2 border border-gray- rounded-lg' >Auctions</li>
                </ul>
            </div>
            <div className='flex w-full justify-between flex-wrap gap-2'>
                <div className="relative max-w-lg w-full">
                    <input type="search" id="default-search" className="block w-full p-3 text-sm text-black border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search Loan Number" required />
                </div>
                <div className='flex gap-4 justify-end '>
                    <div className='px-2 py-2 rounded-lg border border-gray-300'> Selects Columns <KeyboardArrowDownIcon /> </div>
                    <div className='px-2 py-2 rounded-lg border border-gray-300 bg-blue-500'> <FilterAltOutlinedIcon /> More Filters </div>
                </div>
            </div>
            <div className='w-full flex p-2 border border-gray-300 rounded-lg'> 0 loans selected</div>
            <div className='w-full h-full flex flex-col '>
                {allData.map((data, index) => (
                    <ul key={index} className='flex w-full gap-1 md:gap-3 lg:gap-7 border border-gray-300 rounded-sm items-center py-1'>
                        <li className='flex gap-2'><CheckBoxOutlineBlankOutlinedIcon /></li>
                        <li className='w-full flex gap-2'>{data['Loan No.']}</li>
                        <li className='w-full flex gap-2'>{data['Loan Type']}</li>
                        <li className='w-full flex gap-2'>{data['Borrower']}</li>
                        <li className='w-full flex gap-2'>{data['Borrower Address']}</li>
                        <li className='w-full flex gap-2'>{data['Co Borrower 1 Name']}</li>
                        <li className='w-full flex gap-2'>{data['Co Borrower 1 Address']}</li>
                        <li className='w-full flex gap-2'>{data['Current DPD']}</li>
                        <li className='w-full flex gap-2'> 
                            <div>
                                <CurrencyRupeeOutlinedIcon fontSize='small' /> {data['Sanction Amount']}
                            </div> 
                        </li>
                        <li className='w-full flex gap-2'>{data['Region']}</li>
                    </ul>
                ))}
            </div>
        </div>
    )
}

export default Portfolio;
