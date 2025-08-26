export const getAllQuotes = async (req, res) => {
    let quotes = [
        { id: 1, author: "Albert Einstein", text: "Life is like riding a bicycle." },
        { id: 2, author: "Oscar Wilde", text: "Be yourself; everyone else is already taken." }
    ];

    res.json(quotes);
};