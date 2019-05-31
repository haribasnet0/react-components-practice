import React from 'react';
import Header from './Header';
import FeatureList from './FeatureList';
import RecentWorks from './RecentWorkList';
import Reviews from './Reviews';
import Footer from './Footer';


const  App = () =>{

    return (
        <div>
            <Header />
            <main>
            <FeatureList />
            <RecentWorks />
            <Reviews />
            </main>
            <Footer />
        </div>
    )
}


export default App;