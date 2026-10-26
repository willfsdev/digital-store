import './FilterGroup.css';

// 6.2 - Grupo de filtros (checkbox ou radio)
// "selected" e "onChange" são opcionais: permitem que a página controle o filtro.
const FilterGroup = ({ title, inputType = 'checkbox', options = [], selected = [], onChange }) => {
  const groupName = title?.toLowerCase().replace(/\s+/g, '-') ?? 'filtro';

  return (
    <fieldset className="filter-group">
      <legend className="filter-group__title">{title}</legend>

      {options.map((option, index) => {
        const value = option.value ?? option.text;
        const id = `${groupName}-${index}`;

        return (
          <label key={id} htmlFor={id} className="filter-group__option">
            <input
              id={id}
              type={inputType}
              name={groupName}
              value={value}
              checked={selected.includes(value)}
              onChange={(e) => onChange?.(value, e.target.checked)}
            />
            <span>{option.text}</span>
          </label>
        );
      })}
    </fieldset>
  );
};

export default FilterGroup;
