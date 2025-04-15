"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Stethoscope, Scissors, ShieldCheck } from "lucide-react"
import type { Employee } from "@/types/employee"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

// Define the validation schema
const formSchema = z.object({
  nome: z.string().min(1, { message: "Nome é obrigatório" }),
  funcao: z.enum(["Veterinário", "Petshop", "Admin"], {
    required_error: "Função é obrigatória",
  }),
})

interface EmployeeEditDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  employee: Employee | null
  onUpdateEmployee: (employee: Employee) => void
}

export function EmployeeEditDialog({ open, onOpenChange, employee, onUpdateEmployee }: EmployeeEditDialogProps) {
  // Initialize form with validation
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      funcao: "Petshop",
    },
  })

  // Update form values when employee changes
  useEffect(() => {
    if (employee) {
      form.reset({
        nome: employee.nome,
        funcao: employee.funcao,
      })
    }
  }, [employee, form])

  // Function to handle form submission
  function onSubmit(values: z.infer<typeof formSchema>) {
    if (employee) {
      onUpdateEmployee({
        ...employee,
        nome: values.nome,
        funcao: values.funcao,
      })
      onOpenChange(false)
    }
  }

  // Function to get the appropriate icon for the selected role
  const getRoleIcon = (funcao: string) => {
    switch (funcao) {
      case "Veterinário":
        return <Stethoscope className="h-4 w-4 mr-2" />
      case "Petshop":
        return <Scissors className="h-4 w-4 mr-2" />
      case "Admin":
        return <ShieldCheck className="h-4 w-4 mr-2" />
      default:
        return null
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar Funcionário</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
            <FormField
              control={form.control}
              name="nome"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Nome <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Digite o nome do funcionário" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="funcao"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Função <span className="text-destructive">*</span>
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a função">
                          {field.value && (
                            <div className="flex items-center">
                              {getRoleIcon(field.value)}
                              {field.value}
                            </div>
                          )}
                        </SelectValue>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Veterinário">
                        <div className="flex items-center">
                          <Stethoscope className="h-4 w-4 mr-2" />
                          Veterinário
                        </div>
                      </SelectItem>
                      <SelectItem value="Petshop">
                        <div className="flex items-center">
                          <Scissors className="h-4 w-4 mr-2" />
                          Petshop
                        </div>
                      </SelectItem>
                      <SelectItem value="Admin">
                        <div className="flex items-center">
                          <ShieldCheck className="h-4 w-4 mr-2" />
                          Admin
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter className="pt-4">
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancelar
                </Button>
              </DialogClose>
              <Button type="submit">Atualizar</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
