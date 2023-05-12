import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import SubjectBookCard from './SubjectBookCard';

const SubjectResults = () => {

    const params = useParams();
    let name = params.name.toLowerCase();
    const [books, setBooks] = useState([]);
    const [offset, setOffset] = useState(0);
    console.log(offset)

    useEffect(() => {
        // API call
        getData();
        // eslint-disable-next-line
    }, [name, offset])



    const getData = async () => {
        const url = `https://openlibrary.org/subjects/${name}.json?limit=10&offset=${offset}`
        // console.log(url);
        const response = await fetch(url);
        const json = await response.json();
        setBooks(json?.works);
        // console.log(books);
    }

    return (
        <div className='mx-5 flex flex-col'>
            <h1 className='text-4xl font-medium my-1 px-2'>Top 10 books on {name}</h1>
            <div className='flex flex-col'>
                {
                    books.map((book) => {
                        return (
                            <Link to={`https://openlibrary.org${book.key}`} key={book.key}>
                                <SubjectBookCard {...book} />
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

export default SubjectResults