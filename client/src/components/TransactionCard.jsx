import React from 'react'

export const TransactionCard = () => {
    return (
        <>

            <div className='flex flex-col md:w-1/2 w-full px-5 py-3 border shadow-sm shadow-gray-300'>
                <div className='flex justify-between '>
                    <div>
                        Salary
                    </div>
                    <div>
                        Rs 3000
                    </div>

                </div>
                <div className='pt-2 flex justify-between'>
                    <div className='text-sm '>12-01-2023</div>
                    <div className='text-sm text-green-600'>Expense</div>
                </div>
            </div>


        </>
    )
}
