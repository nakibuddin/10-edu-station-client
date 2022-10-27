import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>            
            <h3> What is cors:</h3>
            <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
            
            <h3>Why am I using firebase? What other options do I have to implement authentication:</h3>
            <p>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.</p>
            <p>Back4app is a reliable Firebase alternative that works with an amalgamation of open-source technologies. The platform is straightforward to use and has a low learning curve. For instance, it offers features like a relational data model, scalable hosting, REST and GraphQL APIs, notifications, authentication, and storage. You can build relational data models and run deep queries using a robust serverless environment.</p>
            <p>Parse is a comprehensive application stack that will help you build applications faster. It is an open-source backend framework that is free to use and download. It is a terrific free Firebase alternative. For example, the core features of Parse include an easy-to-use dashboard, graphical database interface, APIs, and object storage adapters to multiple services like S3, etc. Another advantage of Parse is the multi-cloud deployment options. Considering that the entire framework is open-source, you can download the repositories on Github and self-host your application in any major cloud like AWS, Digital Ocean, Google Cloud, etc. Parse has been running for a long time, and a large and engaged developer community supports it. It has more than 35k Github stars, and it is a thoroughly tested framework for developing applications faster.</p>
            
            
            <h3>How does the private route work:</h3>
            <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
            
            <h3>What is Node? How does Node work:</h3>
            <p>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return</p>
            <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>

        </div>
    );
};

export default Blog;