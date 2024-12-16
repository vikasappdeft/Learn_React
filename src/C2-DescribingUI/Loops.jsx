import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { zTouch } from 'react-syntax-highlighter/dist/esm/styles/prism'

const Loops = () => {
    const codeString =`
        import React from 'react'
        import SyntaxHighlighter from 'react-syntax-highlighter'
        import { zTouch } from 'react-syntax-highlighter/dist/esm/styles/prism'

        const Loops = () => {

            const userData = [
                {
                    id: '1',
                    name: 'Sam',
                    email: 'sam@appdeft.biz',
                    department: 'Engineering'
                },
                {
                    id: '2',
                    name: 'Luis',
                    email: 'luis@appdeft.biz',
                    department: 'Human Resource'
                },
                {
                    id: '3',
                    name: 'Peter',
                    email: 'peter@appdeft.biz',
                    department: 'Engineering'
                },
                {
                    id: '4',
                    name: 'Jacob',
                    email: 'jacob@appdeft.biz',
                    department: 'Engineering'
                }
            ]
            return (
                <div className="container py-4">
                    <h1 className="mb-4"><span className="badge bg-secondary">Loops in React</span></h1>

                    <div className="table-responsive">
                        <table className="table table-bordered table-hover">
                            <thead className="table-secondary">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Department</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userData.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.department}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <ul class="list-group list-group">
                            <li class="list-group-item">
                                <h4>Lets discuss loops functionality</h4>
                                <pre>
                                    <code>
                                    <SyntaxHighlighter language="javascript" style={zTouch}>
                                        {userData}
                                    </SyntaxHighlighter>
                                    </code>
                                </pre>
                                <p>
                                In this we have four skills in checkboxes so we created a function to handle this.
                                </p>
                            
                            </li>
                            <li class="list-group-item">
                                <p>
                                functionality :: if checkbox is checked then skills array we're putting the checked boxes values by using spred operator <code>(...)</code> else using filter function with arrow function to remove unchecked boxes value
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        }

        export default Loops

    `;
    const userData = [
        {
            id: '1',
            name: 'Sam',
            email: 'sam@appdeft.biz',
            department: 'Engineering'
        },
        {
            id: '2',
            name: 'Luis',
            email: 'luis@appdeft.biz',
            department: 'Human Resource'
        },
        {
            id: '3',
            name: 'Peter',
            email: 'peter@appdeft.biz',
            department: 'Engineering'
        },
        {
            id: '4',
            name: 'Jacob',
            email: 'jacob@appdeft.biz',
            department: 'Engineering'
        }
    ]
    return (
        <div className="container py-4">
            <h1 className="mb-4"><span className="badge bg-secondary">Loops in React</span></h1>

            <div className="table-responsive">
                <table className="table table-bordered table-hover">
                    <thead className="table-secondary">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Department</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.department}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>
                <ul class="list-group list-group">
                    <li class="list-group-item">
                        <h4>Lets discuss loops functionality</h4>
                        <pre>
                            <code>
                            <SyntaxHighlighter language="javascript" style={zTouch}>
                                {codeString}
                            </SyntaxHighlighter>
                            </code>
                        </pre>
                        <p>
                        In this we have <code>userData</code> which we want to render in table. To achive that we used <code>map function</code>.
                        </p>
                    
                    </li>
                    <li class="list-group-item">
                        <p>
                            Things to consider in this you can see a <code>key </code> is passed to <code>tr</code> because if the data is changed dynamically this component needs a key value to re-render it self.
                        </p>
                    </li>
                    <li class="list-group-item">
                        <p>
                        
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Loops
