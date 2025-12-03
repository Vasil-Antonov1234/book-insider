const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export default function handleNewBookData(book) {

    const date = dateHandler(book.firstPublished);

    return {
        ...book,
        firstPublished: date,
    }
}

export function dateHandler(input, option = null) {

    if (option || input.length === 10) {
        const date = new Date(input);

        const localDate = date.toLocaleString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric"
        });

        return localDate
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