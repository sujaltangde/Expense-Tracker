import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { FiSearch } from 'react-icons/fi'
import { LiaRupeeSignSolid } from 'react-icons/lia'
import { TransactionCard } from '../components/TransactionCard';


export const Home = () => {


    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState("")

    const [category, setCategory] = useState("");

    const addTransHandler = (e) => {
        e.preventDefault();

        if (amount == 0) {
            toast.info("Add value greater than 0 !")
        } else {
            console.log({
                amount,
                description,
                category
            })

            setAmount(0);
            setCategory("")
            setDescription("")
        }


    }

    return (
        <>
            <div className='min-h-screen  pt-14 '>

                <div className='flex flex-col justify-start items-start '>

                    <div className='w-full flex md:justify-between justify-start md:flex-row flex-col'>

                        <div className='pt-2 px-3 pb-4  md:w-1/2 w-full '>
                            <div className='pb-3'>
                                <p className='text-2xl'>Add Transactions</p>
                            </div>
                            <form onSubmit={addTransHandler} action="" className='flex flex-col gap-3' >

                                <div>
                                    <input required
                                        onChange={(e) => {
                                            const value = e.target.value
                                            if (value < 0) {
                                                return;
                                            }
                                            setAmount(value);
                                        }}
                                        value={amount} type="number" placeholder='Amount' className='px-2 py-2 border outline-none border-gray-400 focus:border-black w-full  ' />
                                </div>
                                <div>
                                    <input required onChange={(e) => setDescription(e.target.value)} value={description} type="text" placeholder='Description' className='px-2 py-2 border outline-none border-gray-400 focus:border-black w-full' />
                                </div>


                                <div className=' flex gap-8 pt-2 px-3 pb-2'>
                                    <div className='flex gap-1 text-lg font-medium  justify-center items-center'>
                                        <input checked={category === "expense"} value="expense" onChange={(e) => setCategory(e.target.value)} name='amount' type="radio" className='cursor-pointer' /> Expense</div>
                                    <div className='flex gap-1  text-lg font-medium justify-center items-center'>
                                        <input checked={category === "income"} value="income" onChange={(e) => setCategory(e.target.value)} name='amount' type="radio" className='cursor-pointer' /> Income</div>
                                </div>
                                <div className='md:w-1/2'>
                                    <button className='bg-blue-800 hover:bg-blue-900  px-6 text-white font-semibold py-2 w-full'>Add Transaction</button>
                                </div>
                            </form>
                        </div>
                        <div className='flex justify-center md:w-1/2 w-full '>
                            <div className='py-6 flex flex-col gap-4'>
                                
                                <div className='border py-3 px-20 bg-blue-700 text-white  '>
                                        <div className='flex justify-center items-center gap-3'>Balance: <span className='flex justify-center items-center'><LiaRupeeSignSolid/>56000</span></div>
                                </div>
                                <div className='border py-3 px-7 bg-blue-700  text-white  '>
                                        <div className='flex justify-center  items-center gap-3'>Expenses: <span className='flex justify-center items-center'><LiaRupeeSignSolid/>56000</span></div>
                                </div>
                                <div className='border py-3 px-7 bg-blue-700 text-white  '>
                                        <div className='flex justify-center items-center gap-3'>Income: <span className='flex justify-center items-center'><LiaRupeeSignSolid/>56000</span></div>
                                </div>
                                

                            </div>

                        </div>



                    </div>
                    <div className='px-3 border-t border-gray-300 w-full'>
                        <div className='pt-2 pb-3'>
                            <p className='text-2xl'>Transactions</p>
                        </div>
                        <div className='pt-2 pb-3 '>
                            <div className='border border-gray-500 flex items-center pl-2 md:w-1/2 w-full'>
                                <FiSearch />
                                <input type="text" placeholder='Search' className='px-3 outline-none  w-full  py-2  ' name="" id="" />
                            </div>
                        </div>
                        <div className='border-t border-gray-300'>

                        </div>
                        <div className='pt-4 flex flex-col gap-3 pb-12'>

                            <TransactionCard />
                            <TransactionCard />
                            <TransactionCard />


                        </div>
                    </div>


                </div>

            </div>

        </>
    )
}
