import React from "react";

const Blog = () => {
  return (
    <div className="p-10">
      <h1 className="text-5xl text-primary font-bold p-12">Blogs</h1>
      <div>
        <h1 className="text-2xl text-primary p-12">
          1.How will you improve the performance of a React Application?
        </h1>
        <p>
          In react application we can use react query to make the fetch and
          caching related work smooth.We can also use react date picker if we
          want to ad any date and use it efficiently.Many in build hooks are
          there of react which we can add in our application to make out react
          application very dynamic.
        </p>
        <h1 className="text-2xl text-primary p-12">
          2.Why you do not set the state directly in React. For example, if you
          have const \ = useState. Why you do not set products = instead, you
          use the setProducts?
        </h1>
        <p>
          When we use useState hook we take two parameter as products and
          setProducts when we pass data indise setproduct all the individual
          data make an array and it get stored inside products ,So we need not
          to pass it iexternally.{" "}
        </p>
        <h1 className="text-2xl text-primary p-12">
          3.You have an array of products. Each product has a name, price,
          description, etc. How will you implement a search to find products by
          name?
        </h1>
        <p>I will use find function.products.find namename==="rudba"</p>
        <h1 className="text-2xl text-primary p-12">
          4.What are the different ways to manage a state in a React
          application?
        </h1>
        <p>
          We can use custom hooks for defining state and we can set state inside
          the component also.
        </p>
        <h1 className="text-2xl text-primary p-12">
          5.How does prototypical inheritance work?
        </h1>
        <p>
          It is a feature in javascript in which we can user methods of objects
        </p>
      </div>
    </div>
  );
};

export default Blog;
