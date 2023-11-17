import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data'
import { invoices } from '@/app/lib/placeholder-data'
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs'
import EditInvoiceForm from '@/app/ui/invoices/edit-form'

import React from 'react'

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers()
  ])
  return (
    <main>
      <Breadcrumbs breadcrumbs={[
        { label: 'Invoices', href: '/dashboard/invoices' },
        { label: 'Edit', href: `/dashboard/invoices/${id}/edit` }
      ]} />
      <EditInvoiceForm customers={customers} invoice={invoice} />
    </main>
  )
}

