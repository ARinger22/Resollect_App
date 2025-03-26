import React from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

export default function UploadDoc({ setOpenUpload }) {

  const onCloseClick = () => {
    setOpenUpload(false);
  };

  return (
    <div className='absolute top-0 left-0 flex w-full h-full bg-slate-400 bg-opacity-70 justify-end z-10'>
      <div className='w-1/3 min-w-80 bg-white rounded-lg shadow-lg'>
        <div className='flex justify-between items-center h-16  px-4'>
          <h1 className='text-2xl font-semibold'>Upload Document</h1>
          <button
            className='border text-black border-gray-300 p-1 rounded-lg hover:bg-gray-200'
            onClick={onCloseClick}
          >
            <CloseOutlinedIcon />
          </button>
        </div>

        <div className='p-6'>
          <form className='flex flex-col gap-6'>
            <div>
              <label className='block mb-2 text-gray-700'>Document Name</label>
              <select className='border border-gray-300 p-2 rounded-lg w-full'>
                <option>Select</option>
              </select>
            </div>

            <div>
              <label className='block mb-2 text-gray-700'>Document Type</label>
              <select className='border border-gray-300 p-2 rounded-lg w-full'>
                <option>Select</option>
              </select>
            </div>

            <div>
              <label className='block mb-2 text-gray-700'>Document Remarks</label>
              <input
                type='text'
                placeholder='Type'
                className='border border-gray-300 p-2 rounded-lg w-full'
              />
            </div>

            <div>
              <label className='block mb-2 text-gray-700'>Select File</label>
              <input type='file' className='border border-gray-300 p-2 rounded-lg w-full' />
            </div>

            <div className='flex justify-end'>
              <button
                type='submit'
                className='bg-blue-500 text-white p-2 rounded-lg px-8 hover:bg-blue-600'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}