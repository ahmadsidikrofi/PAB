import axios from "axios";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";

const App = () => {
  const [datas, setDatas] = useState([])
  // const date = new Date
  const [currentPage, setCurrentPage] = useState(1);
  const [currentDataMahasiswa, setCurrentDataMahasiswa] = useState(10);

  useEffect(() => {
    const getMahasiswaData = async () => {
      const response = await axios.get('https://furnicraft.web.id/api/pab/mahasiswa')
      setDatas(response.data.data)
    }
    getMahasiswaData()
  }, [])

  const lastPage = currentPage * currentDataMahasiswa;
  const firstPage = lastPage - currentDataMahasiswa;
  const sliceData = datas.slice(firstPage, lastPage);

  return (
    <>
      <div className="content">
        <h2 className="mb-5 fs-3">PAB Web Service</h2>
        <div className="table-responsive rounded-4" style={{ overflowX: "auto", }}>
          <table className="table table-striped table-dark custom-table">
            <thead>
              <tr>
                <th>No</th>
                <th scope="col">Nama</th>
                <th scope="col">Nim</th>
                <th scope="col">Email</th>
                <th scope="col">Tanggal input</th>
              </tr>
            </thead>
            <tbody>
              {
                sliceData.map((data, i) => (
                  <tr key={data.id}>
                    <td>{i + 1 + firstPage}</td>
                    <td>{data.nama}</td>
                    <td><a href="#">{data.nim}</a></td>
                    <td>{data.email}</td>
                    <td>{new Date(data.created_at).toLocaleDateString("in", {
                      month: "short", 
                      day: "2-digit", 
                      year: "numeric",
                    })}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <Pagination totalDataMahasiswa={datas.length} 
          currentDataMahasiswa={currentDataMahasiswa}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </>
  );
}

export default App;