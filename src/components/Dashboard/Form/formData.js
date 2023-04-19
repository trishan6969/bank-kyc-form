const formInputConfig = {
    sections: [
        {
            id: 1,
            heading: "Personal Details",
            fields: [
                {
                    id: 11,
                    name: "fullName",
                    type: "text",
                    label: "Full Name",
                    required: true,
                    placeholder: "Enter your full name",
                    pattern: "^[a-zA-Z0-9]{3,10}$",
                    errorMessage: "Must be 3-10 characters and can't include any special characters"
                },
                {
                    id: 12,
                    name: "gender",
                    type: "select",
                    label: "Gender",
                    defaultValue: "",
                    options: [
                        {
                            value: "", label: "Select a gender", disabled: true
                        },
                        {
                            value: "male", label: "Male"
                        },
                        {
                            value: "female", label: "Female"
                        },
                        {
                            value: "others", label: "Others"
                        },
                    ],
                    required: true,
                    errorMessage: "You must select your gender"
                },
                {
                    id: 13,
                    name: "dob",
                    type: "date",
                    label: "DOB",
                    required: true,
                    errorMessage: "Date of Birth must be selected"
                },
                {
                    id: 14,
                    name: "fatherName",
                    type: "text",
                    label: "Father Name",
                    required: true,
                    placeholder: "Enter your father's name",
                    errorMessage: "Father's name is required"
                },
                {
                    id: 15,
                    name: "grandFatherName",
                    type: "text",
                    label: "Grand Father Name (optional)",
                    placeholder: "Enter your grand father's name"
                },
                {
                    id: 16,
                    name: "maritalStatus",
                    type: "select",
                    label: "Marital Status (optional)",
                    defaultValue: "",
                    options: [
                        {
                            value: "", label: "Select a status", disabled: true
                        },
                        {
                            value: "single", label: "Single"
                        },
                        {
                            value: "married", label: "Married"
                        },
                    ],
                },
                {
                    id: 17,
                    name: "occupation-field",
                    type: "select",
                    label: "Occupation Field",
                    defaultValue: "",
                    options: [
                        {
                            value: "", label: "Select Occupation", disabled: true
                        },
                        {
                            value: "student", label: "Student"
                        },
                        {
                            value: "business", label: "Business"
                        },
                        {
                            value: "tourism", label: "Tourism"
                        },
                        {
                            value: "agriculture", label: "Agriculture"
                        },
                        {
                            value: "trade", label: "Trade"
                        },
                        {
                            value: "tech", label: "Tech"
                        },
                        {
                            value: "medical", label: "Medical"
                        },
                        {
                            value: "education", label: "Education"
                        },
                        {
                            value: "self", label: "Self Employed"
                        },
                    ],
                    required: true,
                    errorMessage: "Occupation Field must be selected"
                },
                {
                    id: 18,
                    name: "emailAddress",
                    type: "email",
                    label: "Email Address",
                    required: true,
                    placeholder: "Enter your email address",
                    errorMessage: "Email Address must be valid"
                },
                {
                    id: 19,
                    name: "contactNumber",
                    type: "number",
                    label: "Contact Number",
                    required: true,
                    placeholder: "Enter your contact number",
                    errorMessage: "Phone number must be valid",
                    pattern: "^[0-9]+$"
                },
            ],
        },

        {
            id: 2,
            heading: "Address Details",
            fields: [
                {
                    id: 21,
                    name: "state",
                    type: "select",
                    label: "State",
                    defaultValue: "",
                    options: [
                        {
                            value: "", label: "Select State", disabled: true
                        },
                        {
                            value: "koshi", label: "Koshi"
                        },
                        {
                            value: "madhesh", label: "Madhesh"
                        },
                        {
                            value: "bagmati", label: "Bagmati"
                        },
                        {
                            value: "gandaki", label: "Gandaki"
                        },
                        {
                            value: "lumbini", label: "Lumbini"
                        },
                        {
                            value: "karnali", label: "Karnali"
                        },
                        {
                            value: "sudurpashchim", label: "Sudurpashchim"
                        },
                    ],
                    required: true,
                    errorMessage: "State is a required field"
                },
                {
                    id: 22,
                    name: "district",
                    type: "text",
                    label: "District",
                    required: true,
                    placeholder: "Enter your district name",
                    errorMessage: "District is a required field"

                },
                {
                    id: 23,
                    name: "municipality",
                    type: "text",
                    label: "Municipality",
                    required: true,
                    placeholder: "Enter your municipality name",
                    errorMessage: "Municipality is a required field"
                },
                {
                    id: 24,
                    name: "wardNumber",
                    type: "number",
                    label: "Ward No",
                    required: true,
                    placeholder: "Enter your Ward Number",
                    errorMessage: "Ward Number must be valid",
                    pattern: "^[0-9]+$"
                },
                {
                    id: 25,
                    name: "toleName",
                    type: "text",
                    label: "Tole Name (optional)",
                    placeholder: "Enter your tole name"
                },
            ],
        },

        {
            id: 3,
            heading: "Document Details",
            fields: [
                {
                    id: 31,
                    name: "documentType",
                    type: "select",
                    label: "Document Type",
                    defaultValue: "",
                    options: [
                        {
                            value: "", label: "Select a document type", disabled: true
                        },
                        {
                            value: "citizenship", label: "Citizenship"
                        },
                        {
                            value: "license", label: "License"
                        },
                        {
                            value: "passport", label: "Passport"
                        },
                    ],
                    required: true,
                    errorMessage: "You must select your document type"
                },
                {
                    id: 32,
                    name: "citizenshipNumber",
                    type: "number",
                    label: "Citizenship No",
                    required: true,
                    placeholder: "Enter your citizenship number",
                    pattern: "^[0-9]+$",
                    errorMessage: "Citizenship Number must be valid"
                },
                {
                    id: 33,
                    name: "issuedDistrict",
                    type: "text",
                    label: "Issued District",
                    required: true,
                    placeholder: "Enter your citizenship issued district",
                    errorMessage: "Issued District is a required field"
                },
                {
                    id: 34,
                    name: "dateOfIssue",
                    type: "date",
                    label: "Date of Issue",
                    required: true,
                    errorMessage: "Date of Issue must be selected"
                },
            ]
        }
    ]
};

const data = {
    fullName: "",
    gender: "",
    dob: "",
    fatherName: "",
    grandFatherName: "",
    maritalStatus: "",
    "occupation-field": "",
    emailAddress: "",
    contactNumber: "",
    state: "",
    district: "",
    municipality: "",
    wardNumber: "",
    toleName: "",
    documentType: "",
    citizenshipNumber: "",
    issuedAddress: "",
    dateOfIssue: "",
};

export { formInputConfig, data };