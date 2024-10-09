import React from 'react'
import './style.scss'
import Input from '../../atoms/input';
import { SearchInput } from '../../atoms/input/index.stories';

export interface SearchProps {
    modifier?: "search-header" | "search-navbar";
}
const Search = ({modifier} : SearchProps) => {
  return (
    <div className={`m-search m-search--${modifier}`}>
        <Input {...SearchInput.args} />
    </div>
  )
}

export default Search