import React, { useEffect, useMemo, useState } from "react";
import DataTable from "../components/DataTable";
import { useParams } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import { BiSpreadsheet } from "react-icons/bi";
import InnerHtmlDiv from "../components/customInputs/InnerHtmlDiv";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import CustomHeader from "../components/customInputs/CustomHeader";
import { prodURL } from "../config";

const ResponseViewer = () => {
  const [formName, setFormName] = useState("");

  const [rowData, setRowData] = useState([]);

  const [columnDefs, setColumnDefs] = useState([]);

  const { id } = useParams();

  const getResponses = async () => {
    const res = await fetch(prodURL + "/api/response/" + id);
    const data = await res.json();
    if (data) {
      setFormName(data.name);

      setColumnDefs(data?.columns);
      setRowData(data.rows);
    }
  };
  useEffect(() => {
    getResponses();
  }, []);
  const components = useMemo(() => {
    return {
      agColumnHeader: CustomHeader,
    };
  }, []);
  return (
    <div className="w-full h-[100vh] overflow-hidden ">
      <div className="flex justify-between items-center p-4 bg-white shadow-md h-[68px]">
        <div className="flex items-center gap-1">
          <BiSpreadsheet color="#1a8cd8" fontSize={"2rem"} />
          <h1 className="text-2xl font-bold text-gray-800 m-0">Formviewer</h1>
        </div>
      </div>
      <div className="h-[calc(100vh-68px)] overflow-y-hidden w-full p-4 bg-white-100 flex   flex-col">
        <h1 className="text-grey text-2xl my-4 font-bold flex gap-x-2">
          Responses from <InnerHtmlDiv value={formName} />
        </h1>
        <div className="ag-theme-alpine rounded-md h-full ">
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            components={components}
          ></AgGridReact>
        </div>
      </div>
    </div>
  );
};

export default ResponseViewer;
