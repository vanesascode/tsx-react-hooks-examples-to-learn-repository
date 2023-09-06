# TSX React hook typical uses repository - To learn them well

Many examples of use of the hooks, and typical mistakes, so I can interiorize them.
Each one in a different component.

Also an example of a way of organizing data and rendering with props.

## 🌟VITE

- To create a project:

- [x] run: `npm create vite@latest`

select 'React' as the framework and select 'Javascript' as the variant.

- [x] run: `npm install` to install all the dependencies

---

- To run the project:

- [x] run: `npm run dev`

---

## 🌟TAILWIND

Go to the frameworks guides. [In this case for Vite](https://tailwindcss.com/docs/guides/vite)

- [x] `npm install -D tailwindcss postcss autoprefixer`

- [x] `npx tailwindcss init -p`

To generate a TypeScript config file, use the --ts flag:

- [x] `npx tailwindcss init --ts`

💡 Generate a complete configuration file that includes all of Tailwind’s default configuration:

- [x] `npx tailwindcss init --full`

---

## 🌟useState Efficiency

When the state value managed by useState is updated, React re-renders the component and any child components that depend on that state.

To optimize React think of the following:

- Do you have several useState in a row, think of using useMemo if some are going to be needed more than others( look at `UseMemoEfficiency.tsx`)

- Do you really need the useEffect you are using? Maybe you can use useRef? (Have a look at `RedundantUseEffect.tsx` and `InputUseRef.tsx`)

---

## 🌟Organizing data and rendering with props

🔹We're rendering a card component (`PropsExampleCard.tsx`)into another component (`PropsExampleMainComponent.tsx`), importing it through the `index.tsx` file in the `components` folder.

🔹The card passes some props to the main component.

🔹The info we give to the main component, to fild such props, comes from a data file (`index.tsx` in the `constants` folder) that has the data ready to iterate. 👉This way, if somebody who is not a programmer has to modify the data, can do it.

🔹The pics into this data file, are imported from another file (`index.tsx` in the `assets/icons` folder) 👉Then, we don't repeat so much code into the main component, and it gets cleaner.

🔹Remember: in the Card component, the interface must define the elements with the same property names that you find in each object of the array of the data file, so then, in the main component you can just import the data file and apply it with an `spread operator`:

```
 {propsExampleData.map((data) => (
        <PropsExampleCard key={data.label} {...data} />
      ))}

```

## 🌟Fetching data and rendering errors

In the file `FetchAbortController` we fetch data from a free API.

### We use the `Abort Controller`:

The AbortController is useful when fetching data because it allows you to cancel or abort a fetch request. This can be helpful in scenarios where you want to stop an ongoing fetch operation, such as when a user navigates away from a page or when a component is unmounted before the fetch request is completed.

Here are a few reasons why the AbortController is useful:

Cancellation of ongoing requests: With the AbortController, you can cancel an ongoing fetch request by calling the abort() method on the controller. This can help improve the user experience and reduce unnecessary network traffic.

Prevention of unnecessary processing: By aborting a request, you can prevent unnecessary processing of the response data and avoid potential memory leaks or other issues that may arise from handling incomplete or irrelevant data.

Cleanup and resource management: Aborting a request through the AbortController allows you to clean up any resources associated with the request, such as event listeners or memory allocations. This can help improve the overall performance and efficiency of your application.

Here's an example of how you can use the AbortController to cancel a fetch request:

```
import { useEffect, useState } from "react";

const fetchData = async (signal: AbortSignal) => {
  try {
    const response = await fetch("https://api.example.com/data", { signal });
    // Process the response data
  } catch (error) {
    // Handle errors
  }
};

const MyComponent: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const controller = new AbortController();
  const { signal } = controller;

  useEffect(() => {
    fetchData(signal)
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        // Handle errors
      });

    return () => {
      controller.abort(); // Cancel the request when the component unmounts
    };
  }, [signal]);

  // Render your component
};
```

In this example, we create a new AbortController and obtain the signal from it. The signal is then passed to the fetch request as an option, which allows you to cancel the request by calling controller.abort().

By using the AbortController and its associated AbortSignal, you have more control over the lifecycle of fetch requests and can handle scenarios where cancellation or cleanup is necessary.

### We use [react-error-boundary](https://github.com/bvaughn/react-error-boundary):

- [x] Install: `npm install react-error-boundary`

- [x] Import where the fetching component is rendered:

```
import { ErrorBoundary } from "react-error-boundary";

```

- [x] Wrap the component:

```
      <ErrorBoundary
        fallback={<div>Sorry, the data couldn't be loaded :)</div>}
      >
        <FetchAbortController />
      </ErrorBoundary>
```

---
