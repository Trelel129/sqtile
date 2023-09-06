import clsx from 'clsx';
import * as React from 'react';

import Button from '@/components/buttons/Button';
import DashboardLayout from '@/components/layout/dashboard/DashboardLayout';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

type OptionType = {
  title: string;
  color?: string;
};
//#region  //*=========== Constant ===========
const RARITY_OPTIONS: OptionType[] = [
  {
    title: 'Biasa',
    color: 'bg-black',
  },
  {
    title: 'Tidak Biasa',
    color: 'bg-green-500',
  },
  {
    title: 'Langka',
    color: 'bg-cyan-500',
  },
  {
    title: 'Unik',
    color: 'bg-purple-500',
  },
  {
    title: 'Legenda',
    color: 'bg-orange-500',
  },
  {
    title: 'Mistik',
    color: 'bg-red-500',
  },
];

const TYPE_OPTIONS: OptionType[] = [
  {
    title: 'Lahan',
  },
  {
    title: 'Bangunan',
  },
];

const OPTIONS = [
  <FilterSelection title='Semua' key='all' />,

  RARITY_OPTIONS.map((rarity, i) => (
    <FilterSelection key={i} title={rarity.title} color={rarity.color} />
  )),

  TYPE_OPTIONS.map((type, i) => <FilterSelection key={i} title={type.title} />),
];

const ORNAMENTS = [
  {
    image: '/images/ornamen/grass.jpg',
    color: 'common',
    name: 'Rumput',
    amount: 'x1',
    price: '10',
    id: '1',
  },
  {
    image: '/images/ornamen/grass.jpg',
    color: 'common',
    name: 'Rumput',
    amount: 'x1',
    price: '10',
    id: '2',
  },
  {
    image: '/images/ornamen/grass.jpg',
    color: 'common',
    name: 'Rumput',
    amount: 'x1',
    price: '10',
    id: '3',
  },
  {
    image: '/images/ornamen/grass.jpg',
    color: 'common',
    name: 'Rumput',
    amount: 'x1',
    price: '10',
    id: '4',
  },
  {
    image: '/images/ornamen/grass.jpg',
    color: 'common',
    name: 'Rumput',
    amount: 'x1',
    price: '10',
    id: '5',
  },
  {
    image: '/images/ornamen/grass.jpg',
    color: 'common',
    name: 'Rumput',
    amount: 'x1',
    price: '10',
    id: '6',
  },
  {
    image: '/images/ornamen/grass.jpg',
    color: 'common',
    name: 'Rumput',
    amount: 'x1',
    price: '10',
    id: '7',
  },
  {
    image: '/images/ornamen/grass.jpg',
    color: 'common',
    name: 'Rumput',
    amount: 'x1',
    price: '10',
    id: '8',
  },
  {
    image: '/images/ornamen/grass.jpg',
    color: 'common',
    name: 'Rumput Rumput liar yang kau biarkan berserakan',
    amount: 'x1',
    price: '10',
    id: '9',
  },
  {
    image: '/images/ornamen/grass.jpg',
    color: 'common',
    name: 'Rumput',
    amount: 'x1',
    price: '10',
    id: '10',
  },
];
//#endregion  //*======== Constant ===========

export default function CobapagePage() {
  // const {data, isLoading} = useQuery(['https://jsonplaceholder.typicode.com/todos/'])

  // const onSubmit = () => {
  //   const result = api.get('/')
  // }

  return (
    <DashboardLayout>
      <Seo templateTitle='Coba.page' />

      <main>
        <div className='background-purchase'>
          <div className='flexl'>
            {/* {JSON.stringify(data)}*/}
            <Typography variant='j2' className='text'>
              Toko Ornamen
            </Typography>
            <Typography variant='b3' className='text'>
              List ornamen yang dijual
            </Typography>

            <Typography variant='h6' className='text details'>
              KOIN ANDA SAAT INI
            </Typography>
            <Typography variant='s1' className='coin'>
              1000
            </Typography>

            {OPTIONS.map((option, i) => (
              <div
                key={i}
                className='flex layout items-center justify-center gap-4'
              >
                {option}
              </div>
            ))}

            <div className='layout items-center gap-4 grid grid-cols-5'>
              {ORNAMENTS.map((ornament, i) => (
                <OrnamentDisplay key={i} {...ornament} />
              ))}
            </div>

            <div className='gridcolumn pagin'>
              <Typography variant='s3' className='text-center grid-flow-col'>
                <Button variant='outline' size='base'>
                  {'<'}
                </Button>
                <Button variant='outline' size='base'>
                  {'>'}
                </Button>
              </Typography>
              <Typography variant='s3' className='text-center'>
                1 - 10 of 36 <br />
                Ornament per page:{' '}
                <b>
                  <u>10</u>
                </b>
                {/* tab */} <b>15</b> <b>20</b>
              </Typography>
            </div>
            <Typography variant='s3' className='text padding-lihat'>
              LIHAT LAINNYA
            </Typography>
            <ButtonLink
              href='../coba'
              variant='ghost'
              className='rounded shadow-lg lainnya'
            >
              <Typography variant='h3' className='text-center'>
                <NextImage
                  className='flex'
                  src='/images/ornamen/StoreIcon.png'
                  alt='ornamen'
                  width={25}
                  height={25}
                />
                Ornamen Tersedia
              </Typography>
            </ButtonLink>
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
}
// 1
function FilterSelection({ title, color }: { title: string; color?: string }) {
  return (
    <div className='flex items-center gap-1'>
      <input type='checkbox' className='round round shadow-lg' />
      {color && <div className={clsx(['w-4 h-4 rounded-full', color])}></div>}
      <Typography variant='s3'>{title}</Typography>
    </div>
  );
}

function OrnamentDisplay({
  image,
  color,
  name,
  amount,
  price,
  id,
}: {
  image: string;
  color: string;
  name: string;
  amount: string;
  price: string;
  id: string;
}) {
  return (
    <ButtonLink
      variant='ghost'
      href={`purchaseornamen/${id}`}
      className='rounded-xl border border-typo-outline shadow-lg flex flex-col'
    >
      <NextImage
        src={image}
        width='100'
        height='100'
        alt='ornamen'
        className='rounded-t-lg'
      />
      <Typography variant='b2' className='text category numgrid'>
        <div className={clsx(['circle', color])} />
        {name}
      </Typography>
      <Typography variant='b1' className='text category numgrid'>
        {amount}
      </Typography>
      <Typography variant='b1' className='text category numgrid price'>
        {price} KOIN
      </Typography>
    </ButtonLink>
  );
}
