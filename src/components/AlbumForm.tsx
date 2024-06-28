import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup"
import React, {Dispatch, SetStateAction} from "react";
import {useForm} from "react-hook-form";
import axios from "axios";

interface DataProps {
    setAlbums: Dispatch<SetStateAction<any[] | undefined>>;

}

export default function AlbumForm({setAlbums}:DataProps) {
    const schema = yup.object().shape({
        userId: yup.number().max(4).required("User ID required"),
        title: yup.string().min(4).max(30).required("Title is required")
    })
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            userId: 1,
            title: ""
        }
    })
    const onSubmit = (formData: { userId: number, title: string }) => {
        console.log(formData);
        axios.post('https://jsonplaceholder.typicode.com/albums', {
            title: formData.title
        }).then(response => {
            setAlbums(prevState => {
                console.log(prevState);
                // prevState= old data in albums
                prevState?.push(response.data)
                // prevState now current data
                console.log(prevState)
                return [...prevState as any []];
            })
            throw Error ("Submission failed")
        })
    }
    const formKeys: {id: string, name: "title"}[] = [{
        id: "c", name: "title"}]

    return (
        <div className="App">
            <header className="App-header"></header>
            <h2 className="header">Add Album</h2>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                {formKeys.map(item => (
                    <>
                        <label>User ID</label>
                        <select id="a">
                            <option key="1">1</option>
                            <option key="2">2</option>
                            <option key="3">3</option>
                            <option key="4">4</option>
                            <option key="5">5</option>
                            <option key="6">6</option>
                            <option key="7">7</option>
                            <option key="8">8</option>
                            <option key="9">9</option>
                            <option key="10">10</option>
                        </select>
                        <input placeholder="title" id="c"{...register(item.name)}/>
                    </>
                ))}
                <button className="button">Submit </button>
            </form>

        </div>
    )
}
