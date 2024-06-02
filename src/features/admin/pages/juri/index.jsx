// lib
import { useEffect, useState } from "react";
// store
import { useShallow } from "zustand/react/shallow";
import useAppStore from "src/store/useAppStore";
// api
import { getJuri } from "../../api";
import { Table } from "flowbite-react";
// components

function JuriPages() {
  const [isLoading, setIsLoading] = useAppStore(
    useShallow((state) => [state.isLoading, state.setIsLoading])
  );
  const [dataJuri, setDataJuri] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      const dataJuri = await getJuri();
      setDataJuri(dataJuri);
    }

    fetchData();
    setIsLoading(false);
  }, []);

  return (
    <div>
      <div className="p-4 mt-2 rounded-lg bg-slate-50">
        <h1 className="text-3xl font-bold">LIST JURI</h1>
      </div>

      <div className="p-4 mt-8 rounded-lg bg-slate-50">
        {/* <div className=""></div> */}
        <div className="overflow-x-auto">
          <Table striped>
            <Table.Head className="text-center bg-sky-500 text-slate-50">
              <Table.HeadCell className="w-12 bg-inherit">No</Table.HeadCell>
              <Table.HeadCell className="bg-inherit">Role</Table.HeadCell>
              <Table.HeadCell className="bg-inherit">Nama</Table.HeadCell>
              <Table.HeadCell className="bg-inherit">Username</Table.HeadCell>
              <Table.HeadCell className="bg-inherit">Password</Table.HeadCell>
            </Table.Head>
            <Table.Body>
              {isLoading ? (
                <Table.Row>
                  <Table.Cell>Loading...</Table.Cell>
                </Table.Row>
              ) : dataJuri.length === 0 ? (
                <Table.Row>
                  <Table.Cell>No Data</Table.Cell>
                </Table.Row>
              ) : (
                dataJuri.map((juri, index) => (
                  <Table.Row
                    key={juri.id}
                    className="text-center hover:bg-sky-100 even:bg-slate-100"
                  >
                    <Table.Cell className="font-semibold">
                      {index + 1}
                    </Table.Cell>
                    <Table.Cell>{juri.role}</Table.Cell>
                    <Table.Cell>{juri.nama}</Table.Cell>
                    <Table.Cell>{juri.username}</Table.Cell>
                    <Table.Cell>{juri.password}</Table.Cell>
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

export default JuriPages;
