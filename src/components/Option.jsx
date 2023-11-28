
import CreatableSelect from 'react-select/creatable';
const Option = ({title, data,selectedData, selectFunction}) => {
  
  function handleSelect(option) {
    selectFunction(option);
  }
  
   
  return (
    <div>
      <h2 className="m-1 text-md lg:text-xl font-medium">{title}</h2>
      <div className="dropdown-container">
      <CreatableSelect
          options={data}
          placeholder= {`Select ${title}`}
          value={selectedData}
          onChange={handleSelect}
          isSearchable={true}
          isMulti
        />
      </div>
    </div>
  );
};

export default Option;
