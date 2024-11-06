import React from 'react';

interface Review {
  customerName: string;
  reviewText: string;
  rating: number;
}

interface CustomerReviewProps {
  reviews: Review[];
}

const CustomerReview: React.FC<CustomerReviewProps> = ({ reviews }) => {
  return (
    <div className="customer-review">
      <h2>Đánh Giá Khách Hàng</h2>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className="review-item">
            <h3>{review.customerName}</h3>
            <p>{review.reviewText}</p>
            <p>Rating: {review.rating}/5</p>
          </div>
        ))
      ) : (
        <p>Chưa có đánh giá nào.</p>
      )}
    </div>
  );
};

export default CustomerReview;
