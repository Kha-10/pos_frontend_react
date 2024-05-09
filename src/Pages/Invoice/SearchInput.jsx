import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import { InvoiceSkeleton, SearchSkeleton } from '../../Components/skeletons/InvoiceSkeleton';

const SearchInput = ({loading}) => {

  const [productName, setProductName] = useState("");

  const navigate = useNavigate ();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const value = params.get('search')

  const searchHandler = () => {
    navigate("/invoice/add?search=" + productName);
  };

  useEffect(()=> {
    if(!value) {
        setProductName('')
    }
  },[value])

  return (
    <ul className='flex justify-between items-center mx-auto'>
        <li className='w-full'>
            <div className='flex items-center max-w-lg'>
                <div className='relative w-full'>
                    <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'></div>
                   {loading ?(
                    <InvoiceSkeleton/> 
                   ) : (
                    <input
                    type='text'
                    id='simple-search'
                    className='bg-gray-700 border border-gray-700 text-sm
                    rounded-lg focus:ring-blue-500 block w-full ps-3
                    p-2.5 placeholder-gray-400
                    text-white focus:border-blue-500'
                    placeholder='Search all product here'
                    required
                    value={productName} 
                    onChange={(e) => setProductName(e.target.value)}
                    />          
                   )}     
                    {productName && (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                    strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 absolute top-[13px] 
                    right-3 cursor-pointer" 
                    onClick={()=>setProductName('')}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                    )}
                </div>
                {loading ? (
                  <SearchSkeleton/>
                ) : (
                  <button
                  type='button'
                  className='p-2.5 ms-2 text-sm font-medium text-blue-400 bg-gray-700 rounded-lg 
                  border border-blue-400 hover:bg-gray-500 focus:outline-none focus:ring-blue-300
                   dark:bg-gray-700 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                  onClick={searchHandler}
              >
                  <svg
                  className='w-4 h-4'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 20 20'
                  >
                  <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                  /> 
                  </svg> 
              </button>
                )}
            </div>
        </li>
    </ul>

  )
}

export default SearchInput