import { UserCard } from './UserCard';
import type { SingleUserLookupResponse } from 'twitter-types';
import { type ChangeEvent, useState, type MouseEvent } from 'react';

export function UserInput() {
  const [query, setQuery] = useState('');
  const [searchBy, setSearchBy] = useState<SearchByOption>('username');
  const [userInfo, setUserInfo] = useState<SingleUserLookupResponse>();

  const handleChangeQuery = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value);
  }

  const handleChangeSearchBy = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setQuery('');
    setSearchBy(value as SearchByOption);
  }

  const handleSearch = async (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    event.preventDefault();
    let url = 'https://twitter-lookup-api.ishibi.workers.dev';
    if (searchBy === 'username') {
      url += `/users/by/username/${query}`;
    } else if (searchBy === 'id') {
      // TODO: add regex for validating the id
      url += `/users/${query}`;
    }
    const res = await fetch(url, { method: 'GET' });
    const rawData = await res.json();
    // TODO: show a Not Found component if rawData.data is not present
    setUserInfo({ ...userInfo, ...rawData});
  }

  return (
      <div className='my-8'>
        <form>
          <div className='flex justify-center'>
            <select defaultValue={searchBy} name='search-by' id='search-by' onChange={(event) => handleChangeSearchBy(event)} className='border border-gray-900 border-r-0 px-3 py-2 rounded-md rounded-r-none shadow-md font-bold bg-slate-400 text-white focus:outline-none select-none hover:cursor-pointer appearance-none'>
              <option value='username'>@</option>
              <option value='id'>ID</option>
            </select>
            <input type='text' name='username' value={query} onChange={(event) => handleChangeQuery(event)} placeholder={searchBy} autoComplete='off' spellCheck='false' className='w-full border border-gray-900 border-l-0 px-2 py-2 rounded-md rounded-l-none shadow-sm focus:outline-none bg-gray-50' />
          </div>
          <div className='flex justify-center items-center mt-4 select-none'>
            <button onClick={(event) => handleSearch(event)} className='w-50 bg-indigo-700 py-2 px-4 border-transparent rounded-md shadow-md text-base text-white active:translate-y-1 transition ease-out duration-200'>Search</button>
          </div>
        </form>
        {userInfo?.data && <UserCard { ...userInfo } />}
      </div>
  );
}

export type SearchByOption = 'username' | 'id';