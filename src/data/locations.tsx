import { Location } from "../types/Location";

export const locations: Location[] = [
    {
        id: "1",
        name: "Orelhão de Itu",
        image: require("../../assets/images/orelhao.jpg"),
        coordinates: {
            latitude: -23.263575,
            longitude: -47.299865,
        },
    },
    {
        id: "2",
        name: "Farol Gigante de Itu",
        image: require("../../assets/images/semaforo.jpg"),
        coordinates: {
            latitude: -23.263788,
            longitude: -47.299618,
        },
    },
    {
        id: "3",
        name: "Praça dos Exageros",
        image: require("../../assets/images/praca.jpg"),
        coordinates: {
            latitude: -23.253655,
            longitude: -47.314745,
        },
    },
    {
        id: "4",
        name: "Lembranção de Itu",
        image: require("../../assets/images/lembrancao.png"),
        coordinates: {
            latitude: -23.263079,
            longitude: -47.300340,
        },
    },
    {
        id: "5",
        name: "O Gigantão de Itu",
        image: require("../../assets/images/gigantao.png"),
        coordinates: {
            latitude: -23.263592,
            longitude:  -47.299619,
        },
    },
    {
        id: "6",
        name: "A Exótica",
        image: require("../../assets/images/exotica.png"),
        coordinates: {
            latitude: -23.263356,
            longitude: -47.300517,
        },
    },
];