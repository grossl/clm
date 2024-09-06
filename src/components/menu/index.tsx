import Link from "next/link"
import {
  Home,
  LineChart,
  Package,
  Calendar,
  Users2,
  ContactRound,
  Stethoscope,
  NotebookTabs
} from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip"


export function Menu() {
    return(
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
            <Link
              href="/"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
            >
              <Home className="h-4 w-4 transition-all group-hover:scale-110" />
              <span className="sr-only">Home</span>
            </Link>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="calendar"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Calendar className="h-5 w-5" />
                  <span className="sr-only">Calendário</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Calendário</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="appointment"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <NotebookTabs className="h-5 w-5" />
                  <span className="sr-only">Consultas</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Consultas</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="hospitalization"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Stethoscope className="h-5 w-5" />
                  <span className="sr-only">Internações</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Internações</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="calendar"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Users2 className="h-5 w-5" />
                  <span className="sr-only">Clientes</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Clientes</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="product"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Package className="h-5 w-5" />
                  <span className="sr-only">Produtos</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Produtos</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="employee"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <ContactRound  className="h-5 w-5" />
                  <span className="sr-only">Funcionários</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Funcionários</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="accounting"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <LineChart className="h-5 w-5" />
                  <span className="sr-only">Contabilidade</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Contabilidade</TooltipContent>
            </Tooltip>
            </nav>
  )
};