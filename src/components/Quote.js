import React, { useState, useEffect } from "react";

const Quote = () => {
    const [quote, setQuote] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchQuote = async () => {
            setIsLoading(true);

            try {
                const response = await fetch(
                    "https://api.api-ninjas.com/v1/quotes?category=happiness",
                    {
                        headers: {
                            "X-Api-Key": "arjAxhHIzmx1T4/2+TN60A==qHFdGV86rvZbZX1a",
                        },
                    }
                );
                const data = await response.json();
                setQuote(data[0]);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                setError(error);
            }
        };

        fetchQuote();
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Sorry, there was an error fetching the quote.</p>;
    }

    return (
        <div>
            <h2>{quote.author}</h2>
            <p>{quote.quote}</p>
        </div>
    );
};

export default Quote;
