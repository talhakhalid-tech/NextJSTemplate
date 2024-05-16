'use client';
import { useAppContext } from '@/context/AppContext';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BarChart from '../../components/BarChart';
import Dropdown from '@/components/Dropdown';
import DataTable from '@/components/DataTable';
import SearchBar from '@/components/Searchbar';
import Checkbox from '@/components/Checkbox';

/**
 * HomeContent component displays the content of the home page.
 * @returns {JSX.Element} The HomeContent component.
 */
const HomeContent = () => {
  const { state, dispatch } = useAppContext();
  const [productTypes, setProductTypes] = useState<
    { label: string; value: string }[]
  >([]);
  const [selectedProductType, setSelectedProductType] = useState<string>('');
  const [chartsData, setChartsData] = useState<any>();
  const [dataTableFilters, setDataTableFilters] = useState({
    category: 'all',
    fuzzySearch: '',
    prizeRange: 'all',
    above45Rating: false
  });

  // Fetches product data from the server.
  const fetchData = async () => {
    try {
      const res = await axios.get('https://dummyjson.com/products?limit=100');
      if (res.data.products) {
        dispatch({
          type: 'SET_PRODUCTS',
          payload: res.data.products
        });
      }
    } catch {}
  };

  useEffect(() => {
    if (!state.products.length) {
      fetchData();
    }
  }, []);

  useEffect(() => {
    if (state.products.length && !productTypes.length) {
      const filteredProductTypes = state.products.reduce(
        (prevProductTypes, currentProduct) => {
          if (
            !prevProductTypes.find(
              (productType) => productType.value === currentProduct.category
            )
          ) {
            prevProductTypes.push({
              label: currentProduct.category,
              value: currentProduct.category
            });
          }
          return prevProductTypes;
        },
        productTypes
      );
      setProductTypes(filteredProductTypes);
      setSelectedProductType(filteredProductTypes[0].value);
    }
  }, [state.products.length]);

  // Populates chart data based on selected product type.
  const populateChartData = () => {
    const filteredProducts = state.products.filter(
      (product) => product.category === selectedProductType
    );
    const labels: string[] = [];
    const stocks: number[] = [];
    filteredProducts.forEach((product) => {
      labels.push(product.title);
      stocks.push(product.stock);
    });
    const colors = [];

    for (let i = 0; i < stocks.length; i++) {
      if (stocks[i] <= 30) {
        colors.push('rgba(255, 99, 132, 0.2)');
      } else if (stocks[i] <= 50) {
        colors.push('rgba(205, 132, 132, 0.2)');
      } else if (stocks[i] <= 70) {
        colors.push('rgba(132, 155, 155, 0.2)');
      } else {
        colors.push('rgba(75, 192, 192, 0.2)');
      }
    }

    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Stock Count',
          data: stocks,
          backgroundColor: colors,
          borderColor: colors.map((color) => color.replace('0.2', '1')), // Darken the border color
          borderWidth: 1
        }
      ]
    };

    return data;
  };

  useEffect(() => {
    setChartsData(populateChartData());
  }, [selectedProductType]);

  /**
   * Handles changes in data table filters.
   * @param {string} filter - The filter key.
   * @param {string} value - The filter value.
   */
  const dataFilterChangeHandler = (filter: string, value: string) => {
    setDataTableFilters((prevFilters) => ({ ...prevFilters, [filter]: value }));
  };

  /**
   * Gets filtered rows based on data table filters.
   * @returns {Object[]} The filtered rows.
   */
  const getFilteredRows = () => {
    let filteredRows = state.products;
    if (dataTableFilters.category !== 'all') {
      filteredRows = filteredRows.filter(
        (row) => row.category === dataTableFilters.category
      );
    }
    if (dataTableFilters.fuzzySearch.trim()) {
      filteredRows = filteredRows.filter(
        (row) =>
          row.id
            .toString()
            .toLowerCase()
            .includes(dataTableFilters.fuzzySearch.toLowerCase()) ||
          row.title
            .toLowerCase()
            .includes(dataTableFilters.fuzzySearch.toLowerCase()) ||
          row.price
            .toString()
            .toLowerCase()
            .includes(dataTableFilters.fuzzySearch.toLowerCase()) ||
          row.discountPercentage
            .toString()
            .toLowerCase()
            .includes(dataTableFilters.fuzzySearch.toLowerCase()) ||
          row.rating
            .toString()
            .toLowerCase()
            .includes(dataTableFilters.fuzzySearch.toLowerCase()) ||
          row.stock
            .toString()
            .toLowerCase()
            .includes(dataTableFilters.fuzzySearch.toLowerCase()) ||
          row.brand
            .toLowerCase()
            .includes(dataTableFilters.fuzzySearch.toLowerCase()) ||
          row.category
            .toLowerCase()
            .includes(dataTableFilters.fuzzySearch.toLowerCase())
      );
    }
    if (dataTableFilters.prizeRange !== 'all') {
      filteredRows = filteredRows.filter((row) => {
        const [lowerRange, higherRange] =
          dataTableFilters.prizeRange.split('-');
        if (
          row.price >= parseFloat(lowerRange) &&
          row.price <=
            (higherRange ? parseFloat(higherRange) : Number.POSITIVE_INFINITY)
        ) {
          return true;
        }
        return false;
      });
    }
    if (dataTableFilters.above45Rating) {
      filteredRows = filteredRows.filter((row) => row.rating >= 4.5);
    }
    return filteredRows.map(
      ({
        id,
        title,
        price,
        discountPercentage,
        rating,
        stock,
        brand,
        category
      }) => ({
        id,
        title,
        price,
        discountPercentage,
        rating,
        stock,
        brand,
        category
      })
    );
  };

  return (
    <div>
      <div className="p-2 border rounded border-gray-700 mb-2">
        Chart Filters
        <div className="p-2 flex items-center">
          <Dropdown
            label="Product Category"
            options={productTypes}
            selectedOption={selectedProductType}
            setSelectedOption={setSelectedProductType}
          />
        </div>
      </div>
      <BarChart data={chartsData} width="100%" />
      <div className="p-2 border rounded border-gray-700 mt-4 mb-2">
        Data Table Filters
        <div className="p-2 gap-y-8 flex flex-col lg:flex-row lg:gap-x-4 lg:items-center">
          <Dropdown
            label="Product Category"
            options={[
              { label: 'All Categories', value: 'all' },
              ...productTypes
            ]}
            selectedOption={dataTableFilters.category}
            setSelectedOption={(value: string) =>
              dataFilterChangeHandler('category', value)
            }
          />
          <Dropdown
            label="Prize Ranges"
            options={[
              { label: 'All Ranges', value: 'all' },
              { label: '1 - 100', value: '1-100' },
              { label: '101 - 250', value: '101-250' },
              { label: '251 - 500', value: '251-500' },
              { label: '501 - 1000', value: '501-1000' },
              { label: '1001+', value: '1001' }
            ]}
            selectedOption={dataTableFilters.prizeRange}
            setSelectedOption={(value: string) =>
              dataFilterChangeHandler('prizeRange', value)
            }
          />
          <Checkbox
            label="4.5+ Rating"
            checked={dataTableFilters.above45Rating}
            changeHandler={(e: any) => {
              dataFilterChangeHandler('above45Rating', e.target.checked);
            }}
          />
          <SearchBar
            placeholder="Fuzzy Search..."
            value={dataTableFilters.fuzzySearch}
            changeHandler={(e: any) =>
              dataFilterChangeHandler('fuzzySearch', e.target.value)
            }
          />
        </div>
      </div>
      <DataTable
        columns={[
          'Id',
          'Title',
          'Price',
          'Discount %',
          'Rating',
          'Stock',
          'Brand',
          'Category'
        ]}
        rows={getFilteredRows()}
      />
    </div>
  );
};

export default HomeContent;
