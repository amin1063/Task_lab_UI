import * as yup from 'yup';
export const schemaData = {
    'Analyzer' : {
        Name: yup.string().required('required'),
        Vendor: yup.string().required('required'),
        Desc: yup.string().required('required'),
        // isActive: yup.boolean().required('required'),
        // createdOn: yup.string().required('required'),
        // updatedOn: yup.string().required('required'),
        // createdBy: yup.string().required('required'),
        // updatedBy: yup.string().required('required'),
    },
    'AnalyzerParameter' : {

        AnalyzerId: yup.number().required('required'),
        LISCodeId: yup.number().required('required'),
        LASCodeId: yup.number().required('required'),

        AnalyzerID: yup.number().required('required'),
        LISCodeID: yup.number().required('required'),
        LASCodeID: yup.number().required('required'),

        // isActive: yup.boolean().required('required'),
        Desc: yup.string().required('required'),
        // createdOn: yup.string().required('required'),
        // updatedOn: yup.string().required('required'),
        // createdBy: yup.string().required('required'),
        // updatedBy: yup.string().required('required'),
    },
    'Cpt' : {
<<<<<<< HEAD
        name: yup.string().required('required'),
        description: yup.string().required('required'),
=======
        Name: yup.string().required('required'),
        Description: yup.string().required('required'),
>>>>>>> e4de71bfcca03b16b6ff2262035800d95f58de4d
        // isActive: yup.boolean().required('required'),
        // createdOn: yup.string().required('required'),
        // updatedOn: yup.string().required('required'),
        // createdBy: yup.string().required('required'),
        // updatedBy: yup.string().required('required'),
    },
    'LisCode' : {
<<<<<<< HEAD
        name: yup.string().required('required'),
        type: yup.boolean().required('required'),
=======
        Name: yup.string().required('required'),
        Type: yup.boolean().required('required'),
>>>>>>> e4de71bfcca03b16b6ff2262035800d95f58de4d
        // isActive: yup.boolean().required('required'),
        Desc: yup.string().required('required'),
        // createdOn: yup.string().required('required'),
        // updatedOn: yup.string().required('required'),
        // createdBy: yup.string().required('required'),
        // updatedBy: yup.string().required('required'),
    },
    'TestParameter' : {
<<<<<<< HEAD
        cptid: yup.number().required('required'),
        liscodeId: yup.number().required('required'),
        unit: yup.string().required('required'),
        range: yup.string().required('required'),
=======
        CPTID: yup.number().required('required'),
        LISCodeID: yup.number().required('required'),
        Unit: yup.string().required('required'),
        Range: yup.string().required('required'),
        Desc: yup.string().required('required'),
>>>>>>> e4de71bfcca03b16b6ff2262035800d95f58de4d
        // isActive: yup.boolean().required('required'),
        // createdOn: yup.string().required('required'),
        // updatedOn: yup.string().required('required'),
        // createdBy: yup.string().required('required'),
        // updatedBy: yup.string().required('required'),
    },
    'GenLookup' : {
        keyName: yup.string().required('required'),
        value: yup.string().required('required'),
        type: yup.boolean().required('required'),
        // createdOn: yup.string().required('required'),
        // updatedOn: yup.string().required('required'),
        // createdBy: yup.string().required('required'),
        // updatedBy: yup.string().required('required'),
    },
    // ==================
    'InvoiceDetail' : {
        keyName: yup.string().required('required'),
        value: yup.string().required('required'),
        type: yup.boolean().required('required'),
        // createdOn: yup.string().required('required'),
        // updatedOn: yup.string().required('required'),
        // createdBy: yup.string().required('required'),
        // updatedBy: yup.string().required('required'),
    },
    'InvoiceMaster' : {
        keyName: yup.string().required('required'),
        value: yup.string().required('required'),
        type: yup.boolean().required('required'),
        // createdOn: yup.string().required('required'),
        // updatedOn: yup.string().required('required'),
        // createdBy: yup.string().required('required'),
        // updatedBy: yup.string().required('required'),
    },
    'OrderDetail' : {
<<<<<<< HEAD
        name: yup.string().required('required'),
        type: yup.boolean().required('required'),
        desc: yup.string().required('required'),
=======
        OrderID: yup.string().required('required'),
        CPTID: yup.string().required('required'),
        CPTPrice: yup.string().required('required'),
        Quantity: yup.string().required('required'),
        // Quantity: yup.boolean().required('required'),
        Desc: yup.string().required('required'),
>>>>>>> e4de71bfcca03b16b6ff2262035800d95f58de4d
        // createdOn: yup.string().required('required'),
        // updatedOn: yup.string().required('required'),
        // createdBy: yup.string().required('required'),
        // updatedBy: yup.string().required('required'),
    },
    'OrderMaster' : {
<<<<<<< HEAD
        name: yup.string().required('required'),
        type: yup.boolean().required('required'),
        desc: yup.string().required('required'),
=======
        MRN: yup.string().required('required'),
        Physician: yup.string().required('required'),
        UserID: yup.string().required('required'),
        Desc: yup.string().required('required'),
>>>>>>> e4de71bfcca03b16b6ff2262035800d95f58de4d
        // createdOn: yup.string().required('required'),
        // updatedOn: yup.string().required('required'),
        // createdBy: yup.string().required('required'),
        // updatedBy: yup.string().required('required'),
    },
    'PathologyPendingQueue' : {
        name: yup.string().required('required'),
        type: yup.boolean().required('required'),
        Desc: yup.string().required('required'),
        // createdOn: yup.string().required('required'),
        // updatedOn: yup.string().required('required'),
        // createdBy: yup.string().required('required'),
        // updatedBy: yup.string().required('required'),
    },
    'PathologyResultDetail' : {
        name: yup.string().required('required'),
        type: yup.boolean().required('required'),
        Desc: yup.string().required('required'),
        // createdOn: yup.string().required('required'),
        // updatedOn: yup.string().required('required'),
        // createdBy: yup.string().required('required'),
        // updatedBy: yup.string().required('required'),
    },
    'PathologyResultMaster' : {
        name: yup.string().required('required'),
        type: yup.boolean().required('required'),
        Desc: yup.string().required('required'),
        // createdOn: yup.string().required('required'),
        // updatedOn: yup.string().required('required'),
        // createdBy: yup.string().required('required'),
        // updatedBy: yup.string().required('required'),
    },
    'RoleModule' : {
        roleId: yup.string().required('required'),
        moduleId: yup.string().required('required'),
        Desc: yup.string().required('required'),
        // createdOn: yup.string().required('required'),
        // updatedOn: yup.string().required('required'),
        // createdBy: yup.string().required('required'),
        // updatedBy: yup.string().required('required'),
    },
    'Module' : {
        roleId: yup.string().required('required'),
        moduleId: yup.string().required('required'),
        Desc: yup.string().required('required'),
        // createdOn: yup.string().required('required'),
        // updatedOn: yup.string().required('required'),
        // createdBy: yup.string().required('required'),
        // updatedBy: yup.string().required('required'),
    },
    'Role' : {
        name: yup.string().required('required'),
        type: yup.boolean().required('required'),
        Desc: yup.string().required('required'),
        // createdOn: yup.string().required('required'),
        // updatedOn: yup.string().required('required'),
        // createdBy: yup.string().required('required'),
        // updatedBy: yup.string().required('required'),
    },
<<<<<<< HEAD
    'TestCategorie' : {
        categoryName: yup.string().required('required'),
        desc: yup.string().required('required'),
=======
    'TestCategory' : {
        CategoryName: yup.string().required('required'),
        Desc: yup.string().required('required'),
>>>>>>> e4de71bfcca03b16b6ff2262035800d95f58de4d
        // createdOn: yup.string().required('required'),
        // updatedOn: yup.string().required('required'),
        // createdBy: yup.string().required('required'),
        // updatedBy: yup.string().required('required'),
    },
    'TestSample' : {
<<<<<<< HEAD
        cptid: yup.string().required('required'),
        sampleName: yup.string().required('required'),
        desc: yup.string().required('required'),
=======
        CPTID: yup.string().required('required'),
        SampleName: yup.string().required('required'),
        Desc: yup.string().required('required'),
>>>>>>> e4de71bfcca03b16b6ff2262035800d95f58de4d
        // createdOn: yup.string().required('required'),
        // updatedOn: yup.string().required('required'),
        // createdBy: yup.string().required('required'),
        // updatedBy: yup.string().required('required'),
    },
    'TestUnit' : {
<<<<<<< HEAD
        name: yup.string().required('required'),
        desc: yup.string().required('required'),
=======
        Unit: yup.string().required('required'),
        Desc: yup.string().required('required'),
>>>>>>> e4de71bfcca03b16b6ff2262035800d95f58de4d
        // createdOn: yup.string().required('required'),
        // updatedOn: yup.string().required('required'),
        // createdBy: yup.string().required('required'),
        // updatedBy: yup.string().required('required'),
    },
    'User' : {
<<<<<<< HEAD
        name: yup.string().required('required'),
        mobile: yup.string().required('required'),
        email: yup.string().required('required'),
        username: yup.string().required('required'),
        password: yup.string().required('required'),
        desc: yup.string().required('required'),
=======
        Name: yup.string().required('required'),
        Mobile: yup.string().required('required'),
        Email: yup.string().required('required'),
        Username: yup.string().required('required'),
        Password: yup.string().required('required'),
        Desc: yup.string().required('required'),
>>>>>>> e4de71bfcca03b16b6ff2262035800d95f58de4d
        // createdOn: yup.string().required('required'),
        // updatedOn: yup.string().required('required'),
        // createdBy: yup.string().required('required'),
        // updatedBy: yup.string().required('required'),
    },
    'His' : {
        Name: yup.string().required('required'),
        // type: yup.boolean().required('required'),
        Desc: yup.string().required('required'),
        // createdOn: yup.string().required('required'),
        // updatedOn: yup.string().required('required'),
        // createdBy: yup.string().required('required'),
        // updatedBy: yup.string().required('required'),
    },
    'HISAnalyzer' : {
        'Analyzer' : {
            AnalyzerID: yup.number().required('required'),
            AnalyzerCode: yup.string().required('required'),
            AParamName: yup.string().required('required'),
            AUnit: yup.string().required('required'),
            ARange: yup.string().required('required'),

        },
        'HIS' : {
            HISID: yup.number().required('required'),
            HISCode: yup.string().required('required'),
            HParamName: yup.string().required('required'),
            HUnit: yup.string().required('required'),
            HRange: yup.string().required('required'),

        }
    },
}