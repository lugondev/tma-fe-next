import {useGetAllCourtsQuery, CourtType} from "../redux/rtk-api/courts-api";
import Link from "next/link";

export default function Courts() {
    // Using a query hook automatically fetches data and returns query values
    const {data, error, isLoading} = useGetAllCourtsQuery();
    // Individual hooks are also accessible under the generated endpoints:
    // const { data, error, isLoading } = courts-api.endpoints.useGetAllCourtsQuery.useQuery('bulbasaur')

    console.log(data);
    // render UI based on data and loading state
    return (
        <>
            <div>
                <Link href={'/'}>
                    <a>
                        <h1>Home Page</h1>
                    </a>
                </Link>

                <ol>
                    {(isLoading) ? <h1>Loading Courts</h1> : data?.map((court: CourtType, index: number) => {
                        return <li key={index}>{court.court_name}</li>
                    })}
                </ol>
            </div>
        </>
    );
}