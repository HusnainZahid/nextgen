import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { fetchProductsStart } from './../../redux/Products/products.actions';
import Product from './Product';
import FormSelect from './../forms/FormSelect';
import LoadMore from './../LoadMore';
import './styles.scss';

const mapState = ({ productsData }) => ({
  products: productsData.products
});

const ProductResults = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { filterType } = useParams();
  const { products } = useSelector(mapState);

  const { data, queryDoc, isLastPage } = products;

  useEffect(() => {
    dispatch(
      fetchProductsStart({ filterType })
    )
  }, [filterType]);

  const handleFilter = (e) => {
    const nextFilter = e.target.value;
    history.push(`/search/${nextFilter}`);
  };

  if (!Array.isArray(data)) return null;
  // if (data.length < 1) {
  //   return (
  //     <div className="products">
  //       <p>
  //         No search results.
  //       </p>
  //     </div>
  //   );
  // }

  const configFilters = {
    defaultValue: filterType,
    options: [{
      name: 'Show all',
      value: ''
    }, {
      name: 'Womens',
      value: 'womens'
    }, {
      name: 'Kids',
      value: 'kids'
    },{
      name: 'Mens',
      value: 'mens'
    }],
    handleChange: handleFilter
  };

  const handleLoadMore = () => {
    dispatch(
      fetchProductsStart({
        filterType,
        startAfterDoc: queryDoc,
        persistProducts: data
      })
    )
  };

  const configLoadMore = {
    onLoadMoreEvt: handleLoadMore,
  };

  return (
    <div className="products">

    {!props?.hide ? (
      <h1>
        Browse Products
      </h1>
    ):null}
      {!props?.hide ? (
      <FormSelect {...configFilters} />
      ):null}

      {data.length < 1 ? (
      <div className="products">
        <p>
          No search results.
        </p>
      </div>
      ):null}
      <div className="productResults">
        {data.map((product, pos) => {
          const { productThumbnail, productName, productPrice } = product;
          if (!productThumbnail || !productName ||
            typeof productPrice === 'undefined') return null;

          const configProduct = {
            ...product
          };

          return (
            <Product key={pos} {...configProduct} />
          );
        })}
      </div>
      {!props?.hide ? (
      <>
      {!isLastPage && (
        <LoadMore {...configLoadMore} />
      )}
      </>
      ):null}

    </div>
  );
};

export default ProductResults;
