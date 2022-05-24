import React from 'react';
import useProducts from '../../Hooks/useProducts';
import Loading from '../Common/Loading';

const ManageProducts = () => {
    const [allProducts, isLoading, refetch] = useProducts()
    console.log(allProducts)
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
                            allProducts?.map((product, index) => <tr>
                                <th>{index + 1}</th>
                                <td><div class="avatar">
                                    <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={product.image} alt='' />
                                    </div>
                                </div></td>
                                <td>{product.name}</td>
                                <td>fsdafsdafdas</td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;