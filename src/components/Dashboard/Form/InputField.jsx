import PropTypes from "prop-types";

const InputField = ({ name, type, label, required, options, handleChange, placeholder, defaultValue, pattern, errorMessage }) => {

    if (type === "select") {
        return (
            <div className="select-container">
                <label htmlFor={name}>{label}</label>
                <select className="select-field peer" defaultValue={defaultValue} name={name} onChange={handleChange} required={required} id={name}>
                    {options.map(option => (
                        <option
                            key={option.value}
                            value={option.value}
                            disabled={option.disabled}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <span className="error">{errorMessage}</span>
            </div>
        );
    }

    else {
        return (
            <div className="input-container">
                <label htmlFor={name}>{label}</label>
                <input
                    className="input-field peer"
                    id={name}
                    placeholder={placeholder}
                    type={type}
                    name={name}
                    required={required}
                    onChange={handleChange}
                    pattern={pattern}
                />
                <span className="error">{errorMessage}</span>

            </div>

        );
    }
};

InputField.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    required: PropTypes.bool,
    options: PropTypes.array,
    handleChange: PropTypes.func,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string,
    pattern: PropTypes.string,
    errorMessage: PropTypes.string
};

export default InputField;