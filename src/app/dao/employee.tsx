"use server"

import { supabase } from "@/lib/supabase/client";
import { redirect } from 'next/navigation'

interface Employee {
    id: number;
    name: string;
    phone: any
}

export async function addEmployee(employee: any){

    const { data, error } = await supabase
    .from('employees')
    .insert(employee)
    .select()

    console.log(data)

    
    redirect('/employees')  

}

export async function deleteEmployee(id: any){

    try{
        const { data, error } = await supabase
        .from('employees')
        .delete()
        .match({ id: id })
    
        console.log(data)
    } catch (e) {
        return "be attention, An error occurred.";
    }

    
    redirect('/employees')  

}


export async function getEmployee(id: any){

    const { data, error } = await supabase
    .from('employees')
    .delete()
    .match({ id: id })

    console.log(data)
    
    redirect('/employees')  

}
