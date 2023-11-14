import { useState, useMemo, useEffect} from 'react'
import axios from 'axios'
import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";

function Table() {
  const [datas, setDatas] = useState([]);
  const getData = async() => {
    const response = await axios.get('https://furnicraft.web.id/api/pab/mahasiswa')
    setDatas(response.data.data)
  }

  useEffect(() => {
    getData()
  }, [])

  const tableData = {
    nodes: datas.map((item) => ({ ...item, id: item.id.toString() }))
  }
  const theme = useTheme([
    getTheme(),
    {
      HeaderRow: `
        background-color: #eaf5fd;
      `,
      Row: `
        &:nth-of-type(odd) {
          background-color: #d2e9fb;
        }

        &:nth-of-type(even) {
          background-color: #eaf5fd;
        }
      `,
    },
  ]);

  const COLUMNS = [
    { label: 'Nama', renderCell: (item) => item.nama },
    { label: 'Nim', renderCell: (item) => item.nim },
    { label: 'Email', renderCell: (item) => item.email },
  ];
  
  return (
    <>
      <CompactTable columns={COLUMNS} data={tableData} theme={theme}/>
    </>
  )
}

export default Table
