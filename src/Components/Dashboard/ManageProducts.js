import React from 'react';
import useProducts from '../../Hooks/useProducts';
import Loading from '../Common/Loading';
import ManageProductRow from './ManageProductRow';

const ManageProducts = () => {
    const [allProducts, isLoading, refetch] = useProducts()




    if (isLoading) {
        return <Loading />
    }
    return (
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
                        {
                            allProducts?.map((product, index) => <ManageProductRow product={product} index={index} key={product._id} refetch={refetch}></ManageProductRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;