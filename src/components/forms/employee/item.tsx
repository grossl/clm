"use client"

import { Pencil, Trash2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TableCell, TableRow } from "@/components/ui/table"
import type { Employee } from "@/types/employee"

interface EmployeeItemProps {
  employee: Employee
  onEdit: (employee: Employee) => void
  onDelete: (id: string) => void
  onChangeFuncao: (id: string) => void
}

export function EmployeeItem({ employee, onEdit, onDelete, onChangeFuncao }: EmployeeItemProps) {
  // Function to determine badge variant based on role
  const getBadgeVariant = (funcao: string) => {
    switch (funcao) {
      case "Veterinário":
        return "default" // Blue
      case "Petshop":
        return "secondary" // Gray
      case "Admin":
        return "destructive" // Red
      default:
        return "outline"
    }
  }

  return (
    <TableRow>
      <TableCell className="font-medium">{employee.nome}</TableCell>
      <TableCell>
        <Badge
          variant={getBadgeVariant(employee.funcao)}
          className="cursor-pointer"
          onClick={() => onChangeFuncao(employee.id)}
        >
          {employee.funcao}
        </Badge>
      </TableCell>
      <TableCell className="text-right">
        <Button variant="ghost" size="icon" onClick={() => onEdit(employee)}>
          <Pencil className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => onDelete(employee.id)}>
          <Trash2 className="h-4 w-4" />
        </Button>
      </TableCell>
    </TableRow>
  )
}
