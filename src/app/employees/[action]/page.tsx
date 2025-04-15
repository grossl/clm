import { deleteEmployee } from "@/app/dao/employee";
import { EmployeeForm } from "@/components/forms/employeeForm";
 
export default function Page(context: any) {
  switch (context.params.action) {
    case "create":
    case "edit":
    return  <EmployeeForm/>
    case "delete":
      return deleteEmployee(context.params.id)
  }
  return '...'
}

