import React, { useState } from 'react';
import { addDoc, collection } from "firebase/firestore";
import auth, { db } from '../../firebase.init';


const AddTask = () => {
    const [taskName, setTaskName] = useState('')
    const [desc, setDesc] = useState('')
    const [dueDate, setDueDate] = useState('')

    const user = auth.currentUser
    console.log(user.uid);
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const docRef = await addDoc(collection(db, "tasks"), {
                user: user.uid,
                name: taskName,
                desc: desc,
                dueDate: dueDate
            });

            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }


    return (
        <div>
            <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div
                        class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div class="max-w-md mx-auto">
                            <div>
                                <h1 class="text-2xl font-semibold">Add Task</h1>
                            </div>
                            <div class="divide-y divide-gray-200">
                                <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <form onSubmit={handleSubmit} className='space-y-10'>
                                        <div class="relative">
                                            <input value={taskName}
                                                onChange={e => setTaskName(e.target.value)} id="taskName" name="taskName" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Task Name" />
                                            <label class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Task Name</label>
                                        </div>

                                        <div class="relative">
                                            <input value={desc}
                                                onChange={e => setDesc(e.target.value)} id="desc" name="desc" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Task Description" />
                                            <label class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Task Description</label>
                                        </div>

                                        <div class="relative">
                                            <input value={dueDate}
                                                onChange={e => setDueDate(e.target.value)} id="dueDate" name="dueDate" type="date" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Due Date" />
                                            <label class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Due Date</label>
                                        </div>

                                        <div class="relative">
                                            <button class="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTask;