import { useState } from "react";
import { data, formInputConfig, InputField } from "components/Dashboard/Form";

const KycForm = () => {
    const [ formData, setFormData ] = useState(data);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData, [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="form min-h-47rem">
            {formInputConfig.sections.map(section => (
                <div className="mb-20" key={section.id}>

                <div className="flex items-center gap-2 mb-4">
                   <div className="w-2 h-9 bg-primary"></div>
                    <p className="section-heading">{section.heading}</p>
                </div>


                    <div className="grid grid-cols-3 items-start gap-x-20 gap-y-6">
                        {section.fields.map(field => {
                            const { id, name, type, label, required, options, placeholder, defaultValue, pattern, errorMessage } = field;

                            return (
                                <InputField
                                    key={id}
                                    handleChange={handleChange}
                                    placeholder={placeholder}
                                    name={name}
                                    type={type}
                                    label={label}
                                    required={required}
                                    options={options}
                                    defaultValue={defaultValue}
                                    pattern={pattern}
                                    errorMessage={errorMessage}
                                />
                            );
                        }
                        )}
                    </div>
                </div>
            ))}
            <button type="submit" className="bg-primary p-4 text-white font-bold rounded-md hover:bg-secondary transition ease-in w-full">Submit Details for KYC Verification</button>
        </form>
    );
};

export default KycForm;