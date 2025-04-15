"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import type { Employee } from "@/types/employee"
import { EmployeeItem } from "@/components/forms/employee/item"
import { EmployeeAddDialog } from "@/components/forms/employee/add-dialog"
import { EmployeeEditDialog } from "@/components/forms/employee/edit-dialog"
import { EmployeeDeleteDialog } from "@/components/forms/employee/delete-dialog"


export default function CrudList() {
  const [employees, setEmployees] = useState<Employee[]>([
    { id: "1", nome: "Carlos Silva", funcao: "Veterinário" },
    { id: "2", nome: "Ana Oliveira", funcao: "Petshop" },
    { id: "3", nome: "Marcos Santos", funcao: "Admin" },
  ])

  const [editEmployee, setEditEmployee] = useState<Employee | null>(null)
  const [deleteEmployeeId, setDeleteEmployeeId] = useState<string | null>(null)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

  const handleAddEmployee = (employee: Employee) => {
    setEmployees([...employees, employee])
  }

  const handleUpdateEmployee = (updatedEmployee: Employee) => {
    setEmployees(employees.map((employee) => (employee.id === updatedEmployee.id ? updatedEmployee : employee)))
    setEditEmployee(null)
  }

  const handleDeleteEmployee = () => {
    if (deleteEmployeeId) {
      setEmployees(employees.filter((employee) => employee.id !== deleteEmployeeId))
      setDeleteEmployeeId(null)
    }
  }

  const changeFuncao = (id: string) => {
    setEmployees(
      employees.map((employee) => {
        if (employee.id === id) {
          // Rotate through the roles
          let newFuncao: "Veterinário" | "Petshop" | "Admin"
          switch (employee.funcao) {
            case "Veterinário":
              newFuncao = "Petshop"
              break
            case "Petshop":
              newFuncao = "Admin"
              break
            case "Admin":
              newFuncao = "Veterinário"
              break
            default:
              newFuncao = "Petshop"
          }
          return { ...employee, funcao: newFuncao }
        }
        return employee
      }),
    )
  }

  const openEditDialog = (employee: Employee) => {
    setEditEmployee(employee)
    setIsEditDialogOpen(true)
  }

  const openDeleteDialog = (id: string) => {
    setDeleteEmployeeId(id)
    setIsDeleteDialogOpen(true)
  }

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Funcionários</CardTitle>
        <Button onClick={() => setIsAddDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Adicionar Funcionário
        </Button>
      </CardHeader>
      <CardContent>
        {employees.length === 0 ? (
          <div className="text-center py-6 text-muted-foreground">
            Nenhum funcionário encontrado. Adicione um novo funcionário para começar.
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Função</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employees.map((employee) => (
                <EmployeeItem
                  key={employee.id}
                  employee={employee}
                  onEdit={openEditDialog}
                  onDelete={openDeleteDialog}
                  onChangeFuncao={changeFuncao}
                />
              ))}
            </TableBody>
          </Table>
        )}

        <EmployeeAddDialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen} onAddEmployee={handleAddEmployee} />

        <EmployeeEditDialog
          open={isEditDialogOpen}
          onOpenChange={setIsEditDialogOpen}
          employee={editEmployee}
          onUpdateEmployee={handleUpdateEmployee}
        />

        <EmployeeDeleteDialog
          open={isDeleteDialogOpen}
          onOpenChange={setIsDeleteDialogOpen}
          onConfirmDelete={handleDeleteEmployee}
        />
      </CardContent>
    </Card>
  )
}
