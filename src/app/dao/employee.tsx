"use server"

import { createClient } from '@/lib/client/client';
import { redirect } from 'next/navigation'

interface Employee {
    id: number;
    name: string;
    phone: any
}

export async function addEmployee(employee: any) {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from('employees')
        .insert(employee)
        .select()

    console.log(data)


    redirect('/employees')

}

export async function deleteEmployee(id: any) {
    const supabase = await createClient();

    try {
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


export async function getEmployee(id: any) {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from('employees')
        .delete()
        .match({ id: id })

    console.log(data)

    redirect('/employees')

}
