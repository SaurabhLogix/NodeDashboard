import { debounce } from 'lodash';
import React from 'react'

type AdministratorSearchbarProps = {
    searchFunction: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function AdministratorSearchbar({ searchFunction }: AdministratorSearchbarProps) {
    const handleInputChange = debounce((e) => {
        searchFunction(e);
    })

    return (
        <div className="search-box">
            <input
                type="text"
                className="form-control border-0"
                id="searchResultList"
                placeholder="Search for name or number..."
                autoComplete="off"
                onChange={(e) => handleInputChange(e)}
            />
            <i className="ri-search-line search-icon"></i>
        </div>
    )
}
