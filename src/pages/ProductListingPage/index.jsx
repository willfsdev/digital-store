import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../Layout';
import Section from '../../components/Section';
import ProductListing from '../../components/ProductListing';
import FilterGroup from '../../components/FilterGroup';
import { products } from '../../data/products';
import './ProductListingPage.css';

// Grupos de filtro do Figma
const filterGroups = [
  {
    key: 'brand',
    title: 'Marca',
    inputType: 'checkbox',
    options: [
      { text: 'Adidas' },
      { text: 'Balenciaga' },
      { text: 'K-Swiss' },
      { text: 'Nike' },
      { text: 'Puma' },
    ],
  },
  {
    key: 'style',
    title: 'Categoria',
    inputType: 'checkbox',
    options: [
      { text: 'Esporte e lazer' },
      { text: 'Casual' },
      { text: 'Utilitário' },
      { text: 'Corrida' },
    ],
  },
  {
    key: 'gender',
    title: 'Gênero',
    inputType: 'checkbox',
    options: [{ text: 'Masculino' }, { text: 'Feminino' }, { text: 'Unisex' }],
  },
  {
    key: 'condition',
    title: 'Estado',
    inputType: 'radio',
    options: [{ text: 'Novo' }, { text: 'Usado' }],
  },
];

const emptyFilters = { brand: [], style: [], gender: [], condition: [] };

const getFinalPrice = (product) => product.priceDiscount ?? product.price;

// 6 - Página de listagem de produtos (rotas "/produtos" e "/products")
const ProductListingPage = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('filter') ?? '';

  const [order, setOrder] = useState('relevantes');
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
      const matchesSearch =
        !term ||
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term);
      const matchesGroups = Object.entries(filters).every(
        ([key, values]) => values.length === 0 || values.includes(product[key])
      );
      return matchesSearch && matchesGroups;
    });

    if (order === 'menor') return [...result].sort((a, b) => getFinalPrice(a) - getFinalPrice(b));
    if (order === 'maior') return [...result].sort((a, b) => getFinalPrice(b) - getFinalPrice(a));
    return result;
  }, [search, filters, order]);

  const hasActiveFilters = Object.values(filters).some((values) => values.length > 0);
  const total = filteredProducts.length;
  const totalText = `${total} ${total === 1 ? 'produto' : 'produtos'}`;

  return (
    <Layout>
      <div className="container listing-page">
        {/* Topo: total de resultados + 6.1 Ordenar por */}
        <div className="listing-page__top">
          <p className="listing-page__results-text">
            {search ? (
              <>
                <strong>Resultados para “{search}”</strong> - {totalText}
              </>
            ) : (
              <>
                <strong>Todos os produtos</strong> - {totalText}
              </>
            )}
          </p>

          <label className="listing-page__order">
            <span className="listing-page__order-label">
              <strong>Ordenar por:</strong>
            </span>
            <select value={order} onChange={(e) => setOrder(e.target.value)}>
              <option value="relevantes">mais relevantes</option>
              <option value="menor">menor preço</option>
              <option value="maior">maior preço</option>
            </select>
          </label>
        </div>

        <div className="listing-page__body">
          {/* 6.2 - Filtrar por */}
          <aside className="listing-page__filters">
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
          </aside>

          {/* 6.3 - Listagem de produtos (o título mostra o total encontrado) */}
          <Section title={totalText} titleAlign="left" className="listing-page__results">
            <ProductListing products={filteredProducts} columns={3} columnGap={14} />
          </Section>
        </div>
      </div>
    </Layout>
  );
};

export default ProductListingPage;
