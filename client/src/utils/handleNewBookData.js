const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


export default function handleNewBookData(book) {
    const date = new Date(book.firstPublished);

    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();

    const convertedDate = `${months[month]} ${day}, ${year}`;

    book = {
        ...book,
        firstPublished: convertedDate,
        _createdOn: Date.now()
    }

    return book;
}