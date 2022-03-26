import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './AboutReact.css';

const AboutReact = () => {
    return (
        <div className='p-5'>
            <hr />
            <br />
            <h1 className='mb-5'>Learn about React</h1>
            <div>
                <h6 className='text-decoration-underline'>How does React works?</h6>
                <p>React uses a virtual DOM, which is essentially a JavaScript version of a DOM tree. As a result, it will utilize the virtual representation of the DOM when reading or writing to it. The virtual DOM will then attempt to update the browser's DOM in the most efficient manner possible.
                    React elements, unlike browser DOM components, are simple objects that are easy to generate. The DOM is updated to match the React elements using React DOM. This is because JavaScript is extremely fast, and it's worth having a DOM tree in it to speed up its manipulation.</p>
                <br />
                <h6 className='text-decoration-underline'>Props Vs State</h6>
                <table>
                    <thead>
                        <tr>
                            <th>Props</th>
                            <th>State</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>The Data is passed from one component to another.</td>
                            <td>The Data is passed within the component only.</td>
                        </tr>
                        <tr>
                            <td>Cannot be modified.</td>
                            <td>Can be modified.</td>
                        </tr>
                        <tr>
                            <td>Props can be used with state and functional components.</td>
                            <td>State can be used only with the state components/class component.</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <br />
                <h6 className='text-decoration-underline'>How useState works?</h6>
                <p>useState is a Hook that enables state variables to be used in functional components. This function takes the starting state and returns a variable with the current state value and another function to update it. In function components, the useState hook lets us to declare one or more state variables. React maintains track of these state variables in the background and guarantees that they are updated on successive re-renders of the component.</p>
            </div>
            <br />
            <hr />
        </div>
    );
};

export default AboutReact;