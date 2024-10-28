// NewsItem.tsx
import React from 'react';

interface NewsItemProps {
    newsItem: any;
}

const NewItem: React.FC<NewsItemProps> = ({ newsItem }) => {
    return (
        <div className="news-item">
            <img src={newsItem.image} alt={newsItem.title} />
            <h3>{newsItem.title}</h3>
            <p>{newsItem.content}</p>
            <p>Ngày đăng: {newsItem.date}</p>
        </div>
    );
};

export default NewItem;
