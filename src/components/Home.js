import React, { useState, useEffect } from 'react'
import '../css/Home.css'
import faker from 'faker'
import Card from './Card'
import { Grid } from "@material-ui/core";
faker.locale = "en";

function Home() {
    
    const [data, setCardData] = useState([]);

    useEffect( () => {
        
        let fakeData = [];
        for (let index = 0; index < 13; index++) {
            const element = {
                src: faker.random.image(),
                title: faker.company.companyName(),
                description: faker.commerce.productDescription(),
                price: faker.finance.amount()
            }
            console.log(fakeData);
            fakeData.push(element)
        }
        setCardData(fakeData);
        console.log(data);
        
    }, []);

    return (
        <div className="home">
            
           <Grid container>

           {data.map((data1) => (
                
            <Grid item xs = {12} sm = {6} md = {4} lg = {3}>
                <Card
                    src={data1.src}
                    title={data1.title}
                    description={data1.description}
                    price={data1.price}
                    />
            </Grid>

            ))}
           </Grid>
        </div>
    )
}

export default Home
