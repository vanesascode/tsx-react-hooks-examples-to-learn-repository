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
