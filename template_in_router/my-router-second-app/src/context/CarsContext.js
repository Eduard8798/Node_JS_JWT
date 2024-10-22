import React, { createContext, useContext, useState } from 'react';

// Создаем контекст
const PageContext = createContext();

// Создаем провайдер для контекста
export const CarsContextProvider = ({ children }) => {

const [carModels,setCarModels] = useState([
    {vendor: 'bmw',name: 'x3'},
    {vendor: 'bmw',name: 'x5'},
    {vendor: 'jeep',name: 'GrandCherokee'},
    {vendor: 'jeep',name: 'Wrangler'},
    {vendor: 'lexus',name: 'ls250'},
    {vendor: 'lexus',name: 'rx250'},

]);

const [carVendors,setCarVendors] = useState([
    {slug: 'bmw', name: 'BMW'},
    {slug: 'jeep', name: 'JEEP'},
    {slug: 'lexus', name: 'Lexus'}
]);

// добавили  ev что бы можно было обратиться к getDataFromServer
const getDataFromServer = (ev) => {
    ev.preventDefault()
console.log('FETCH => get/api/cars')
}
    return (
        <PageContext.Provider
            value={{ carModels,carVendors,getDataFromServer }}>
            {children}
        </PageContext.Provider>
    );
};

// Создаем хук для удобного доступа к контексту
export const useCarsContext = () => {
    return useContext(PageContext);
};