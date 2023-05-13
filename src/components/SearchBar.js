import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchItems, setSearchItems] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // API call for search sugestions
        // console.log("api call")


        const timer = setTimeout(() => {
            searchQuery && getSuggestions();
        }, 300);


        return () => {
            clearTimeout(timer);
        }
        // eslint-disable-next-line
    }, [searchQuery])

    const getSuggestions = async () => {
        console.log('API call for ---' + searchQuery);
        const url = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`;
        const data = await fetch(url);
        const json = await data.json();
        setSearchItems(json?.items);
        // console.log(searchItems);
    }

    const handleSearchClick = () => {
        navigate(`search/${searchQuery}`)
    }

    const handleSuggestionClick = (suggestion) => {
        navigate(`search/${suggestion}`);
    }

    return (
        <div className=' items-center'>
            <form
                className='mt-2 flex items-center'
                onSubmit={(e) => {
                    e.preventDefault();
                    setShowSuggestions(false);
                }}
            >

                <input
                    className='border w-96 rounded-l-full py-1 px-3 '
                    value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setShowSuggestions(true);
                    }}
                    onBlur={() => {
                        setShowSuggestions(false);
                    }}

                    placeholder='Search by book title, author name, more..'
                />
                <div>

                    <button
                        className='border py-1 px-3 rounded-r-full bg-gray-200'
                        onClick={() => {
                            handleSearchClick();
                            // console.log('Searching for:', searchQuery);
                        }}>Search
                    </button>
                </div>
            </form>

            {(searchItems && showSuggestions && searchQuery) &&
                <ul
                    className='fixed bg-white border rounded-xl w-96 p-2 cursor-default shadow-lg'
                >
                    {
                        searchItems.map((searchItem) => {
                            const suggestion = searchItem?.volumeInfo?.title;
                            return (
                                <li className='p-1 hover:bg-gray-200 shadow-sm'
                                    onMouseDown={() => {
                                        handleSuggestionClick(suggestion);
                                    }}
                                    key={searchItem.id}
                                >
                                    {suggestion}
                                </li>
                            )
                        })
                    }
                </ul>
            }
        </div>
    );
};

export default SearchBar;