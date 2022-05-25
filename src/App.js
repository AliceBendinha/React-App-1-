import { useState } from 'react';
import "./App.css";


function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div className='Tabela'>
      <SearchBar 
        filterText={filterText} 
        inStockOnly={inStockOnly} 
        onFilterTextChange={setFilterText} 
        onInStockOnlyChange={setInStockOnly} />
      <ProductTable 
        products={products} 
        filterText={filterText}
        inStockOnly={inStockOnly} />
    </div>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'rgb(253, 4, 4)' }}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}



function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange
}) {
  return (
    <form>
      <input 
        type="text" 
        value={filterText} placeholder="Pesquisar..." 
        onChange={(e) => onFilterTextChange(e.target.value)} />
      <label>
        <input 
          type="checkbox" 
          checked={inStockOnly} 
          onChange={(e) => onInStockOnlyChange(e.target.checked)} />
        {' '}
        Apenas produtos disponíveis
      </label>
    </form>
  );
}

const PRODUCTS = [
  {category: "Doces e Salgados", price: "50,00kz", stocked: true, name: "Bola de berlim"},
  {category: "Doces e Salgados", price: "50,00kz", stocked: false, name: "ckeque"},
  {category: "Doces e Salgados", price: "200,00kz", stocked: true, name: "Bolo de Chocolate (Fatia)"},
  {category: "Doces e Salgados", price: "100,00kz", stocked: false, name: "Ressol"}, 
  {category: "Doces e Salgados", price: "75,00kz", stocked: true, name: "Pastel"},
  {category: "Sumos Naturais", price: "150,00kz", stocked: true, name: "Sumo de gajaja"},
  {category: "Sumos Naturais", price: "200,00kz", stocked: true, name: "Sumo de múcua com beterraba"},
  {category: "Sumos Naturais", price: "350,00kz", stocked: false, name: "Sumo rosa"},
  {category: "Sumos Naturais", price: "500,00kz", stocked: true, name: "Sumo tuti (manga, laranja, cenoura e ortelã)"},
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
