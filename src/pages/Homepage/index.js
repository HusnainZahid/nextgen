import React from 'react';
import Directory from './../../components/Directory';
import './styles.scss';
import ProductResults from '../../components/ProductResults';
import Footer from '../../components/Footer';

const Homepage = props => {
  return (
    <section className="homepage">
      <Directory />
      <h1>Latest Products</h1>
      <ProductResults hide={true} />
      <Footer/>
    </section>
  );
};

export default Homepage;