import Box from "./box.jsx"
import Data from "../../Data/data"

export default function MainBox() {
    return (
        <>
            {Data.map((data) =>(
                <Box 
                    key={data.id}
                    {...data}
                />
            ))}
        </>
    )
}