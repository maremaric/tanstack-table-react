import { createColumnHelper } from "@tanstack/react-table";
import moment from "moment";

const columnHelper = createColumnHelper();

export const columnDef = [
    columnHelper.accessor('id', {
        header: 'id',
    }),
    {
        accessorFn: (row) => `${row.first_name}`,
        header: 'First Name'
    },
    {
        accessorKey: 'last_name',
        header: 'Last Name'
    },
    {
        accessorKey: 'email',
        header: 'Email'
    },
    {
        accessorKey: 'date',
        header: 'Date',
        cell: ({ getValue }) => moment(new Date(getValue())).format('MMM Do YY')
    }
];

// cell merge example
// const columnDefWithCellMerge = [
//     {
//         accessorFn: (row) => `${row.first_name} ${row.last_name}`,
//         header: 'Name'
//     },
// ];

// export const columnDefWithGrouping = [
//     columnHelper.accessor('id', {
//         header: 'id',
//     }),
//     {
//         header: 'Name',
//         columns: [
//             {
//                 accessorFn: (row) => `${row.first_name}`,
//                 header: 'First Name'
//             },
//             {
//                 accessorKey: 'last_name',
//                 header: 'Last Name'
//             },
//         ],
//     },
//     {
//         accessorKey: 'email',
//         header: 'Email'
//     },
//     {
//         accessorKey: 'date',
//         header: 'Date'
//     },
// ];