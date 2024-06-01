import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { getJuri } from "../../api";
import useAppStore from "src/store/useAppStore";
import { useShallow } from "zustand/react/shallow";

function JuriPages() {
  const [isLoading, setIsLoading] = useAppStore(
    useShallow((state) => [state.isLoading, state.setIsLoading])
  );
  const [dataJuri, setDataJuri] = useState([]);
  const columns = [
    {
      id: "id",
      name: "No.",
      selector: (_, index) => index + 1,
      width: "56px",
    },
    {
      name: "Nama",
      selector: (row) => row.nama,
    },
    {
      name: "Role",
      selector: (row) => row.role.toUpperCase(),
      sortable: true,
    },
    {
      name: "Username",
      selector: (row) => row.username,
    },
    {
      name: "Password",
      selector: (row) => row.password,
    },
  ];

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
        <div className=""></div>
        <div className="overflow-x-auto">
          <DataTable
            columns={columns}
            data={dataJuri}
            direction="auto"
            fixedHeader
            fixedHeaderScrollHeight="500px"
            highlightOnHover
            responsive
            pagination
            striped
            progressPending={isLoading}
          />
        </div>
      </div>
    </div>
  );
}

export default JuriPages;
