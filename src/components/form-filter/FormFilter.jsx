import { FormContainer } from './styles';

const FormFilter = ({ setSearch, setIsActive, setOrderBy }) => {
	return (
		<FormContainer>
			<div>
				<input
					type='text'
					value=''
					onChange={event => handleSearchChange(event, setSearch)}
				/>
			</div>
			<div>
				<label>Sólo activos</label>
				<input
					type='checkbox'
					onChange={event => handleFilterActive(event, setIsActive)}
				/>
			</div>
			<select onChange={event => handleOrderBy(event, setOrderBy)}>
				<option value='0'>Por Defecto</option>
				<option value='1'>Por Nombre</option>
			</select>
		</FormContainer>
	);
};

//* Función filtrar activos

const handleFilterActive = (event, setIsActive) => {
	setIsActive(event.target.checked);
	// console.log(event.target.checked)
};

//* Función ordenar por búsqueda

const handleSearchChange = (event, setSearch) => {
	setSearch(event.target.value);
	// console.log(event.target.value)
};

//* Función ordenar: según la opción del select ordeno los usuarios
const handleOrderBy = (event, setOrderBy) => {
	const selectedValue = event.target.value;
	setOrderBy(selectedValue);
	// console.log(selectedValue);
};

export default FormFilter;
