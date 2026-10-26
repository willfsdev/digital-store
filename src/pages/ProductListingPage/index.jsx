import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../Layout';
import Section from '../../components/Section';
import ProductListing from '../../components/ProductListing';
import FilterGroup from '../../components/FilterGroup';
import { products } from '../../data/products';
import './ProductListingPage.css';

const filterGroups = [
  {
    key: 'brand',
    title: 'Marca',
    inputType: 'checkbox',
    options: [
      { text: 'Adidas' },
      { text: 'Calvin Klein' },
      { text: 'K-Swiss' },
      { text: 'Nike' },
      { text: 'Puma' },
    ],
  },
  {
    key: 'gender',
    title: 'Gênero',
    inputType: 'checkbox',
    options: [{ text: 'Masculino' }, { text: 'Feminino' }, { text: 'Unissex' }],
  },
  {
    key: 'condition',
    title: 'Estado',
    inputType: 'radio',
    options: [{ text: 'Novo' }, { text: 'Usado' }],
  },
];

const emptyFilters = { brand: [], gender: [], condition: [] };

const getFinalPrice = (product) => product.priceDiscount ?? product.price;

// 6 - Página de listagem de produtos (rotas "/produtos" e "/products")
const ProductListingPage = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('filter') ?? '';

  const [order, setOrder] = useState('menor');
  const [filters, setFilters] = useState(emptyFilters);

  const handleFilterChange = (group, inputType) => (value, checked) => {
    setFilters((prev) => {
      if (inputType === 'radio') return { ...prev, [group]: [value] };
      const current = prev[group];
      return {
        ...prev,
        [group]: checked ? [...current, value] : current.filter((item) => item !== value),
      };
    });
  };

  const filteredProducts = useMemo(() => {
    const term = search.toLowerCase();

    const result = products.filter((product) => {
      const matchesSearch = !term || product.name.toLowerCase().includes(term);
      const matchesGroups = Object.entries(filters).every(
        ([key, values]) => values.length === 0 || values.includes(product[key])
      );
      return matchesSearch && matchesGroups;
    });

    return [...result].sort((a, b) =>
      order === 'menor'
        ? getFinalPrice(a) - getFinalPrice(b)
        : getFinalPrice(b) - getFinalPrice(a)
    );
  }, [search, filters, order]);

  const hasActiveFilters = Object.values(filters).some((values) => values.length > 0);

  const total = filteredProducts.length;
  const title = search
    ? `Resultados para "${search}" - ${total} ${total === 1 ? 'produto' : 'produtos'}`
    : `${total} ${total === 1 ? 'produto encontrado' : 'produtos encontrados'}`;

  return (
    <Layout>
      <div className="container listing-page">
        <aside className="listing-page__sidebar">
          {/* 6.1 - Ordenar por */}
          <label className="listing-page__order">
            <span>Ordenar por</span>
            <select value={order} onChange={(e) => setOrder(e.target.value)}>
              <option value="menor">Menor preço</option>
              <option value="maior">Maior preço</option>
            </select>
          </label>

          {/* 6.2 - Filtrar por */}
          <div className="listing-page__filters">
            <div className="listing-page__filters-header">
              <h2>Filtrar por</h2>
              {hasActiveFilters && (
                <button type="button" onClick={() => setFilters(emptyFilters)}>
                  Limpar
                </button>
              )}
            </div>
            <hr />

            {filterGroups.map((group) => (
              <FilterGroup
                key={group.key}
                title={group.title}
                inputType={group.inputType}
                options={group.options}
                selected={filters[group.key]}
                onChange={handleFilterChange(group.key, group.inputType)}
              />
            ))}
          </div>
        </aside>

        {/* 6.3 - Listagem de produtos */}
        <Section title={title} titleAlign="left" className="listing-page__results">
          <ProductListing products={filteredProducts} columns={3} />
        </Section>
      </div>
    </Layout>
  );
};

export default ProductListingPage;
