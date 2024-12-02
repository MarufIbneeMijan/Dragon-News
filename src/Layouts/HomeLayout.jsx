import React from 'react';
import Header from '../Components/Header';
import Marquee from '../Components/MarqueeSection';
import MarqueeSection from '../Components/MarqueeSection';
import Nav from '../Components/Nav';
import LeftNav from '../Components/MainSectionComponents/LeftNav';
import RightNav from '../Components/MainSectionComponents/RightNav';
import HomeNews from '../Components/MainSectionComponents/HomeNews';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className='font-[Poppins]' >
            <header>
                <Header></Header>
                <section>
               <MarqueeSection></MarqueeSection>
                </section>
            </header>
           
            <nav>

                <Nav></Nav>
            </nav>
            <main className='w-11/12 mx-auto grid md:grid-cols-12 gap-5'>
                <aside className='left col-span-3' ><LeftNav></LeftNav></aside>
                <section className='col-span-6' ><Outlet></Outlet></section>
                <aside className='col-span-3' ><RightNav></RightNav></aside>
            </main>
        </div>
    );
};

export default HomeLayout;