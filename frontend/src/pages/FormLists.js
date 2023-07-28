import { AgGridReact } from "ag-grid-react";
import React, { useCallback, useEffect, useState } from "react";
import { BiSpreadsheet } from "react-icons/bi";
import ActionButtons from "../components/customInputs/ActionButtons";
import InnerHtmlDiv from "../components/customInputs/InnerHtmlDiv";
import LoadingPage from "../components/customInputs/LoadingPage";
import { useNavigate } from "react-router-dom";
import { prodURL } from "../config";

const FormLists = () => {
  const [loading, setLoading] = useState(true);
  const [rowData, setRowData] = useState();
  const navigate = useNavigate();
  const handleDeleteForm = async (id) => {
    const res = await fetch(prodURL + "/api/formbuilder/" + id, {
      method: "DELETE",
    });
    const data = await res.json();
    setLoading(true);
  };

  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: "Sl no",
      field: "slNo",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Name",
      field: "name",
      cellRenderer: InnerHtmlDiv,

      sortable: true,
      filter: true,
    },
    {
      headerName: "Description",
      field: "description",
      cellRenderer: InnerHtmlDiv,
      sortable: true,
      filter: true,
      width: 400,
    },
    {
      field: "actions",
      cellRenderer: ActionButtons,
      cellRendererParams: { handleDeleteForm },
      width: 500,
    },
  ]);

  const getFormData = async () => {
    const res = await fetch(prodURL + "/api/formbuilder");
    const data = await res.json();
    setRowData(data);
    setLoading(false);
  };
  useEffect(() => {
    if (loading) {
      getFormData();
    }
  }, [loading]);

  return (
    <div className="w-full h-[100vh] overflow-hidden ">
      <div className="flex justify-between items-center p-4 bg-white shadow-md h-[68px]">
        <div className="flex items-center gap-1">
          <BiSpreadsheet color="#1a8cd8" fontSize={"2rem"} />
          <h1 className="text-2xl font-bold text-gray-800 m-0">Form Nirmata</h1>
        </div>
        <button
          type="button"
          onClick={() => navigate("/builder")}
          className="bg-green-600 uppercase px-5 py-1.5 rounded-full text-white hover:bg-green-400"
        >
          Create Form
        </button>
      </div>
      <div className="h-[calc(100vh-68px)] overflow-y-hidden w-full p-4 bg-white-100 flex   flex-col">
        <h1 className="text-grey text-2xl my-4 font-bold">Forms</h1>
        <div className="ag-theme-alpine rounded-md h-full ">
          {/* {!rowData ? (
          ) : ( */}
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            rowHeight={45}
          />
          {/* )} */}
        </div>
      </div>
      <LoadingPage loading={loading} />
    </div>
  );
};

export default FormLists;
