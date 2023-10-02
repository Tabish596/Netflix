import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured"
import List from "../../components/list/List";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = ({ type }) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        const getRandomList = async () => {
            try {
                const res = await axios.get(`lists${type ? "?type=" + type : ""}&${genre ? "?genre=" + genre : ""}`, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDVlODkxNzgzZDFkMDgxYTQ0MTE5YyIsImlzQWRtaW4iOiJ0cnVlIiwiaWF0IjoxNjk2MjQ4MDI0LCJleHAiOjE2OTY2ODAwMjR9.1klvY84Uvswr74cYhOOWVrthohDjK689l-R-4vIO3RU"
                    }
                });
                console.log(res);
            }
            catch (err) {

            }
        }
        getRandomList();
    }, [type, genre])

    return (
        <div>
            <Navbar />
            <Featured type={type} />
            {lists.map((list,index) => {
                <List />
            })}
        </div>
    )
}

export default Home;