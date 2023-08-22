# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Tips

- Cuando se tiene una información y dicha información va a ir siendo modificada a travez del tiempo quiere decir que neceisto de un hook

## Use Effect

``` js
  useEffect( () => {
        getGifts(category);
    }, [ ]);
```

Si dejo el argumento de las dependencia vacias ( las llaves vacias ), significa que eso solo se ejecutara una vez cuando se renderiza por primera vez el componente.

## Personalized Hooks

Un hook no es más que una función que regresa algo.

```js
export const useFetchGifs = () => {
    return{
        test: test
    }
}
```
