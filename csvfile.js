import * as XLSX from "xlsx";
import * as FileSaver from "file-saver";

const exportToExcel = () => {
    const ws = XLSX.utils.table_to_sheet(
      document.getElementById("react-table")
    );
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
    });
    FileSaver.saveAs(data, "table.xlsx");
  };
