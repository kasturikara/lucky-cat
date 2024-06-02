import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { getPeserta } from "src/features/admin/api";

function PesertaSmpPages() {
  const [loading, setLoading] = useState(false);

  const [smp, setSmp] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const smp = await getPeserta("smp");
      setSmp(smp);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="p-4 mt-2 rounded-lg bg-slate-50">
        <h1 className="text-3xl font-bold">LIST PESERTA SMP/MTs</h1>
      </div>
      <div className="p-4 mt-8 rounded-lg bg-slate-50">
        <div className="overflow-x-auto">
          <Table striped>
            <Table.Head className="text-center bg-sky-500 text-slate-50">
              <Table.HeadCell className="w-2/12 bg-inherit">
                Nomor Urut
              </Table.HeadCell>
              <Table.HeadCell className="bg-inherit">
                Nama Sekolah
              </Table.HeadCell>
              <Table.HeadCell className="bg-inherit">Ballot</Table.HeadCell>
              <Table.HeadCell className="bg-inherit">Pinalty</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {loading ? (
                <Table.Row>
                  <Table.Cell colSpan={4}>
                    <div className="flex items-center justify-center">
                      <div className="w-10 h-10 my-24 border-4 border-dashed rounded-full animate-spin border-sky-600"></div>
                    </div>
                  </Table.Cell>
                </Table.Row>
              ) : smp.length <= 0 ? (
                <Table.Row>
                  <Table.Cell colSpan={4} className="text-center">
                    Belum ada data
                  </Table.Cell>
                </Table.Row>
              ) : (
                smp.map((s, i) => (
                  <Table.Row
                    className="text-center even:bg-slate-100 hover:bg-sky-100"
                    key={i}
                  >
                    <Table.Cell className="w-12 bg-inherit">{s.no}</Table.Cell>
                    <Table.Cell className="bg-inherit">{s.nama}</Table.Cell>
                    <Table.Cell className="bg-inherit">{s.ballot}</Table.Cell>
                    <Table.Cell className="bg-inherit">{s.pinalty}</Table.Cell>
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

export default PesertaSmpPages;
