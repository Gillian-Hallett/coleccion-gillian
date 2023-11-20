import React from "react";

//importo la librería de informes
import MaterialTable from "@material-table/core";
//Importo la librería que nos permite exportar a CSV y PDF
import { ExportCsv, ExportPdf } from "@material-table/exporters";

function InformeColeccion(props) {

    console.log(props.nose)

    const col = [
        { title: "Nombre", field: "nombre", filtering: false },
        { title: "Marca", field: "marca" },
        { title: "Tipo", field: "tipo" },
        { title: "Precio", field: "precio", filtering: false }
    ];

    return (<>
        <MaterialTable

            columns={col} data={props.nose}
            title="Tabliña"
            renderSummaryRow={({ column, data }) =>
                column.field === "precio"
                    ? {
                        value: data.reduce((agg, row) => agg + row.precio, 0),
                    }
                    : undefined
            }
            
            options={{
                headerStyle: {
                    backgroundColor: "black",
                    color: "white"
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
    </>)
}

export default InformeColeccion