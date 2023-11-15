const Pagination = ({ totalDataMahasiswa, currentDataMahasiswa, setCurrentPage, currentPage }) => {
    let pages = []

    for (let i = 1; i <= Math.ceil(totalDataMahasiswa / currentDataMahasiswa); i++ ) {
        pages.push(i)
    }
    return ( 
        <div className="pagination">
            {pages.map((page, i) => (
                <div key={i}>
                    <button onClick={() => setCurrentPage(page)} 
                        className={page === currentPage ? "active" : ""}>{page}
                    </button>
                </div>
            ))}
        </div>
    );
}
 
export default Pagination;