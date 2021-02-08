import React from 'react'

const Makanans = [
    {
        nama : 'Soto',
        harga : 10000
    },
    {
        nama : 'Bakso',
        harga : 5000
    },
    {
        nama : 'Nasi Goreng',
        harga : 7000
    },
    {
        nama : 'Soto Daging',
        harga : 20000
    }
]
const Map = () => {
    
    return (
        <div>
           <ul>
           {Makanans.map((Makanan, index) => (
               <li>{index+1} Nama = {Makanan.nama} -  Harga = {Makanan.harga}</li>
           ))}
           </ul>
           
           {/* filter */}
           <h2>Map with Filter</h2>
           <ul>
           {Makanans
           .filter((Makanan)=> Makanan.harga >= 10000)
           .map((Makanan, index) => (
               <li>{index+1} Nama = {Makanan.nama} -  Harga = {Makanan.harga}</li>
           ))}
           </ul>
        </div>
    )
}

export default Map

