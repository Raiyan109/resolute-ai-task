import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useCallback, useEffect, useState } from 'react';
import auth, { db } from '../../firebase.init';
import { useAuth } from '../../context/AuthProvider';



const Home = () => {
    const [tasks, setTasks] = useState([])
    const [users, setUsers] = useState([])
    // const user = auth.currentUser
    const { user } = useAuth()

    const getAllTasks = useCallback(async () => {
        if (user && user?.uid) {
            const q = query(collection(db, "tasks"), where("user", "==", user.uid));
            try {
                const querySnapshot = await getDocs(q);
                let taskResults = []
                querySnapshot.forEach(doc => {
                    taskResults.push({
                        ...doc.data(),
                        uid: doc.id,
                    })
                })
                setTasks(taskResults)
                console.log(tasks);
            } catch (error) {

            }
        }
    }, [user])

    useEffect(() => {
        getAllTasks()
    }, [])

    const getAllUsers = async () => {
        // if (user && user.uid) {
        // const q = query(collection(db, "users"), where("user", "==", user.uid));
        try {
            // const querySnapshot = await getDocs(q);
            const querySnapshot = await getDocs(collection(db, "users"));
            let userResults = []
            querySnapshot.forEach(doc => {
                userResults.push({
                    ...doc.data(),
                    uid: doc.id,
                })
            })
            setUsers(userResults)
            console.log(users);

        } catch (error) {

            // }
        }
    }

    useEffect(() => {
        getAllUsers()
    }, [user])
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead className='uppercase'>
                        <tr>
                            {/* <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th> */}
                            <th>{tasks.length} Tasks</th>
                            <th>Description</th>
                            <th>Due Date</th>
                            <th>Assignee</th>
                        </tr>
                    </thead>
                    {tasks.map((task) => (
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                {/* <th>
                             <label>
                                 <input type="checkbox" className="checkbox" />
                             </label>
                         </th> */}
                                <td>
                                    <div className="flex items-center space-x-3">
                                        {/* <div className="avatar">
                                     <div className="mask mask-squircle w-12 h-12">
                                         <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                     </div>
                                 </div> */}
                                        <div>
                                            <div className="font-bold">{task.name}</div>
                                            {/* <div className="text-sm opacity-50">United States</div> */}
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {task.desc}dfdfdf
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>
                                <td>{task.dueDate}2023</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Assign to</button>
                                    <select name="" id="">
                                        {users.map((user) => (
                                            <option value="">{user.email}</option>
                                        ))}
                                    </select>
                                </th>
                            </tr>

                        </tbody>
                    ))}
                </table>
            </div>
        </div>
    );
};

export default Home;