import {useEffect, useState} from "react";
import axios from "axios";
import AlbumForm from "./AlbumForm";


export default function DataDisplay() {
    const [albums, setAlbums] = useState<any[]>()
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums')
            .then(response => {
                setAlbums(response.data)

            })
    }, []);
    return (
        <>
            <ul>{albums?.map(album =>
                <li key={album.id}> {album.title}</li>)}
            </ul>
            <AlbumForm setAlbums={setAlbums}/>
        </>
    )
}