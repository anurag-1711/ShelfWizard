import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

const SearchResults = () => {
    const { text } = useParams();
    // console.log(text);

    const [books, setBooks] = useState([]);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        // API call
        getData();
        // eslint-disable-next-line
    }, [text, offset])

    const getData = async () => {
        const url = `https://openlibrary.org/search.json?q=${text}&limit=10&offset=${offset}`;
        console.log(url);
        const data = await fetch(url);
        const json = await data.json();

        setBooks(json?.docs);
        console.log(books);
    }

    return (
        <div className='flex flex-col mx-4'>
            <h1 className='text-4xl font-medium my-1 px-2'>
                Search Results for {text}
            </h1>
            <div className='flex flex-col'>
                {
                    books.map((book) => {
                        const title = book.title;
                        const author = book.author_name[0];
                        const first_publish_year = book.first_publish_year;
                        const key = book.key;
                        return (
                            <Link to={`https://openlibrary.org${book.key}`} key={key}>
                                <li
                                    className='px-2 py-2 font-serif text-xl hover:bg-gray-200 rounded-lg '>
                                    {title} by {author} published in {first_publish_year}
                                </li>
                            </Link>
                        )
                    })
                }
            </div>
            <div className='flex items-center space-x-5'>
                <button
                    className='bg-gray-300 p-2 rounded-lg hover:bg-green-400 text-left my-1 px-2'
                    onClick={() => {
                        setOffset(offset - 10);
                    }}
                >
                    Previous Page
                </button>

                <button
                    className='bg-gray-300 p-2 rounded-lg hover:bg-green-400 text-left my-1 px-2'
                    onClick={() => {
                        setOffset(offset + 10);
                    }}
                >
                    Next Page
                </button>
            </div>
        </div>
    )
}

export default SearchResults