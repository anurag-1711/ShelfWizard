import React from 'react'
import { Link } from 'react-router-dom';

const trendingSubjects = [
    {
        name: 'Arts',
        subSubjects: [
            'Paintings',
            'Architecture',
            'Music',
            'Dance',
            'Photography'
        ]
    },
    {
        name: 'Animals',
        subSubjects: [
            'Bears',
            'Cats',
            'Kittens',
            'Dogs',
            'Puppies'
        ]
    },
    {
        name: 'Science',
        subSubjects: [
            'Physics',
            'Chemistry',
            'Biology',
            'Mathematics',
            'Programming'
        ]
    },
    {
        name: 'Wellness',
        subSubjects: [
            'Mental Health',
            'Exercise',
            'Self-help',
            'Nutrition',
            'Cooking'
        ]
    },
    {
        name: 'History',
        subSubjects: [
            'Ancient Civilization',
            'Archaeology',
            'Anthropology',
            'World War II',
            'Social Life and Customs'
        ]
    },
    {
        name: 'Biography',
        subSubjects: [
            'Autobiographies',
            'History',
            'Composers',
            'Artists',
            'Kings and Rulers'
        ]
    }
]


const Home = () => {
    return (
        <div className="bg-white rounded-md p-5">
            <div className="flex flex-col items-center">
                <div className='flex items-center space-x-5 mb-3'>
                    <h1 className="text-5xl font-bold text-gray-900">
                        Shelf Wizard
                    </h1>
                    <p className="text-3xl text-gray-700">
                        The Key to Your Book Collection
                    </p>
                </div>
                <p className="text-2xl w-4/5 text-gray-600">
                    ShelfWizard is a powerful app that helps you to manage your book collection.
                    With ShelfWizard, you can add books to your collection, browse books by subject,
                    search for books by author name, and more. ShelfWizard is the perfect way
                    to keep track of your books and to find them more easily later.
                </p>


                <div className='flex flex-col items-center w-full'>
                    <h1 className='text-3xl my-4 font-medium'>Trending Subjects</h1>

                    <div className='flex w-full justify-around'>

                        {trendingSubjects.map((subject, index) => (
                            <div className='flex flex-col items-center' key={index}>
                                <h1 className='text-2xl text-gray-700 pb-1'>{subject.name}</h1>
                                <ul className='flex flex-col items-center'>
                                    {subject.subSubjects.map((subSubject, index) => (
                                        <Link to={`subjects/${subSubject}`} key={index}>
                                            <li className='py-1  text-gray-600'>{subSubject}</li>
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home