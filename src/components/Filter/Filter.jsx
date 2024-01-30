import PropTypes from 'prop-types';
import { FilterContainer, FilterLabel, FilterInput } from './FilterStyles';

const Filter = ({ handleFilterChange }) => {
  const filterContactsByName = e => {
    handleFilterChange(e.target.value);
  };

  return (
    <FilterContainer>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <FilterInput id="filter" onChange={filterContactsByName} type="filter" />
    </FilterContainer>
  );
};

Filter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default Filter;
