"use client"

import {
  File,
  ListFilter,
  MoreHorizontal,
  PlusCircle
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
} from "@/components/ui/tabs"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import Link from "next/link"
import { supabase } from "@/lib/supabase/client"
import { useState, useEffect } from 'react'

export default function Page() {

  const [data, setPosts] = useState<any | null>(null)
 
  useEffect(() => {
    async function fetchPosts() {
      const { data, error } = await supabase
      .from('employees')
      .select()
    
      setPosts(data)
    }
    fetchPosts()
  }, [])

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
    <Tabs defaultValue="all">
      <div className="flex items-center">
        <div className="ml-auto flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 gap-1">
                <ListFilter className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Filtros
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>
                Active
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>
                Archived
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button size="sm" variant="outline" className="h-8 gap-1">
            <File className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Exportar
            </span>
          </Button>
          <Link href="employees/create">
            <Button size="sm" className="h-8 gap-1">
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Adicionar Funcionário
                </span>
            </Button>
          </Link>
        </div>
      </div>
      <TabsContent value="all">
        <Card x-chunk="dashboard-06-chunk-0">
          <CardHeader>
            <CardTitle>Funcionários</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="hidden w-[100px] sm:table-cell">
                    <span className="sr-only">Image</span>
                  </TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Cargo</TableHead>
                  <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
              {
               data?.map((row : any) => (
                  <TableRow key={row.id}>
                  <TableCell className="hidden sm:table-cell">
                    <Avatar className="hidden h-9 w-9 sm:flex">
                      <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
                      <AvatarFallback>JL</AvatarFallback>
                    </Avatar>
                  </TableCell>
                  <TableCell className="font-medium">
                  {row.name}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">Veterinario</Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-haspopup="true"
                          size="icon"
                          variant="ghost"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" >
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <Link href={`/employees/edit/${encodeURIComponent(row.id)}`}><DropdownMenuItem >Edit</DropdownMenuItem></Link>
                        <Link href={`/employees/delete/${encodeURIComponent(row.id)}`}><DropdownMenuItem>Delete</DropdownMenuItem></Link>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                ))
              }
              </TableBody>
            </Table>
          </CardContent>
{/*           <CardFooter>
            <div className="text-xs text-muted-foreground">
              Showing <strong>1-10</strong> of <strong>32</strong>{" "}
              products
            </div>
          </CardFooter> */}
        </Card>
      </TabsContent>
    </Tabs>
  </main>
  );
}