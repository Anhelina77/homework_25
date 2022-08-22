export default function TodoFilter(props) {
  const { activeFilter, filters, updateFilter } = props;

  return (
    <ul className="filters">
      {filters.map((item, index) => (
        <li key={index}>
          <a
            href={`#${item.name}`}
            onClick={updateFilter(item)}
            className={activeFilter.name === item.name ? 'selected' : ''}
          >
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
}
