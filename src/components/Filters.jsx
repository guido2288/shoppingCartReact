import { useId } from "react";
import { useFilters } from "../hooks/useFilters";
import "./Filters.css"

export default function Filters() {

  const { setFilters, filters } = useFilters();

  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChange = (event) => {

    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  };

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
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
          max="1700"
          id={minPriceFilterId}
          onChange={handleChange}
          value={filters.minPrice}
        />
        <span>{filters.minPrice}</span>
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
