import React from 'react'

const SubjectBookCard = ({ authors, title, first_publish_year }) => {
    const author = authors[0]?.name;
    // console.log(author);
    return (
        <div className='px-2 py-2  font-serif text-xl hover:bg-gray-200 rounded-lg'>
            {title} by {author} published in {first_publish_year}
        </div>
    )
}

export default SubjectBookCard