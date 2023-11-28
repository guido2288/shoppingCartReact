import { useId } from "react";
import { useState } from "react"
import "./Filters.css"

export default function Filters({ onChange }) {

  const [minPrice, SetMinPrice] = useState(0);
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChange = (event) => {
    SetMinPrice(event.target.value);
    onChange(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  };

  const handleChangeCategory = (event) => {
    onChange(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Price</label>
        <input
          type="range"
          min="0"
          max="3000"
          id={minPriceFilterId}
          onChange={handleChange}
        />
        <span>{minPrice}</span>
      </div>


      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="home-decoration">Decoración de hogar</option>
          <option value="laptops">Laptos</option>
          <option value="smartphones">Smartphones</option>
          <option value="fragrances">Fragancias</option>
          <option value="skincare">Cuidado de la piel</option>
          <option value="groceries">Productos almacen</option>
        </select>
      </div>
    </section>
  )
}
