import React from 'react';

const AllOrders = () => {
    return (
        <div>
            <div>
                <h2 className='text-xl font-bold inline-block'>Manage Users</h2>

                <div className="overflow-x-auto mt-5">
                    <table className="table min-h-0 w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>img</th>
                                <th>Name</th>
                                <th>Make Admin</th>
                            </tr>
                        </thead>
                        <tbody>


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllOrders;