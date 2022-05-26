import React from 'react';

const Portfolio = () => {
    return (
        <div className='md:px-20 bg-slate-400 py-10 '>
            <div className='text-center'>
                <h1 className='text-2xl md:text-4xl font-bold'>Anupam Mitra Apan</h1>
                <h3 className=' md:text-2xl font-bold'>Font-end Web Developer</h3>
                <p >anupamapan0905@gmail.com</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-10'>
                <div>
                    <h2 className='font-bold text-3xl mb-5'>Technical Skills</h2>
                    <table>
                        <tr className='pr-5'>
                            <td><h4 className='text-xl font-semibold pr-10 pb-2'>HTML</h4></td>
                            <td> <progress className="progress progress-primary w-56 h-4" value="90" max="100"></progress></td>
                        </tr>
                        <tr className='pr-5'>
                            <td><h4 className='text-xl font-semibold pr-10 pb-2'>CSS</h4></td>
                            <td> <progress className="progress progress-primary w-56 h-4" value="80" max="100"></progress></td>
                        </tr>
                        <tr className='pr-5'>
                            <td><h4 className='text-xl font-semibold pr-10 pb-2'>JS</h4></td>
                            <td> <progress className="progress progress-primary w-56 h-4" value="69" max="100"></progress></td>
                        </tr>
                        <tr className='pr-5'>
                            <td><h4 className='text-xl font-semibold pr-10 pb-2'>Tailwind</h4></td>
                            <td> <progress className="progress progress-primary w-56 h-4" value="90" max="100"></progress></td>
                        </tr>
                        <tr className='pr-5'>
                            <td><h4 className='text-xl font-semibold pr-10 pb-2'>React</h4></td>
                            <td> <progress className="progress progress-primary w-56 h-4" value="80" max="100"></progress></td>
                        </tr>
                        <tr className='pr-5'>
                            <td><h4 className='text-xl font-semibold pr-10 pb-2'>Node JS</h4></td>
                            <td> <progress className="progress progress-primary w-56 h-4" value="60" max="100"></progress></td>
                        </tr>
                        <tr className='pr-5'>
                            <td><h4 className='text-xl font-semibold pr-10 pb-2'>Express JS</h4></td>
                            <td> <progress className="progress progress-primary w-56 h-4" value="65" max="100"></progress></td>
                        </tr>
                        <tr className='pr-5'>
                            <td><h4 className='text-xl font-semibold pr-10 pb-2'>MongoDB</h4></td>
                            <td> <progress className="progress progress-primary w-56 h-4" value="70" max="100"></progress></td>
                        </tr>
                    </table>



                </div>
                <div className='flex justify-center items-center'>
                    <div>
                        <h3 className='font-bold text-3xl'>Education</h3>
                        <h2>BA(Honours) in English</h2>
                        <h3>National University</h3>
                        <i>2018-present</i>
                    </div>

                </div>
            </div>
            <div>
                <h2 className='text-center font-bold text-3xl'>My Projects</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-5 justify-center mt-5 lg:grid-cols-3'>
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/YD6FkNq/mobile-3.png" alt="site" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Book Hut</h2>
                            <p>An inventory management website</p>
                            <div className="card-actions justify-end">
                                <a href="https://book-hut-3072f.web.app/" target="_blank" className="btn btn-primary" rel="noopener noreferrer">Visit</a>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/PFz8M0r/mobile-1.png" alt="site" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Click It </h2>
                            <p>A service Provider Website</p>
                            <div className="card-actions justify-end">
                                <a href="https://click-it-anuapan9.web.app/" target="_blank" className="btn btn-primary" rel="noopener noreferrer">Visit</a>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/dKgCdBd/mobile-2.png" alt="site" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Todo app</h2>
                            <p>A daily life helper apps</p>
                            <div className="card-actions justify-end">
                                <a href="https://todo-task-anupamapan9.web.app/" target="_blank" className="btn btn-primary" rel="noopener noreferrer">Visit</a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;