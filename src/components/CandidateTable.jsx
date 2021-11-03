import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export function CandidateTable({ data }) {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                align="left"
                sx={{ fontWeight: "bold", fontSize: "12pt" }}
              >
                Candidate
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontWeight: "bold", fontSize: "12pt" }}
              >
                Role
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontWeight: "bold", fontSize: "12pt" }}
              >
                Last Communication
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontWeight: "bold", fontSize: "12pt" }}
              >
                Salary
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontWeight: "bold", fontSize: "12pt" }}
              >
                Sent By
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontWeight: "bold", fontSize: "12pt" }}
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow
                key={item.candidate}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  align="left"
                  sx={{ padding: "0.5rem 1rem" }}
                >
                  <div className="candidate">
                    <img className="img" src={item.image} alt="" />
                    <span className="name">{item.candidate}</span>
                  </div>
                </TableCell>
                <TableCell align="left" sx={{ padding: "0.5rem 1rem" }}>
                  {item.role}
                </TableCell>
                <TableCell align="left" sx={{ padding: "0.5rem 1rem" }}>
                  {item.last_comms.unread ? (
                    <span className="unread"></span>
                  ) : (
                    <span className="read"></span>
                  )}{" "}
                  {item.last_comms.description}{" "}
                  {item.last_comms.date_time.split(" ")[0]}
                </TableCell>
                <TableCell align="left" sx={{ padding: "0.5rem 1rem" }}>
                  R{item.salary.toString().slice(0, 2)}{" "}
                  {item.salary.toString().slice(2)}
                </TableCell>
                <TableCell align="left" sx={{ padding: "0.5rem 1rem" }}>
                  {item.sent_by}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    padding: "0.5rem 1rem",
                    color: "#40aadb",
                    cursor: "pointer",
                  }}
                >
                  {item.archived ? "Unarchive" : "Archive"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
