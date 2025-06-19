import React, { useEffect, useRef } from "react";
import $ from "jquery";
import axios from "axios";
import "pqgrid/pqgrid.min.css";
import "pqgrid/pqgrid.min.js";
import "./PqStyle.css";

export default function Grant_Sanction_pqgrid() {
  const gridRef = useRef(null);
  const gridInstanceRef = useRef(null); // ✅ Use ref, not state

  async function fetchData() {
    try {
      const res = await axios.get("http://localhost:9000/api/grantsanctions/");
      return res.data;
    } catch (err) {
      console.error("Error fetching data", err);
      return [];
    }
  }

  useEffect(() => {
    const $grid = $(gridRef.current);

    fetchData().then((data) => {
      const colModel = [
        { title: "Demand No", dataIndx: "demandNo", width: 100, filter: { type: "textbox", condition: "contain" } },
        { title: "Child Scheme Type", dataIndx: "scheme", width: 180, filter: { type: "textbox", condition: "contain" } },
        { title: "C.B. No.", dataIndx: "cbNo", width: 100, filter: { type: "textbox", condition: "contain" } },
        { title: "Source Budget Head", dataIndx: "budgetHead", width: 200, filter: { type: "textbox", condition: "contain" } },
        { title: "Total Sanction Amount", dataIndx: "total", width: 150 },
        { title: "Ins. No.", dataIndx: "insNo", width: 80 },
        { title: "Installment Date", dataIndx: "date", width: 120, dataType: "date", filter: { type: "textbox", condition: "equal" } },
        {
          title: "Installment Amount",
          dataIndx: "amount",
          width: 150,
          summary: { type: "sum" },
          format: "#,###.00",
          filter: { type: "textbox", condition: "contain", listeners: ["keyup"] }
        },
        {
          title: "Status",
          dataIndx: "status",
          width: 100,
          filter: { type: "textbox", condition: "contain", listeners: ["keyup"] },
          render: ({ cellData }) => {
            let color = { Approved: "green", Pending: "orange", Rejected: "red" }[cellData] || "black";
            return `<span style="color:${color}; font-weight:bold">${cellData}</span>`;
          }
        },
        {
          title: "Action",
          width: 180,
          render: ({ rowData }) => {
            if (rowData?.pq_gsummary) return "";
            return `
              <div style="display: flex; gap: 4px;">
                <button class="edit-btn" data-id="${rowData._id}">Edit</button>
                <button class="delete-btn" data-id="${rowData._id}">Delete</button>
                <button class="print-btn" data-id="${rowData._id}">Print</button>
                <button class="lock-btn" data-id="${rowData._id}">Lock</button>
              </div>
            `;
          }
        }
      ];

      $grid.pqGrid({
        width: "100%",
        height: 450,
        title: "Grant Sanction Status",
        dataModel: { data, location: "local" },
        colModel,
        numberCell: { show: true },
        resizable: true,
        wrap: false,
        showTop: true,
        showBottom: true,
        stripeRows: true,
        fontSize: 5,
        scrollModel: { autoFit: true },
        selectionModel: { type: "row" },
        filterModel: { on: true, mode: "AND", header: true },
        sortModel: { type: "local" },
        toolbarBottom: true,
        columnTemplate: { summary: { type: "sum" } },
        summaryData: [{ amount: data.reduce((sum, row) => sum + (row.amount || 0), 0) }],
        pageModel: { type: "local", rPP: 10, rPPOptions: [5, 10, 20, 50, 100] }
      });

      gridInstanceRef.current = $grid.pqGrid("instance");

      // DELETE
      $grid.off("click", ".delete-btn").on("click", ".delete-btn", async function () {
        const id = $(this).data("id");
        if (window.confirm("Are you sure you want to delete this record?")) {
          try {
            await axios.delete(`http://localhost:9000/api/grantsanctions/${id}`);
            alert("Deleted successfully");
            const freshData = await fetchData();
            const grid = gridInstanceRef.current;
            if (grid) {
              grid.option({ dataModel: { data: freshData } });
              grid.refreshDataAndView();
            }
          } catch (err) {
            alert("Delete failed");
          }
        }
      });

      // EDIT
      $grid.off("click", ".edit-btn").on("click", ".edit-btn", async function () {
        const id = $(this).data("id");
        const rowIndex = $(this).closest("tr").index();
        const grid = gridInstanceRef.current;
        const rowData = grid.getRowData({ rowIndx: rowIndex });

        const updatedAmount = prompt("Update Installment Amount:", rowData.amount);
        const updatedStatus = prompt("Update Status:", rowData.status);

        if (updatedAmount !== null && updatedStatus !== null) {
          try {
            await axios.put(`http://localhost:9000/api/grantsanctions/${id}`, {
              amount: Number(updatedAmount),
              status: updatedStatus
            });
            alert("Updated successfully");
            const freshData = await fetchData();
            if (grid) {
              grid.option({ dataModel: { data: freshData } });
              grid.refreshDataAndView();
            }
          } catch (err) {
            alert("Update failed");
          }
        }
      });
    });

    return () => {
      if ($(gridRef.current).pqGrid("instance")) {
        $(gridRef.current).pqGrid("destroy");
      }
    };
  }, []); // ✅ Empty dependency array — runs only once

  return <div className="text-[12px]" ref={gridRef} id="grant-sanction-grid" />;
}
