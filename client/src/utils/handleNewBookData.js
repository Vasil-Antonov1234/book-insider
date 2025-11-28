const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function handleNewBookData(book, value) {

    const date = dateHandler(book.firstPublished);

    if (!value) {

        if (book._createdOn) {
            return {
                ...book,
                firstPublished: date
            }
        }

        return {
            ...book,
            firstPublished: date,
            _createdOn: Date.now()
        }
    }

    return {
        ...book,
        firstPublished: date,
    }
}

function dateHandler(input) {

    if (input.length === 10) {
        const date = new Date(input);

        const month = date.getMonth();
        const day = date.getDate();
        const year = date.getFullYear();

        const convertedDate = `${months[month]} ${day}, ${year}`;

        return convertedDate;
    }

    const date = input.replace(",", "");
    let month = months.indexOf(date.split(" ")[0]) + 1;
    month = String(month);

    if (month.length === 1) {
        month = `0${month}`;
    };

    let day = date.split(" ")[1];

    if (day.length === 1) {
        day = `0${day}`;
    };

    const year = date.split(" ")[2];

    const convertedDate = `${year}-${month}-${day}`;

    return convertedDate;
}