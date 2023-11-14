import axios from "axios";
import { } from "react";
import { useState, useEffect } from "react";

const App = () => {
  const [datas, setDatas] = useState([])
  // const date = new Date

  useEffect(() => {
    const getMahasiswaData = async () => {
      const response = await axios.get('https://furnicraft.web.id/api/pab/mahasiswa')
      setDatas(response.data.data)
    }
    getMahasiswaData()
  }, [])
  return (
    <>
      <div className="content">
        <h2 className="mb-5 fs-3">PAB Web Service</h2>
        <div className="table-responsive " style={{ overflowX: "auto", }}>
          <table className="table table-striped table-dark custom-table ">
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
                datas.map((data, i) => (
                  <tr key={data.id}>
                    <td>{i + 1}</td>
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

      </div>
    </>
  );
}

export default App;