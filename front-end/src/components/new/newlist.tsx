// NewsList.tsx
import React from 'react';
import NewsItem from './newitem';

interface NewsListProps {
    news: any[];
}

const Newlist: React.FC<NewsListProps> = ({ news }) => {
    return (
        <div className="news-list">
            {news.map(item => (
                <NewsItem key={item.id} newsItem={item} />
            ))}
        </div>
    );
};

export default Newlist;
