// lib
import { useEffect, useState } from "react";
import { Spinner, Table } from "flowbite-react";
// api
import { getSubsByJenis } from "src/features/admin/api";

function SubsForPages() {
  const [loading, setLoading] = useState(true);
  const [subsFor, setSubsFor] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const subsFor = await getSubsByJenis("for");
      setSubsFor(subsFor);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="p-4 mt-2 rounded-lg bg-slate-50">
        <h1 className="text-3xl font-bold">LIST KRITERIA PENILAIAN FORMASI</h1>
      </div>

      <div className="p-4 mt-8 rounded-lg bg-slate-50">
        <div className="overflow-x-auto">
          <Table striped>
            <Table.Head className="text-center bg-sky-500 text-slate-50">
              <Table.HeadCell className="w-12 bg-inherit">No</Table.HeadCell>
              <Table.HeadCell className="bg-inherit">Nama</Table.HeadCell>
              <Table.HeadCell className="w-24 bg-inherit">D</Table.HeadCell>
              <Table.HeadCell className="w-24 bg-inherit">C-</Table.HeadCell>
              <Table.HeadCell className="w-24 bg-inherit">C+</Table.HeadCell>
              <Table.HeadCell className="w-24 bg-inherit">B-</Table.HeadCell>
              <Table.HeadCell className="w-24 bg-inherit">B+</Table.HeadCell>
              <Table.HeadCell className="w-24 bg-inherit">A-</Table.HeadCell>
              <Table.HeadCell className="w-24 bg-inherit">A+</Table.HeadCell>
            </Table.Head>
            <Table.Body>
              {loading ? (
                <Table.Row>
                  <Table.Cell colSpan={10} className="text-center">
                    <Spinner className="w-12 h-12 my-24" />
                  </Table.Cell>
                </Table.Row>
              ) : subsFor.length === 0 ? (
                <Table.Row>
                  <Table.Cell colSpan={10} className="w-12 bg-inherit">
                    No data
                  </Table.Cell>
                </Table.Row>
              ) : (
                subsFor.map((item, index) => (
                  <Table.Row
                    key={item.id}
                    className="text-center hover:bg-sky-100 even:bg-slate-100"
                  >
                    <Table.Cell className="w-12 font-semibold bg-inherit">
                      {index + 1}
                    </Table.Cell>
                    <Table.Cell className="bg-inherit">{item.nama}</Table.Cell>
                    <Table.Cell className="bg-inherit">{item.n1}</Table.Cell>
                    <Table.Cell className="bg-inherit">{item.n2}</Table.Cell>
                    <Table.Cell className="bg-inherit">{item.n3}</Table.Cell>
                    <Table.Cell className="bg-inherit">{item.n4}</Table.Cell>
                    <Table.Cell className="bg-inherit">{item.n5}</Table.Cell>
                    <Table.Cell className="bg-inherit">{item.n6}</Table.Cell>
                    <Table.Cell className="bg-inherit">{item.n7}</Table.Cell>
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

export default SubsForPages;
