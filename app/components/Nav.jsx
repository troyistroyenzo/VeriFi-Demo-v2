import React from 'react'
import {SearchIcon, TableIcon, TemplateIcon} from '@heroicons/react/outline'
import {auth} from '../api/firebase'
import SearchBox from './SearchBox'

export default function Nav() {
    // const currentUser = auth.currentUser
  return (
    <div className='bg-indigo-600'>
        <div className='px-3 py-3 mx-auto msx-w-11/12 sm:px-6 lg:px-8'>
          <div className='flex flex-wrap items-center justify-between'>
            <div className='flex items-center w-0'>
              <span>
                <TableIcon className='w-12 mr-4 text-white'/>
              </span>
              <span className='flex p-2 bg-indigo-800 rounded-lg'>
                <SearchIcon className='w-6  h-6 text-white'/>
              </span>
              <div>
                <SearchBox/>
              </div>
              <button className='flex items-center justify-center px-4 py-2 text-small font-medium text-indigo-600 bg-white b order border-transparent rounded-md shadow-sm hover:bg-indigo-50 active:bg-indigo--300'>Upload</button>
            </div>
          </div>
        </div>
    </div>
  )
}
