import React, { useState, useEffect } from "react";
import items from './data';

const RoomContext = React.createContext();

function RoomProvider({ children }) {
    const [context, setContext] = useState({
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true
    });

    const formatData = (items) => {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image =>
                image.fields.file.url
            );
            let room = { ...item.fields, images, id };
            return room;
        });
        return tempItems;
    };

    useEffect(() => {
        let rooms = formatData(items);
        console.log(rooms)
        let featuredRooms = rooms.filter(room => room.featured === true);
        setContext({
            rooms,
            sortedRooms: rooms,
            featuredRooms,
            loading: false
        });
    }, []);

    return (
        <RoomContext.Provider value={{ ...context }}>
            {children}
        </RoomContext.Provider>
    );
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
