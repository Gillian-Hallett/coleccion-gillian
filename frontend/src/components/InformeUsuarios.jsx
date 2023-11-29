//Gillian Hallett Caballero
import React from "react";

import MaterialTable from "@material-table/core";
import { ExportCsv, ExportPdf } from "@material-table/exporters";



function InformeUsuarios(props){

    console.log(props.sise)

    const col = [
        { title: "Nombre", field: "nombre"},
        { title: "Login", field: "login", filtering: false },
        { title: "Password", field: "password", filtering: false },
        { title: "Rol", field: "rol", filtering: false }
    ];

    return<>
    
    <MaterialTable
        
            columns={col} data={props.sise}
            title="Tabla"

            options={{
                headerStyle: {
                    backgroundColor: "#6f0871",
                    color: "black"
                },
                exportMenu: [
                    {
                        label: "Export PDF",
                        exportFunc: (cols, datas) => ExportPdf(cols, datas, "myPdfFileName"),
                    },
                    {
                        label: "Export CSV",
                        exportFunc: (cols, datas) => ExportCsv(cols, datas, "myCsvFileName"),
                    },
                ],
                draggable: true,
                columnsButton: true,
                filtering: true
            }}
        />
    </>
}

export default InformeUsuarios