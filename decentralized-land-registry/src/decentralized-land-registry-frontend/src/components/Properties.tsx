import React from 'react';
import PropertyCard from './PropertyCard';
import SearchBar from './SearchBar';

export default function Properties() {
  const properties = [
    {
      id: 1,
      title: 'Modern Villa with Pool',
      location: 'East Legon, Accra',
      owner: '0x1234...5678',
      date: '2024-03-15',
      status: 'Verified',
      image: 'https://plus.unsplash.com/premium_photo-1661963869605-4b5f4c8e55f2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZHxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 2,
      title: 'Downtown Penthouse',
      location: 'Osu, Accra',
      owner: '0x8765...4321',
      date: '2024-03-14',
      status: 'Pending',
      image: 'https://images.unsplash.com/photo-1695201704218-a864a25412d0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVpbGRpbmclMjBsYW5kc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 3,
      title: 'Beachfront Property',
      location: 'Labadi, Accra',
      owner: '0x2468...1357',
      date: '2024-03-13',
      status: 'Verified',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'Luxury Apartment in Osu',
      location: 'Osu, Accra',
      owner: '0x9876...5432',
      date: '2024-04-10',
      status: 'Verified',
      image: 'https://plus.unsplash.com/premium_photo-1709440655728-295d8c1cb722?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1aWxkaW5nJTIwbGFuZHN8ZW58MHx8MHx8fDA%3D'
    },
    {
      id: 5,
      title: 'Hillside Mansion',
      location: 'Aburi, Accra',
      owner: '0x6543...2109',
      date: '2024-04-09',
      status: 'Pending',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      title: 'Cozy Home Near the Beach',
      location: 'Ada Foah, Accra',
      owner: '0x3210...9876',
      date: '2024-04-08',
      status: 'Verified',
      image: 'https://images.unsplash.com/photo-1671379827778-dabc2f558b60?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJ1aWxkaW5nJTIwbGFuZHN8ZW58MHx8MHx8fDA%3D'
    },
    {
      id: 7,
      title: 'Family House in Accra',
      location: 'Adum, Accra',
      owner: '0x7890...1234',
      date: '2024-04-07',
      status: 'Verified',
      image: 'https://plus.unsplash.com/premium_photo-1713893930832-a9706951fd63?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJ1aWxkaW5nJTIwbGFuZHN8ZW58MHx8MHx8fDA%3D'
    },
    {
      id: 8,
      title: 'Spacious Bungalow',
      location: 'Dansoman, Accra',
      owner: '0x1234...5678',
      date: '2024-04-06',
      status: 'Pending',
      image: 'https://images.unsplash.com/photo-1697382803109-24c6d1d5a46c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1aWxkaW5nJTIwbGFuZHN8ZW58MHx8MHx8fDA%3D'
    },
    {
      id: 9,
      title: 'Beach Resort Property',
      location: 'Keta, Accra',
      owner: '0x8765...4321',
      date: '2024-04-05',
      status: 'Verified',
      image: 'https://media.istockphoto.com/id/1145315464/photo/building-plot-melbourne.webp?a=1&b=1&s=612x612&w=0&k=20&c=mvEU7SJ4u7cWBwIYRNjsRY5U4cqLDLMUh4yOC_lw8xc='
    },
    {
      id: 10,
      title: 'Lakeside Villa',
      location: 'Lake Bosomtwe, Accra',
      owner: '0x2468...1357',
      date: '2024-04-04',
      status: 'Pending',
      image: 'https://media.istockphoto.com/id/1197110869/photo/composite-of-a-modern-house-during-and-after-construction.webp?a=1&b=1&s=612x612&w=0&k=20&c=UuzCZYG58iFSkOzs9Mh3DrtbECsun11SBVMn-1gGN20='
    },
    {
      id: 11,
      title: 'Stylish Apartment',
      location: 'East Legon, Accra',
      owner: '0x1357...2468',
      date: '2024-04-03',
      status: 'Verified',
      image: 'https://images.unsplash.com/photo-1697382803182-0ddfba7b82b8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnVpbGRpbmclMjBsYW5kc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 12,
      title: 'Riverfront Retreat',
      location: 'Akosombo, Accra',
      owner: '0x7891...2345',
      date: '2024-04-01',
      status: 'Verified',
      image: 'https://images.unsplash.com/photo-1541944743827-e04aa6427c33?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 13,
      title: 'Rural Cottage',
      location: 'Navrongo, Accra',
      owner: '0x3423...5432',
      date: '2024-03-31',
      status: 'Pending',
      image: 'https://images.unsplash.com/photo-1697382803141-f948801429ca?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVpbGRpbmclMjBsYW5kc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 14,
      title: 'Elegant Estate',
      location: 'Tema, Accra',
      owner: '0x5678...9876',
      date: '2024-03-30',
      status: 'Verified',
      image: 'https://plus.unsplash.com/premium_photo-1675187975486-e659bff91a9f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXN0YXRlcyUyMGxhbmRzfGVufDB8fDB8fHww'
    },
    {
      id: 15,
      title: 'City Center Apartment',
      location: 'Accra Central, Accra',
      owner: '0x1234...5678',
      date: '2024-03-29',
      status: 'Pending',
      image: 'https://plus.unsplash.com/premium_photo-1728752327220-b739a960efec?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGVzdGF0ZXMlMjBsYW5kc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 16,
      title: 'Mountain View Cabin',
      location: 'Aburi, Accra',
      owner: '0x7890...4321',
      date: '2024-03-28',
      status: 'Verified',
      image: 'https://images.unsplash.com/photo-1683275381357-2ab76b4d5c65?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVpbGRpbmclMjBsYW5kc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 17,
      title: 'Highland Retreat',
      location: 'Aburi, Accra',
      owner: '0x9876...5432',
      date: '2024-03-27',
      status: 'Verified',
      image: 'https://images.unsplash.com/photo-1594976674438-27b4672a2388?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZXN0YXRlcyUyMGxhbmRzfGVufDB8fDB8fHww'
    },
    {
      id: 18,
      title: 'Beachside Cottage',
      location: 'Labadi, Accra',
      owner: '0x5432...8765',
      date: '2024-03-26',
      status: 'Verified',
      image: 'https://images.unsplash.com/photo-1719299225324-301bad5c333c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVzdGF0ZXMlMjBsYW5kc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 19,
      title: 'Luxurious Penthouse',
      location: 'Osu, Accra',
      owner: '0x2345...9876',
      date: '2024-03-25',
      status: 'Verified',
      image: 'https://images.unsplash.com/photo-1719299224357-19232e85e6ff?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGVzdGF0ZXMlMjBsYW5kc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 20,
      title: 'Modern Townhouse',
      location: 'East Legon, Accra',
      owner: '0x1234...5678',
      date: '2024-03-24',
      status: 'Verified',
      image: 'https://media.istockphoto.com/id/1485245299/photo/suburban-houston-development.webp?a=1&b=1&s=612x612&w=0&k=20&c=izpjwux-lw2YW1wkpP78IWWMzMexV33xkARPGpTMEy8='
    },
    {
      id: 21,
      title: 'Cozy Apartment',
      location: 'Osu, Accra',
      owner: '0x8765...4321',
      date: '2024-03-23',
      status: 'Pending',
      image: 'https://media.istockphoto.com/id/1303307130/photo/aerial-view-of-new-wealthy-homes-in-adelaide-foothills.webp?a=1&b=1&s=612x612&w=0&k=20&c=a_bSxuGVJPddNPZ_NYaaQPXz0JJtcLOtm6ZaAjRYALg='
    },
    {
      id: 22,
      title: 'Luxury Villa',
      location: 'East Legon, Accra',
      owner: '0x2468...1357',
      date: '2024-03-22',
      status: 'Verified',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 23,
      title: 'Modern Apartment',
      location: 'Osu, Accra',
      owner: '0x9876...5432',
      date: '2024-03-21',
      status: 'Verified',
      image: 'https://media.istockphoto.com/id/1324257674/photo/land-plot-in-aerial-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=h1swAIW_cwBLQIm0Ir0TBzfs7y0KNl1fqwRzTK5qHcM='
    },
    {
      id: 24,
      title: 'Beachfront Villa',
      location: 'Labadi, Accra',
      owner: '0x6543...2109',
      date: '2024-03-20',
      status: 'Pending',
      image: 'https://media.istockphoto.com/id/1666618630/photo/new-residential-area-at-cannes-neighbourhood-park-and-major-mackenzie-dr-woodbridge-canada.jpg?s=612x612&w=0&k=20&c=e6SzovjWpmwG5_h6hqVgFIL9YUShA4wLmcf7SCwCy5w='
    },
    {
      id: 25,
      title: 'Cozy Beach House',
      location: 'Ada Foah, Accra',
      owner: '0x3210...9876',
      date: '2024-03-19',
      status: 'Verified',
      image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhaCUyMGhvdXNlfGVufDB8fDB8fHww'
    },
    {
      id: 26,
      title: 'Family Home',
      location: 'Adum, Accra',
      owner: '0x7890...1234',
      date: '2024-03-18',
      status: 'Verified',
      image: 'https://images.unsplash.com/photo-1464146072230-91cabc968266?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhaCUyMGhvdXNlfGVufDB8fDB8fHww'
    },
    {
      id: 27,
      title: 'Spacious Villa',
      location: 'Dansoman, Accra',
      owner: '0x1234...5678',
      date: '2024-03-17',
      status: 'Pending',
      image: 'https://images.unsplash.com/photo-1455275505851-8e604db9675a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 28,
      title: 'Beachfront Resort',
      location: 'Keta, Accra',
      owner: '0x8765...4321',
      date: '2024-03-16',
      status: 'Verified',
      image: 'https://plus.unsplash.com/premium_photo-1684348962187-988fc3d7f024?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 29,
      title: 'Lakeside Mansion',
      location: 'Lake Bosomtwe, Accra',
      owner: '0x2468...1357',
      date: '2024-03-15',
      status: 'Pending',
      image: 'https://images.unsplash.com/photo-1544143086-828f66ac3945?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYWNoJTIwaG91c2V8ZW58MHx8MHx8fDA%3D'
    },
    {
      id: 30,
      title: 'Stylish Mansion',
      location: 'East Legon, Accra',
      owner: '0x1357...2468',
      date: '2024-03-14',
      status: 'Verified',
      image: 'https://images.unsplash.com/photo-1528913775512-624d24b27b96?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">Featured Properties</h2>
        <SearchBar />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}