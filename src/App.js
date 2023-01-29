
import './App.css';
import RAwaf from './assets/rawaf.png'
import Logo from './assets/SaeedLogo.png'
import AqqarSass from './assets/AqqarSass.png'
import Alfwilqg from './assets/1000q.png'
import TaskManagmant from './assets/TaskManagmant.png'

const posts = [
  {
    title: 'Rawaf',
    href: 'https://rawaf.ai/',
    category: { name: 'Web Application', href: '#' },
    description:
      `Rawaf is the leading property classifieds website in the KSA, connecting buyers, investors, landlords, sellers, tenants, and brokers to facilitate various real estate requirements in a seamless, user-friendly manner. Rawaf is a market leader known for going above and beyond.`,
    date: 'Mar 16, 2022',
    technologies: ['React', 'Tailwind'],
    postion: 'Technical Team Lead ',
    duration: 'Three months',
    datetime: '2022-03-16',
    imageUrl:
      RAwaf,
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      imageUrl:
      Logo,
    },
  },
  {
    title: 'AqarSass',
    href: 'https://www.aqarsas.com/',
    category: { name: 'Web Application', href: '#' },
    description:
      `AqarSass is a platform where you can get all real state news. It gets all its information from the Ministry of Justice.`,
    date: 'Sep 16, 2021',
    technologies: ['React', 'Tailwind'],
    postion: 'Technical Team Lead ',
    duration: 'Five months',
    datetime: '2021-09-16',
    imageUrl:
    AqqarSass,
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      imageUrl:
      Logo,
    },
  },
  {
    title: 'F charity',
    href: '#',
    category: { name: 'Web Application', href: '#' },
    description:
      `F charity was simple inventory management software designed to manage donors, beneficiaries, inventory, and employees. And printed out every in or out to the stock and kept historical data for analysis and tracking.`,
    date: 'Mar 01, 2016',
    technologies: ['React', 'Tailwind'],
    postion: 'Full-stack engineer ',
    duration: 'Six months',
    datetime: '2020-03-16',
    imageUrl:
    Alfwilqg,
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      imageUrl:
      Logo,
    },
  },
  {
    title: 'Task Management solution.',
    href: '#',
    category: { name: 'Web Application', href: '#' },
    description:
      `Created Task management tool where you could create and manage projects, tasks and
      meetings in one place. Also there is a reporting system where you can print meeting report, task
      status and other reports.`,
    date: 'Mar 16, 2020',
    technologies: ['React', 'Tailwind'],
    postion: 'Full-stack engineer ',
    duration: 'Six months',
    datetime: '2020-03-16',
    imageUrl:
    TaskManagmant,
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      imageUrl:
      Logo,
    },
  }
]



