import React from 'react';
import Select from 'react-select';

const conf = {
  isClearable: false,
  isDisabled: false,
  isLoading: false,
  isRtl: false,
  isSearchable: false,
};
const OptionSelector = ({options, count}) => {
	if (options.length > 0) {
		let countArr = []
		for (let i = 1; i <= count; i++) {
			countArr.push(i);
		}
		return countArr.map( num => {
			return (
				<Select key={num}
						className="basic-single"
						classNamePrefix="select"
						defaultValue={{value: "Size", label: 'Size'}}
						isClearable={conf.isClearable}
						isDisabled={conf.isDisabled}
						isLoading={conf.isLoading}
						isRtl={conf.isRtl}
						isSearchable={conf.isSearchable}
						options={options}
						/>
			)			
		})
	}
}

export default OptionSelector;

