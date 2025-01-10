import React,{useState} from 'react';
const SearchSpeaker = () => {
    const [searchText, setSearchText] = useState('Mithlesh');
    console.log(React.version);


    return (
        <div>
            <label htmlFor="Search">Search Speaker : </label>
            <input id="search" type="text" onChange={e=>setSearchText(e.target.value)}/>
            <p>
                Searching for - <strong>{searchText}
                    </strong>
            </p>
        </div>
    );
}

export default SearchSpeaker;