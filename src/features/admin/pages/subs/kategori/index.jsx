import { Spinner, Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { getKategori } from "src/features/admin/api";

function KategoriPages() {
  const [loading, setLoading] = useState(true);
  const [kategori, setKategori] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const kategori = await getKategori();
      setKategori(kategori);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="p-4 mt-2 rounded-lg bg-slate-50">
        <h1 className="text-3xl font-bold">LIST KATEGORI</h1>
      </div>

      <div className="p-4 mt-8 rounded-lg bg-slate-50">
        <div className="overflow-x-auto">
          <Table striped>
            <Table.Head className="text-center bg-sky-500 text-slate-50">
              <Table.HeadCell className="w-12 bg-inherit">No</Table.HeadCell>
              <Table.HeadCell className="bg-inherit">Kategori</Table.HeadCell>
            </Table.Head>
            <Table.Body>
              {loading ? (
                <Table.Row>
                  <Table.Cell colSpan={2} className="text-center">
                    <Spinner className="w-12 h-12 my-24" />
                  </Table.Cell>
                </Table.Row>
              ) : kategori.length === 0 ? (
                <Table.Row>
                  <Table.Cell colSpan={2} className="w-12 bg-inherit">
                    No data
                  </Table.Cell>
                </Table.Row>
              ) : (
                kategori.map((item, index) => (
                  <Table.Row
                    key={item.id}
                    className="text-center hover:bg-sky-100 even:bg-slate-100"
                  >
                    <Table.Cell className="w-12 font-semibold bg-inherit">
                      {index + 1}
                    </Table.Cell>
                    <Table.Cell className="bg-inherit">{item.nama}</Table.Cell>
                  </Table.Row>
                ))
              )}
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default KategoriPages;
