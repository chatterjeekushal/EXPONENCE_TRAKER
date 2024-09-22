import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Newsitem from './Newsitem';

function News(props) {
    const category = props.category;
    const [articles, setArticles] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchNews = async (currentPage) => {
        const url = `https://newsapi.org/v2/top-headlines?country=US&category=${category}&apiKey=79fa8042b53c45e48845c3fa6ce419a6`;
        try {
            const response = await fetch(`${url}&page=${currentPage}`);
            const parsedData = await response.json();
            
            if (response.ok) {
                return parsedData;
            } else {
                setError(parsedData.message);
                return null;
            }
        } catch (error) {
            setError('Failed to fetch news.');
            console.error('Fetch error:', error);
            return null;
        }
    };

    const loadNews = async (currentPage) => {
        setLoading(true);
        const parsedData = await fetchNews(currentPage);
        if (parsedData) {
            setArticles((prevArticles) => [...prevArticles, ...parsedData.articles]);
            setTotalResults(parsedData.totalResults);
        }
        setLoading(false);
    };

    useEffect(() => {
        loadNews(page);
    }, [page]);

    const fetchData = () => {
        if (articles.length < totalResults) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    return (
        <div>
    {error && <div className="alert alert-danger">{error}</div>}
    <InfiniteScroll
        dataLength={articles.length}
        next={fetchData}
        hasMore={articles.length < totalResults}
        loader={loading ? <h4 className="text-center">Loading...</h4> : null}
        endMessage={
            <p className="text-center font-bold">
                <b>Yay! You have seen it all</b>
            </p>
        }
    >
        <div className="container my-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {articles.map((element) => (
                    <div className="col" key={element.url}>
                        <Newsitem
                            sourceName={element.source.name}
                            title={element.title}
                            desc={element.description}
                            imageURL={element.urlToImage || 'defaultImageUrl.jpg'} // Replace with your default image
                            newsUrl={element.url}
                            catagoty={element.category}
                        />
                    </div>
                ))}
            </div>
        </div>
    </InfiniteScroll>
</div>

    );
}

export default News;
