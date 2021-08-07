import React, {useState} from 'react';
import API from './API';
import './lesson_3';

const Lesson3 = () => {
    const [searchName, setSearchName] = useState('');
    const [serachResult, setSerachResult] = useState('');
    const [searchNameByType, setSearchNameByType] = useState( '');
    const [serachResultByType, setSerachResultByType] = useState('');

<<<<<<< HEAD
    /*const searchFilm = () => {
        API.searchFilmsByTitle(searchName) //тут возвращает ся промис, поэтому ставим then...
            .then(response => {console.log(response);
            if (response.data.Response === "True") {
            setSerachResult(JSON.stringify(response.data.Search))
            } else {
                setSerachResult(response.data.Error)
            }
            })
            .catch(err => console.log(err))
    };*/

   /* const searchFilm = async () => {
       try{
           const res = await  API.searchFilmsByTitle(searchName)
           console.log("response", res)
       } catch(err){

       }
    };*/

    const searchFilm = async () => {
        try{
            const {data} = await  API.searchFilmsByTitle(searchName)
            const {Response, Search, Error} = data;
            console.log("data", data);
            if (Response === "True") {
                setSerachResult(JSON.stringify(Search))
            } else {
                setSerachResult(Error)
            }
        } catch(err){

        }
    };
=======
    /* const searchFilm = () => {
         API.searchFilmsByTitle(searchName)
             .then(response => {
                 if (response.data.Response==="True"){
                     setSerachResult(JSON.stringify(response.data.Search))
                 } else {
                     setSerachResult((JSON.stringify(response.data.Error)))
                 }
                 console.log(response)
             })
             .catch(err => console.log(err))
     };*/

    const searchFilm = async () => {
        try {
            const {data} = await API.searchFilmsByTitle(searchName)
            const {Response, Search, Error} = data;
        } catch (err) {

        }
        API.searchFilmsByTitle(searchName)

    }
>>>>>>> 36e489e5dfdd46811b43a94464a75e54ed3ae88c

    const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
        const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
        API.searchFilmsByType(searchNameByType, type)
    }

    return (
        <div>
            <h1>Promises</h1>
            <div>
                <h3><p>Search by name:</p></h3>
                <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
                <button onClick={searchFilm}>Search</button>
                <div>
                    {serachResult}
                </div>
            </div>

            <div>
                <h3><p>Search by type:</p></h3>
                <input type="text" value={searchNameByType}
                       onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>
                <button onClick={searchByType} data-t='movie'>Movie</button>
                <button onClick={searchByType} data-t='series'>Series</button>
                <div>
                    {serachResultByType}
                </div>
            </div>
        </div>
    );
}
export default Lesson3;