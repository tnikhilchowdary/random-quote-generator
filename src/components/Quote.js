import React, { useEffect, useState } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch("https://api.allorigins.win/raw?url=https://zenquotes.io/api/random");
        const data = await response.json();
        setQuote(data[0].q);
        setAuthor(data[0].a);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching quote:", error);
        setQuote("Could not load quote.");
        setAuthor("System");
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Inspirational Quote</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <blockquote>
          “{quote}”<br />
          <strong>— {author}</strong>
        </blockquote>
      )}
    </div>
  );
};

export default Quote;
