import React from 'react';
import { Link } from 'react-router-dom';
import ShopMen from './../../assets/shopMens.jpg';
import Family from './../../assets/family.png';
import ShopWomen from './../../assets/shopWomens.jpg';
import './styles.scss';

const Directory = props => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item">
            <div>
            <h1>Shop Beyond Boundaries, Shop NextGen!</h1>
            <p>Discover Innovation, Embrace Style, and Shop with Confidence. Explore our Curated Selection of Tech, Fashion, and Lifestyle Essentials.</p>
            </div>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${Family})`
          }}>
        </div>
      </div>
      <div className="categoryWrap">
        <div
          className="categoryitem"
          style={{
            backgroundImage: `url(${ShopWomen})`
          }}
        >
          <Link to="/search/womens">
            Womens
          </Link>
        </div>
        <div
          className="categoryitem"
          style={{
            backgroundImage: `url(${'https://i2.wp.com/pna.co.za/blog/wp-content/uploads/2017/11/last-minute-shopping-tips-cover.jpg'})`
          }}
        >
          <Link to="/search/kids">
            Kids
          </Link>
        </div>
        <div
          className="categoryitem"
          style={{
            backgroundImage: `url(${'https://menshaircuts.com/wp-content/uploads/2019/06/business-casual-men-outfit-grey-big-cell.jpg'})`
          }}
        >
          <Link to="/search/mens">
            Mens
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Directory;
