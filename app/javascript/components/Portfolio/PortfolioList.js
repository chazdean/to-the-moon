import React, { useState } from 'react'

//Components
import PortfolioListItem from './PortfolioListItem'
import { TableContainer, Table, TableBody, TableHead, TableRow, TableCell, Paper } from '@mui/material';

export default function PortfolioList(props) {
  const { data, deleteItem, updatePortfolioItem } = props

  const handleUpdate = (newShares, id, asset_id) => {
    updatePortfolioItem(newShares, id, asset_id)
  }

  const handleDelete = (id) => {
    console.log(`handle delete for portfolio item id: ${id}`)
    deleteItem("portfolio", id)
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="center">Symbol</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Shares</TableCell>
            <TableCell align="center">Current Price (USD)</TableCell>
            <TableCell align="center">Total Value</TableCell>
            <TableCell align="center">Percent</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((portfolioItem) => (
            <PortfolioListItem
              key={portfolioItem.id}
              portfolioItem={portfolioItem}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}