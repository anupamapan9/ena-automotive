import React from 'react';
import code from '../../image/filter.png'
const Blog = () => {
    return (
        <div className='min-h-screen px-5 md:px-20'>
            <h1 className='text-center font-semibold text-primary text-4xl'>Blog</h1>
            {/* question -1  */}
            <div className='my-5'>
                <h2 className='text-xl font-semibold'>1. How will you improve the performance of a React Application?</h2>
                <p>With the help of the technics given blow we can improve the performance or a react app:-</p>
                <ul className='list-disc list-inside'>
                    <li>Memoizing React components to prevent unnecessary re-renders</li>
                    <li>Code-splitting in React using dynamic <code className='bg-gray-400 rounded text-white'>import()</code> </li>
                    <li>Lazy loading images in React</li>
                    <li>Windowing or list virtualization in React.</li>
                </ul>
            </div>


            {/* question -2 */}
            <div className='my-5'>
                <h2 className='text-xl font-semibold'>2. How does prototypical inheritance work?</h2>
                <p>Every object with its methods and properties contains an internal and hidden property known as <code className='bg-gray-400 rounded text-white'>Prototype</code>. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the<code className='bg-gray-400 rounded text-white'>Prototype</code> of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using  <code className='bg-gray-400 rounded text-white'>__proto__.</code></p>

            </div>
            {/* question -3 */}
            <div className='my-5'>
                <h2 className='text-xl font-semibold'>3. Why you do not set the state directly in React.?</h2><p>
                    If we update it directly, calling the <code className='bg-gray-400 rounded text-white'>setProducts(.....)</code>   afterward may just replace the update we made.
                    When we directly update the state like <code className='bg-gray-400 rounded text-white'> products = [...]</code>  , it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. You will lose control of the state across all components. so we use <code className='bg-gray-400 rounded text-white'>setProducts(....)</code>  instead of <code className='bg-gray-400 rounded text-white'>products = [...]</code>
                </p>

            </div>
            {/* question -4*/}
            <div className='my-5'>
                <h2 className='text-xl font-semibold'>4. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                <p>
                    I can use Javascript filter method for find the products data by name.
                </p>
                <img src={code} alt="" />
            </div>
            {/* question -5*/}
            <div className='my-5'>
                <h2 className='text-xl font-semibold'>5.What is a unit test? Why should write unit tests?</h2>
                <p>
                    <b> Unit testing</b>
                    Unit testing is performed during the coding stage of a software development project to test individual units of the application. It's designed to test that each unit of the software code performs as required. A unit might be a class or class method in object-oriented languages and a procedure or function in procedural and functional software languages.
                </p>
                <p>
                    <b> Importance of unit testing</b>
                    Writing software unit test code provides quick, almost instantaneous feedback about the correctness of the coding, including its design and implementation. Test passes and test fails confirm if the software works or doesn't work as intended and can update its vetting every time someone changes a specific piece of code.
                </p>
            </div>
        </div>
    );
};

export default Blog;