import Link from 'next/link';

export default function Page() {
    return <div>
        <p className='mb-96'>Customers page</p>
        <p className='mb-96'>Customers page</p>
        <p className='mb-96'>Customers page</p>
        <p className='mb-96'>Customers page</p>
        <Link href={'/dashboard/customers/testPage'}>TestPage</Link>
    </div>
}