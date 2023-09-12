import { FC, useMemo } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';

import { CustomTable, CustomTr } from './Table.styled';

import type { roundWoodItem } from '../../redux/roundWoodSlice';
import type { boardItem } from '../../redux/boardSlice';
import type { woodWithoutId } from '../../Pages/AddItems/AddWoodItems';
type TablePropsType = {
  items: (roundWoodItem | boardItem | woodWithoutId)[];
};


export const TableWood: FC<TablePropsType> = ({ items }) => {
  const data = useMemo(() => items, [items]);

  const columnsWood = [  
    {
      header: 'Назва',
      accessorKey: 'name',
      footer: 'Назва',
    },
    {
      header: 'Діаметр',
      accessorKey: 'diametr',
      footer: 'Діаметр',
    },
        {
      header: 'Довжина',
      accessorKey: 'length',
      footer: 'Довжина',
      },
    {
      header: 'Кількість',
      accessorKey: 'amount',
      footer: 'Кількість',
    },
    {
      header: 'Штрихкод',
      accessorKey: 'code',
      footer: 'Штрихкод',
    },
  ];

  
  const table = useReactTable({
    data: data,
    columns: columnsWood,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <CustomTable className="w3-table-all w3-centered">
      <thead>
        {table.getHeaderGroups().map(item => (
          <CustomTr key={item.id}>
            {item.headers.map(header => (
              <th key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            ))}
          </CustomTr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </CustomTable>
  );
};
