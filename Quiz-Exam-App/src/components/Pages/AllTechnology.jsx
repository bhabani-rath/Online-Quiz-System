import React from "react";
import AdminPanel from "../Admin/AdminPanel";
import QuizTechData from "../TableData/QuizTechData";
import DataTable from "react-data-table-component";

const AllTechnology = () => {
 const column = [
  { name: "Sl no.", selector: (row) => row.id, sortable: true },
  { name: "Quiz Name", selector: (row) => row.name, sortable: true },
  { name: "Creator", selector: (row) => row.creator, sortable: true },
  {
   name: "Total Responses",
   selector: (row) => row.quizcontains,
   sortable: true
  },
  { name: "Actions", selector: (row) => row.actions }
 ];
 const customTableStyles = {
  rows: {
   style: {
    backgroundColor: "var(--color-background)",
    color: "var(--color-dark)" // Replace with your dark background color
   }
  },
  headCells: {
   style: {
    backgroundColor: "var(--color-background)", // Replace with your dark header color
    color: "var(--color-dark)" // Set text color for header cells
   }
  },
  pagination: {
   style: {
    backgroundColor: "var(--color-white)", // Replace with your dark pagination background color
    color: "var(--color-dark)" // Set text color for pagination
   },
   pageLinks: {
    color: "var(--color-white)" // Set color for pagination links
   }
  },
  arrows: {
   color: "var(--color-white)" // Set color for pagination arrows to white
  },
  dots: {
   color: "--color-white" // Set color for pagination dots to white
  }
 };
 return (
  <AdminPanel>
   <main>
    <h1>All Technologies</h1>
    <div>
     <DataTable
      className="allquizzes"
      columns={column}
      data={QuizTechData}
      fixedHeader
      pagination
      paginationPerPage={10}
      paginationRowsPerPageOptions={[5, 10, 15]}
      pointerOnHover
      customStyles={customTableStyles}
      style={{ boxShadow: "var(--box-shadow-hover)" }}
     ></DataTable>
    </div>
    <h6
     style={{
      textAlign: "center",
      marginTop: "16rem",
      color: "var(--color-dark)"
     }}
    >
     @Designed By Bhabani
    </h6>
   </main>
  </AdminPanel>
 );
};

export default AllTechnology;
