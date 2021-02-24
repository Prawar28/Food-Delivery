import React, { useState, useEffect } from 'react'
import faker from 'faker'
import '../css/SearchPage.css'
import SearchCard from './SearchCard';
import Header from './Header';


function SearchPage() {

    const [data, setCardData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [check, setCheck] = useState('');

    useEffect( () => {
        
        let fakeData = [];
        for (let index = 0; index < 20; index++) {
            const element = {
                src: faker.random.image(),
                title: faker.company.companyName(),
                description: faker.commerce.productDescription(),
                price: faker.finance.amount()
            }
            fakeData.push(element)
        }
        setFilter(fakeData);
        setCardData(fakeData);
        
        
    }, []);

    var filterData = function(e){
        console.log(e.target.value);
        setCheck(e.target.value.toLowerCase());
    }

    return (
        <div>
            <Header filterData={filterData}/>

            <div className="searchPage">

                
                {filter.map((data1) => (
                    
                    //search conditions
                    (check == '' || (data1.title.toLowerCase()).indexOf(check) != -1) &&

                   ( <SearchCard
                    img={data1.src}
                    title={data1.title}
                    description={data1.description}
                    star={Math.round((Math.random()*5))}
                    price={data1.price}
                    />)
                ))}

            </div>

        </div>
    )
}

export default SearchPage