function App() {
  return (
    <div className="App text-center">




    <div className="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className=" max-h-screen bg-[#f9fafc] sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
        <div className=" flex justify-center mb-4">
      <svg
      className=' initial'
        width="150"
        height="150"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="50" fill="#445F70" />
        <circle
          cx="50"
          cy="50"
          r="43"
          fill="#445F70"
          stroke="white"
          stroke-width="4"
        />
        <path
          d="M60.52 71C58.84 71 57.3 70.965 55.9 70.895C54.5233 70.8017 53.415 70.65 52.575 70.44C51.7583 70.23 51.35 69.9383 51.35 69.565L53.1 66.87C53.7767 67.1733 54.71 67.3833 55.9 67.5C57.1133 67.5933 58.7117 67.64 60.695 67.64H64.055C65.1517 67.64 65.875 67.3833 66.225 66.87C66.575 66.3333 66.75 65.7617 66.75 65.155V53.22L66.47 50.42H71.37V64.735C71.37 65.9017 71.2183 66.9633 70.915 67.92C70.635 68.8767 70.04 69.635 69.13 70.195C68.2433 70.7317 66.8783 71 65.035 71H60.52Z"
          fill="white"
        />
        <path
          d="M29.72 45C28.1333 45 26.9667 44.93 26.22 44.79C25.4733 44.65 25.1 44.4867 25.1 44.3L26.5 41.255C27.0367 41.3483 28.3667 41.4417 30.49 41.535C32.6367 41.605 35.5767 41.64 39.31 41.64H39.975C40.9783 41.64 41.69 41.465 42.11 41.115C42.53 40.7417 42.74 40.1233 42.74 39.26V38.56C42.74 37.7433 42.565 37.16 42.215 36.81C41.8883 36.46 41.1417 36.285 39.975 36.285H31.855C29.4983 36.285 27.7833 35.8533 26.71 34.99C25.6367 34.1033 25.1 32.6683 25.1 30.685V30.125C25.1 29.0983 25.2867 28.1533 25.66 27.29C26.0567 26.4267 26.7217 25.7383 27.655 25.225C28.5883 24.6883 29.8717 24.42 31.505 24.42H41.025C42.6117 24.42 43.895 24.5017 44.875 24.665C45.855 24.8283 46.345 25.0033 46.345 25.19L45.645 28.13C45.0383 28.06 43.6617 27.99 41.515 27.92C39.3683 27.8267 36.4867 27.78 32.87 27.78L32.485 27.745C31.4117 27.745 30.6883 27.9667 30.315 28.41C29.9417 28.83 29.7433 29.3667 29.72 30.02V30.615C29.72 31.385 29.93 31.9683 30.35 32.365C30.7933 32.7383 31.5167 32.925 32.52 32.925H40.29C41.7833 32.925 43.055 33.0767 44.105 33.38C45.155 33.6833 45.96 34.2433 46.52 35.06C47.08 35.8533 47.36 37.0317 47.36 38.595V39.155C47.36 40.905 46.905 42.3167 45.995 43.39C45.1083 44.4633 43.5567 45 41.34 45H29.72Z"
          fill="white"
        />
        <path
          d="M38 73.9999L63 25.9999"
          stroke="white"
          stroke-width="4"
          stroke-linecap="square"
        />
      </svg>
      </div>

          {/* <h2 className="text-3xl font-bold tracking-tight text-[#455f70] sm:text-4xl">سعيد جديع ال جديع</h2> */}
          <h2 className="text-3xl font-bold tracking-tight text-[#455f70] sm:text-4xl">Saeed Judia Al Judia</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-400 sm:mt-4">A self-motivated, hardworking, and ambitious individual with a great passion for technology. I have excellent communication skills, enabling me to communicate effectively with a wide range of people. I enjoy improving my skills and abilities in different areas, I am a fast Learner, and I have the ability to work under pressure.</p>
          {/* <p className="mx-auto mt-3 max-w-2xl text-gray-400 sm:mt-4">مهتم في التقنية و البيانات - مطور مواقع ويب           </p> */}


          <div className="flex justify-center items-center flex-wrap space-x-2 my-3">


  {/* <!-- Github -->
  <a href='' type="button"  className="inline-block px-6 py-2.5 mb-2 bg-[#333] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="w-4 h-4">
      <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
    </svg>
  </a> */}



  {/* <!-- Linkedin --> */}
  <a href="https://linkedin.com/in/saeed-judia"  className="inline-block px-6 py-2.5 mb-2 bg-[#0077b5] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out" >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4">
      <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
    </svg>
  </a>


  {/* <!-- Twitter --> */}
  <a href="https://twitter.com/ss201ss" className="inline-block px-6 py-2.5 mb-2 bg-[#1da1f2] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out" >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4">
      <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
    </svg>
  </a>

  {/* <!-- Whatsapp --> */}
  <a href="https://wa.me/00966555120065"  className="inline-block px-6 py-2.5 mb-2 bg-[#128c7e] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out" >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4">
      <path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
    </svg>
  </a>


</div>


        </div>

<h1 className=" mt-9 flex items-center text-3xl font-extrabold text-[#455f70]">Projects<small class="ml-2 font-semibold text-sm text-gray-500 dark:text-gray-400">other project will be added soon</small></h1>
{/* <h1 dir='rtl' className="flex items-center text-3xl font-extrabold text-[#455f70]">المشاريع<small class="mr-2 font-semibold text-sm text-gray-500 dark:text-gray-400">بعض المشاريع غير معروضه</small></h1> */}

        <div className="mx-auto mt-12  grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3 overflow-x-scroll">
          {posts.map((post) => (
            <div key={post.title} className=" flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover " src={post.imageUrl} alt="" />
                
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#455f70]  inline-block w-fit">
                  {/* <p className="text-sm font-medium  border border-[#455f70] px-3 py-1 rounded-lg inline-block w-fit">
                    <p className="">
                      {post.category.name}
                    </p>
                  </p> */}
                  <span className="bg-blue-100 text-blue-800 text-lg font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">{post.category.name}</span>
                  </p>
                  <a href={post.href} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                    <p className="mt-3 text-base text-justify text-gray-500">{post.description}</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                      <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-left font-medium text-gray-900">
                      <a href={post.author.href} className="hover:underline">
                        {post.postion}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>Duration: {post.duration} </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}




        </div>

    <div className=" text-left flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 mt-9" role="alert">
  <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <span className="sr-only">Info</span>
  <div>
      <ul className="mt-1.5 ml-4 list-disc list-inside">
        <li>Resume</li>
        <li>Other projects</li>
        <li>Arabic Language</li>
        <li>Resume builder</li>
    </ul>
    <span className="font-medium">Soon it will be added.</span>
  </div>
</div>

      </div>
    </div>




    </div>
  );
}

export default App;
